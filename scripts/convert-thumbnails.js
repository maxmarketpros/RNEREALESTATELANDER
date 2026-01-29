const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '..', 'public', 'images', 'CARD-THUMBNAILS');
const outputDir = path.join(__dirname, '..', 'public', 'images', 'thumbnails');

const imageMap = {
    'commericalexterior.jpg': 'commercial-exterior.webp',
    'commericalinterior.jpg': 'commercial-interior.webp',
    'Residentialexterior.jpg': 'residential-exterior.webp',
    'Residentialinterior.jpg': 'residential-interior.webp'
};

async function convertThumbnails() {
    // Create output directory
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    for (const [input, output] of Object.entries(imageMap)) {
        const inputPath = path.join(inputDir, input);
        const outputPath = path.join(outputDir, output);

        try {
            await sharp(inputPath)
                .webp({ quality: 90 })
                .toFile(outputPath);
            console.log(`Converted: ${input} -> ${output}`);
        } catch (err) {
            console.error(`Error converting ${input}:`, err.message);
        }
    }

    console.log('Thumbnail conversion complete!');
}

convertThumbnails().catch(console.error);
