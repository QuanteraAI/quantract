

export default function Privacy() {
    return (
        <main className="relative z-10 w-full max-w-4xl mx-auto px-6 py-32 font-sans text-stone-800">
            <h1 className="font-serif text-5xl md:text-6xl text-[var(--color-dark-text)] mb-8 tracking-tight">Privacy Policy</h1>
            <div className="space-y-6 text-lg text-stone-600 leading-relaxed font-medium">
                <p>Last updated: October 2024</p>

                <h2 className="font-serif text-3xl text-[var(--color-dark-text)] mt-12 mb-4">1. Information We Collect</h2>
                <p>To provide you with the core functionality of Quantract - simplifying dense procurement contracts - we collect minimal necessary data:</p>
                <ul className="list-disc pl-6 space-y-2 text-stone-700">
                    <li><strong>Account Information:</strong> Your name, email address, and billing information to provide access to the platform.</li>
                    <li><strong>Document Data:</strong> The MSAs, vendor agreements, and playbooks you deliberately upload to our platform for processing.</li>
                </ul>

                <h2 className="font-serif text-3xl text-[var(--color-dark-text)] mt-12 mb-4">2. Zero Data Retention (ZDR) & Data Ephemerality</h2>
                <p>Because you are trusting us with highly confidential corporate legal documents, our system architecture is privacy-by-design. We maintain a strict Zero Data Retention (ZDR) policy across our application infrastructure.</p>
                <p>This means customer data included in requests and responses with our underlying Large Language Models (LLMs) is not persisted and exists only in memory in order to process a request.</p>

                <h2 className="font-serif text-3xl text-[var(--color-dark-text)] mt-12 mb-4">3. Data Usage and Model Training Restrictions</h2>
                <p>We believe your data remains yours. Under no circumstances is your data used for external AI training:</p>
                <ul className="list-disc pl-6 space-y-2 text-stone-700">
                    <li><strong>No Foundation Training:</strong> We never use any of your data, documents, chat interactions, or parsed contracts to train, fine-tune, or improve our foundation or third-party AI models.</li>
                    <li><strong>Complete Deletion:</strong> No data is retained, stored, or capable of being restored after 15 days. Every uploaded document, alongside all generated insights, extraction logs, and chat histories, is automatically and permanently deleted from our servers upon reaching this 15-day threshold.</li>
                </ul>

                <h2 className="font-serif text-3xl text-[var(--color-dark-text)] mt-12 mb-4">4. Security Infrastructure</h2>
                <p>We use industry-standard encryption protocols (AES-256 for data temporarily at rest, and TLS 1.3 for data in transit) to ensure that your corporate data remains entirely secure while actively being processed within our Virtual Private Cloud (VPC).</p>

                <h2 className="font-serif text-3xl text-[var(--color-dark-text)] mt-12 mb-4">5. Third-Party Service Providers</h2>
                <p>We work with select enterprise LLM providers to process your documents. We only engage with providers who have signed rigorous Business Associate Agreements (BAAs) and Data Processing Agreements (DPAs) that legally mandate our Zero Data Retention (ZDR) infrastructure.</p>

                <h2 className="font-serif text-3xl text-[var(--color-dark-text)] mt-12 mb-4">6. Contact Us</h2>
                <p>If you have questions or concerns about this Privacy Policy, our Zero Data Retention controls, or our infrastructure, please contact our security team at privacy@quantract.ai.</p>
            </div>
        </main>
    );
}
