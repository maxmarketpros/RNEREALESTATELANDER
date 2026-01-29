"use client";

const videos = [
    {
        id: "1vb3TmmjzwOZFpv6pob6pv4FvxoXaoVCC",
        title: "Property Showcase Video",
    },
    {
        id: "1BEEyE1RMBLl4mk-mWg9mSJIElD9UdPZu",
        title: "Aerial Property Tour",
    },
];

export default function VideoShowcase() {
    return (
        <section className="py-16 lg:py-24 bg-[#0A0A0A]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12 lg:mb-16">
                    <p className="text-xs tracking-[0.3em] uppercase text-[#D07A2D] mb-4">
                        Sample Work
                    </p>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                        Video Showcase
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        See our professional video work in action. High-quality property videos that capture attention and sell listings faster.
                    </p>
                </div>

                {/* Videos Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                    {videos.map((video) => (
                        <div
                            key={video.id}
                            className="group relative bg-[#111] border border-white/5 hover:border-[#D07A2D]/30 transition-all duration-300"
                        >
                            {/* Video Container */}
                            <div className="relative aspect-video">
                                <iframe
                                    src={`https://drive.google.com/file/d/${video.id}/preview`}
                                    className="absolute inset-0 w-full h-full"
                                    allow="autoplay; encrypted-media"
                                    allowFullScreen
                                    title={video.title}
                                />
                            </div>

                            {/* Video Title Bar */}
                            <div className="p-4 border-t border-white/5">
                                <h3 className="text-white font-medium">{video.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                    <p className="text-gray-400 mb-4">
                        Want videos like these for your listings?
                    </p>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 text-[#D07A2D] hover:text-[#B86A25] font-medium transition-colors duration-200"
                    >
                        Get a Quote
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
