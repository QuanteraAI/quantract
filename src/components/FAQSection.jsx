import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        question: "Do you train your models on our data?",
        answer: "No. We have zero data retention agreements with our providers and we do not use any customer data to train our foundational models. Your contracts remain completely private and secure."
    },
    {
        question: "What types of contracts do you support?",
        answer: "Quantract is optimized for dense B2B agreements, including MSAs, DPAs, NDAs, and complex vendor agreements. It automatically handles challenging layouts, multi-column tables, and embedded exhibits."
    },
    {
        question: "Can we integrate this with our existing CLM?",
        answer: "Yes. Enterprise plans include comprehensive API access and custom processing pipelines to seamlessly connect Quantract's extraction engine directly into your existing Contract Lifecycle Management (CLM) or ERP systems."
    },
    {
        question: "How accurate is the playbook compliance checker?",
        answer: "Our system is highly accurate and verifiable. Every extracted term and compliance flag includes a direct citation to the exact line in the original document, ensuring you always have the source of truth."
    }
];

export const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section className="mx-auto max-w-4xl px-6 py-24 pb-32">
            <div className="text-center mb-16">
                <h2 className="font-serif text-5xl md:text-6xl text-[var(--color-dark-text)] tracking-tight">Questions, answered.</h2>
            </div>
            <div className="border-t border-stone-200">
                {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-stone-200">
                        <button
                            className="w-full py-6 flex items-center justify-between text-left focus:outline-none"
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        >
                            <span className="font-medium text-lg text-[var(--color-dark-text)] pr-8">{faq.question}</span>
                            <ChevronDown className={`w-5 h-5 text-stone-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                            {openIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="overflow-hidden"
                                >
                                    <p className="pb-6 text-stone-600 leading-relaxed pr-12">
                                        {faq.answer}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </section>
    );
};
