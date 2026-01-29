const steps = [
    {
        number: "01",
        title: "Request a Quote",
        description: "Tell us about your property and media needs.",
    },
    {
        number: "02",
        title: "Schedule a Shoot",
        description: "Pick a time that works for you and the property.",
    },
    {
        number: "03",
        title: "Capture + Edit",
        description: "Our team captures and professionally edits your media.",
    },
    {
        number: "04",
        title: "Delivery",
        description: "Receive MLS-ready files directly to your inbox.",
    },
    {
        number: "05",
        title: "Revisions",
        description: "Request adjustments if needed. We want you satisfied.",
    },
];

export default function Process() {
    return (
        <section id="process" className="py-16 lg:py-24 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <p className="text-xs tracking-[0.3em] uppercase text-[#D07A2D] mb-4">
                        How It Works
                    </p>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                        Our Process
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A streamlined workflow designed to get you stunning media fast.
                    </p>
                </div>

                {/* Steps - Desktop Horizontal */}
                <div className="hidden lg:flex items-start justify-between relative">
                    {/* Connecting Line */}
                    <div className="absolute top-8 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-[#D07A2D]/50 via-[#D07A2D] to-[#D07A2D]/50" />

                    {steps.map((step, index) => (
                        <div
                            key={step.number}
                            className="relative flex flex-col items-center text-center w-1/5"
                        >
                            {/* Number Circle */}
                            <div className="relative z-10 w-16 h-16 flex items-center justify-center bg-[#0A0A0A] border-2 border-[#D07A2D] text-[#D07A2D] font-bold text-lg mb-6">
                                {step.number}
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-semibold text-white mb-2">
                                {step.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Steps - Mobile Vertical */}
                <div className="lg:hidden space-y-8">
                    {steps.map((step, index) => (
                        <div key={step.number} className="relative flex gap-6">
                            {/* Vertical Line */}
                            {index < steps.length - 1 && (
                                <div className="absolute left-8 top-16 bottom-0 w-[1px] bg-gradient-to-b from-[#D07A2D] to-transparent" />
                            )}

                            {/* Number Circle */}
                            <div className="relative z-10 w-16 h-16 flex-shrink-0 flex items-center justify-center bg-[#0A0A0A] border-2 border-[#D07A2D] text-[#D07A2D] font-bold text-lg">
                                {step.number}
                            </div>

                            {/* Content */}
                            <div className="pt-3">
                                <h3 className="text-lg font-semibold text-white mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
