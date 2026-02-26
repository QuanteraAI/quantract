
import { Check } from 'lucide-react';

export const PricingSection = () => {
    return (
        <section className="mx-auto max-w-6xl px-6 py-24 pb-32">
            <div className="text-center mb-16">
                <h2 className="font-serif text-5xl md:text-6xl text-[var(--color-dark-text)] tracking-tight">Choose the plan that <span className="text-[var(--color-primary)]">best fits</span> your needs</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* Professional Plan */}
                <div className="bg-white rounded-2xl p-8 md:p-10 border border-stone-200 shadow-sm relative overflow-hidden flex flex-col hover:shadow-md transition-shadow">
                    <div className="absolute top-0 left-0 w-full h-2 bg-stone-200" />
                    <h3 className="font-serif text-4xl text-[var(--color-dark-text)] mb-2 mt-2">Professional</h3>
                    <p className="text-stone-500 text-sm font-medium mb-6">For legal and procurement teams</p>
                    <div className="mb-8">
                        <span className="text-3xl font-semibold text-[var(--color-dark-text)]">$499</span><span className="text-stone-500 font-medium">/month</span>
                        <div className="text-xs text-stone-400 mt-1 font-medium">Billed Annually</div>
                    </div>
                    <button className="w-full bg-[#3F3F3A] text-white text-base font-medium px-6 py-3.5 rounded shadow-[0px_-2px_0px_0px_rgba(255,255,255,0.25)_inset] hover:bg-black transition-all mb-8">
                        Get started
                    </button>
                    <div className="flex-1">
                        <p className="text-xs font-bold text-stone-800 uppercase tracking-wider mb-4">CORE FUNCTIONALITY</p>
                        <ul className="space-y-4">
                            {['Up to 100 contracts/month', 'Automated KPI extraction', 'Custom playbook templates', 'Chat with your contract', 'Email support'].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-stone-700 font-medium">
                                    <Check className="w-5 h-5 text-stone-800 shrink-0" /> <span className="mt-0.5">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Enterprise Plan */}
                <div className="bg-purple-50/30 rounded-2xl p-8 md:p-10 border border-purple-200 shadow-sm relative overflow-hidden flex flex-col hover:shadow-md transition-shadow">
                    <div className="absolute top-0 left-0 w-full h-2 bg-[var(--color-primary)]" />
                    <h3 className="font-serif text-4xl text-[var(--color-dark-text)] mb-2 mt-2">Enterprise</h3>
                    <p className="text-stone-500 text-sm font-medium mb-6">Built for full control & custom needs</p>
                    <div className="mb-8">
                        <span className="text-3xl font-semibold text-[var(--color-dark-text)]">Custom</span>
                    </div>
                    <button className="w-full bg-white text-stone-800 border-2 border-stone-200 text-base font-medium px-6 py-3.5 rounded hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all mb-8 flex items-center justify-center gap-2 shadow-sm">
                        Contact sales <span aria-hidden="true">&rarr;</span>
                    </button>
                    <div className="flex-1">
                        <p className="text-xs font-bold text-[var(--color-primary)] uppercase tracking-wider mb-4">EVERYTHING IN PROFESSIONAL, PLUS:</p>
                        <ul className="space-y-4">
                            {['Unlimited contracts', 'Custom & Pre-built MSAs & Playbooks', 'Priority Support', 'SSO and SAML Authentication'].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-stone-700 font-medium">
                                    <Check className="w-5 h-5 text-[var(--color-primary)] shrink-0" /> <span className="mt-0.5">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};
