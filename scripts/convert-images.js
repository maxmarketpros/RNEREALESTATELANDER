const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, '..', 'Assets');
const publicDir = path.join(__dirname, '..', 'public', 'images');

const galleries = [
  'Commercial Exterior Gallery',
  'Commercial Interior Gallery',
  'Residential Exterior Gallery',
  'Residential Interior Gallery'
];

async function convertImages() {
  // Create public/images directory
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Convert logo
  const logoPath = path.join(assetsDir, 'Logo-white-transparent-bg.png');
  if (fs.existsSync(logoPath)) {
    await sharp(logoPath)
      .webp({ quality: 90 })
      .toFile(path.join(publicDir, 'logo.webp'));
    console.log('Converted logo');
  }

  // Convert gallery images
  for (const gallery of galleries) {
    const galleryPath = path.join(assetsDir, gallery);
    const slugName = gallery.toLowerCase().replace(/ /g, '-');
    const outputDir = path.join(publicDir, slugName);

    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const files = fs.readdirSync(galleryPath);
    let index = 1;

    for (const file of files) {
      if (file.match(/\.(jpg|jpeg|png)$/i)) {
        const inputPath = path.join(galleryPath, file);
        const outputPath = path.join(outputDir, `${index}.webp`);

        try {
          await sharp(inputPath)
            .webp({ quality: 85 })
            .resize(1920, 1280, { fit: 'inside', withoutEnlargement: true })
            .toFile(outputPath);
          console.log(`Converted: ${gallery}/${file} -> ${index}.webp`);
          index++;
        } catch (err) {
          console.error(`Error converting ${file}:`, err.message);
        }
      }
    }
  }

  console.log('All images converted!');
}

convertImages().catch(console.error);
