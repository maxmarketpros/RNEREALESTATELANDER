import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "What is the typical turnaround time?",
        answer:
            "Turnaround varies by service and current demand. Standard photo packages are typically delivered within 24-48 hours. Video, drone, and 3D tours may take 48-72 hours. We also offer expedited delivery for time-sensitive listings.",
    },
    {
        question: "What files and formats are delivered?",
        answer:
            "You'll receive high-resolution files optimized for MLS, print, and web. Photos come in both full-resolution and web-optimized versions. Videos are delivered in MP4 format. All files are provided via secure download link.",
    },
    {
        question: "How does scheduling work?",
        answer:
            "After you request a quote and confirm your booking, we'll coordinate with you to find a time that works for the property. We recommend scheduling at least 2-3 days in advance for best availability, though we can often accommodate shorter notice.",
    },
    {
        question: "Do you offer drone photography and video?",
        answer:
            "Yes, we provide aerial photography and videography services. Drone services are subject to weather conditions and local regulations. We'll advise on feasibility during the booking process.",
    },
    {
        question: "Do you work with both commercial and residential properties?",
        answer:
            "Absolutely. We serve real estate agents, builders, property managers, and businesses with both residential and commercial media needs. Our pricing and packages can be customized for any property type.",
    },
    {
        question: "How should I prepare the property for the shoot?",
        answer:
            "We recommend decluttering surfaces, turning on all lights, opening blinds, hiding personal items and valuables, and ensuring the property is clean. We'll provide a detailed preparation checklist when you book.",
    },
    {
        question: "How do I request a quote?",
        answer:
            "You can fill out our quote form on this page with your property details and needs. Alternatively, call us directly at (940) 327-9977 and we'll provide a quote over the phone.",
    },
    {
        question: "What areas do you service?",
        answer:
            "We serve the DFW metroplex including Parker, Tarrant, Wise, Palo Pinto, and surrounding counties. If you're outside this area, reach out anyway—we may be able to accommodate depending on the project.",
    },
];

export default function FAQ() {
    return (
        <section id="faq" className="py-16 lg:py-24 bg-black">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <p className="text-xs tracking-[0.3em] uppercase text-[#D07A2D] mb-4">
                        Common Questions
                    </p>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                        FAQ
                    </h2>
                </div>

                {/* Accordion */}
                <Accordion type="single" collapsible className="space-y-4">
                    {faqs.map((faq, index) => (
                        <AccordionItem
                            key={index}
                            value={`item-${index}`}
                            className="bg-[#111] border border-white/5 rounded-none px-6 data-[state=open]:border-[#D07A2D]/30 transition-colors duration-300"
                        >
                            <AccordionTrigger className="text-left text-white hover:text-[#D07A2D] text-lg font-medium py-6 hover:no-underline">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-400 pb-6 leading-relaxed">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
