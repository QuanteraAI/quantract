import { EngineGraphic } from '../components/EngineGraphic';
import { PricingSection } from '../components/PricingSection';
import { Zap, MessageSquare, ShieldCheck, FileText, ArrowRight, Send, PlayCircle } from 'lucide-react';

export default function Home() {
    return (
        <main className="relative z-10 w-full">
            {/* Hero Section */}
            <section className="mx-auto max-w-5xl px-6 pt-36 pb-12 text-center">
                <h1 className="font-serif text-[68px] md:text-[88px] font-normal leading-[1.02] tracking-tight text-[var(--color-dark-text)] mx-auto max-w-[900px] text-balance">
                    Stop losing hours to dense procurement contracts.
                </h1>
                <p className="mt-8 text-[20px] md:text-[22px] text-stone-600 font-normal max-w-3xl mx-auto leading-[1.45]">
                    Upload 80-page vendor agreements and MSAs. Instantly extract your key terms, verify compliance with your playbook, and speed up procurement approvals.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                    <button className="bg-[var(--color-primary)] text-white text-base font-medium px-6 py-3 rounded shadow-[0px_-2px_0px_0px_rgba(255,255,255,0.25)_inset] hover:bg-[var(--color-primary-dark)] transition-all flex items-center justify-center gap-2">
                        Start for free <ArrowRight className="w-4 h-4" />
                    </button>
                    <button className="bg-white text-stone-800 border-2 border-stone-200 text-base font-medium px-6 py-3 rounded hover:border-stone-300 hover:bg-stone-50 transition-all flex items-center justify-center gap-2 shadow-sm">
                        <PlayCircle className="w-4 h-4 text-[var(--color-primary)]" /> Watch Demo
                    </button>
                </div>
            </section>

            {/* The Graphic Animation */}
            <EngineGraphic />

            {/* Feature Grid / USPs */}
            <section className="mx-auto max-w-6xl px-6 py-24">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-dark-text)] tracking-tight">The ultimate procurement operating system.</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Bento Large Card */}
                    <div className="lg:col-span-2 bg-white p-10 md:p-14 rounded-3xl border border-stone-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all relative overflow-hidden group">
                        <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
                            <Zap className="w-80 h-80 text-[var(--color-primary)]" />
                        </div>
                        <div className="relative z-10 max-w-lg">
                            <div className="w-16 h-16 bg-stone-50 rounded-2xl shadow-sm border border-stone-100 flex items-center justify-center mb-8">
                                <Zap className="w-8 h-8 text-[var(--color-primary)]" />
                            </div>
                            <h3 className="font-serif text-3xl md:text-4xl mb-4 text-[var(--color-dark-text)] tracking-tight">Simplified Terms</h3>
                            <p className="text-stone-600 text-lg md:text-xl leading-relaxed font-medium">
                                Strip away the legalese. Instantly review simplified vendor terms, procurement clauses, and obligations without manual reading.
                            </p>
                        </div>
                    </div>

                    {/* Bento Small Card */}
                    <div className="bg-white p-10 md:p-14 rounded-3xl border border-stone-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all relative overflow-hidden group flex flex-col justify-between">
                        <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
                            <ShieldCheck className="w-64 h-64 text-[var(--color-primary)]" />
                        </div>
                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-stone-50 rounded-2xl shadow-sm border border-stone-100 flex items-center justify-center mb-8">
                                <ShieldCheck className="w-8 h-8 text-[var(--color-primary)]" />
                            </div>
                            <h3 className="font-serif text-3xl md:text-4xl mb-4 text-[var(--color-dark-text)] tracking-tight">Custom Playbooks</h3>
                            <p className="text-stone-600 text-lg md:text-xl leading-relaxed font-medium">
                                Define standard KPIs. Quantract cross-checks documents to flag non-compliant terms.
                            </p>
                        </div>
                    </div>

                    {/* Bento Full-Width Card */}
                    <div className="lg:col-span-3 bg-white p-10 md:p-14 rounded-3xl border border-stone-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all relative overflow-hidden group flex flex-col md:flex-row items-center justify-between gap-10">
                        <div className="absolute -top-16 right-10 opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
                            <MessageSquare className="w-80 h-80 text-[var(--color-primary)]" />
                        </div>
                        <div className="relative z-10 max-w-2xl">
                            <div className="w-16 h-16 bg-stone-50 rounded-2xl shadow-sm border border-stone-100 flex items-center justify-center mb-8">
                                <MessageSquare className="w-8 h-8 text-[var(--color-primary)]" />
                            </div>
                            <h3 className="font-serif text-3xl md:text-4xl mb-4 text-[var(--color-dark-text)] tracking-tight">Chat with your contract</h3>
                            <p className="text-stone-600 text-lg md:text-xl leading-relaxed font-medium">
                                Got a specific question about IP indemnification? Ask directly. The highly-tuned LLM points you to the exact page and clause instantly, with 100% sourced citations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* UI Mockup Section */}
            <section className="mx-auto max-w-6xl px-6 py-12 pb-24">
                <div className="text-center mb-12">
                    <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-dark-text)] tracking-tight">Simplified contracts in seconds.</h2>
                    <p className="mt-4 text-stone-600 text-lg max-w-2xl mx-auto font-medium">Experience the dual-panel workflow designed for legal professionals and procurement teams.</p>
                </div>

                <div className="mt-8 rounded-2xl bg-white border border-stone-200 shadow-xl overflow-hidden flex flex-col md:flex-row h-[600px]">
                    {/* Split UI - Left Panel (PDF View) */}
                    <div className="flex-1 border-r border-stone-200 bg-stone-50 p-6 flex flex-col">
                        <div className="flex items-center justify-between mb-4 border-b border-stone-200 pb-4">
                            <span className="text-sm font-semibold text-stone-700 flex items-center gap-2"><FileText className="w-4 h-4" /> Vendor_Agreement_v3.pdf</span>
                            <span className="text-xs text-stone-500">Page 14 of 72</span>
                        </div>
                        <div className="flex-1 bg-white rounded shadow-sm border border-stone-200 p-8 overflow-hidden relative">
                            <div className="w-1/3 h-4 bg-stone-300 rounded mb-6"></div>
                            <div className="space-y-3">
                                <div className="w-full h-2 bg-stone-200 rounded"></div>
                                <div className="w-full h-2 bg-stone-200 rounded"></div>
                                <div className="w-5/6 h-2 bg-stone-200 rounded"></div>
                                <div className="w-full h-2 bg-stone-200 rounded"></div>
                            </div>
                            <div className="mt-8 space-y-3">
                                <div className="w-2/3 h-3 bg-red-100 rounded mb-2 border border-red-200"></div>
                                <div className="w-full h-2 bg-stone-200 rounded"></div>
                                <div className="w-4/5 h-2 bg-stone-200 rounded"></div>
                            </div>
                            {/* Highlight box */}
                            <div className="absolute top-[165px] left-6 right-6 h-12 border-2 border-[var(--color-primary)] bg-purple-500/10 rounded"></div>
                        </div>
                    </div>

                    {/* Split UI - Right Panel (AI View) */}
                    <div className="w-full md:w-[400px] lg:w-[450px] bg-white p-6 flex flex-col">
                        <div className="flex-1 overflow-y-auto mb-4 custom-scrollbar">
                            <div className="mb-6">
                                <h4 className="text-sm font-bold text-stone-800 uppercase tracking-wider mb-3">Extracted KPIs</h4>
                                <div className="flex flex-col gap-3">
                                    <div className="p-3 bg-stone-50 border border-stone-200 rounded-lg">
                                        <span className="text-xs text-stone-500 font-semibold uppercase block mb-1">Liability Cap</span>
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm font-bold text-stone-800">$1,000,000</span>
                                            <span className="text-xs px-2 py-0.5 bg-green-100 text-green-700 font-semibold rounded block">Compliant</span>
                                        </div>
                                    </div>
                                    <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                                        <span className="text-xs text-red-500 font-semibold uppercase block mb-1">Termination Notice</span>
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm font-bold text-red-800">15 Days (Playbook: 30)</span>
                                            <span className="text-xs px-2 py-0.5 bg-red-100 text-red-700 font-semibold rounded block">Flagged</span>
                                        </div>
                                    </div>
                                    <div className="p-3 bg-stone-50 border border-stone-200 rounded-lg">
                                        <span className="text-xs text-stone-500 font-semibold uppercase block mb-1"> Governing Law</span>
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm font-bold text-stone-800">State of Delaware</span>
                                            <span className="text-xs px-2 py-0.5 bg-green-100 text-green-700 font-semibold rounded block">Compliant</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Chat Section */}
                            <div>
                                <h4 className="text-sm font-bold text-stone-800 uppercase tracking-wider mb-3">Chat with document</h4>
                                <div className="bg-purple-50 p-3 rounded-t-lg rounded-br-lg border border-purple-100 inline-block mb-3">
                                    <p className="text-sm text-[var(--color-primary-dark)] font-medium">Does this contain a non-compete clause?</p>
                                </div>
                                <div className="bg-stone-50 p-3 rounded-lg border border-stone-200 text-sm text-stone-700 leading-relaxed font-medium">
                                    Yes. Section 4.2 restricts solicitation for a period of <strong className="text-stone-900 border-b border-stone-300">2 years</strong> after termination. <a href="#" className="text-[var(--color-primary)] hover:underline">See Page 14</a>.
                                </div>
                            </div>
                        </div>

                        {/* Input field */}
                        <div className="mt-auto relative">
                            <input
                                type="text"
                                placeholder="Ask about terms, clauses, or obligations..."
                                className="w-full border border-stone-300 rounded-lg py-3 pl-4 pr-12 text-sm font-medium focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)]"
                            />
                            <button className="absolute right-2 top-2 p-1.5 bg-[var(--color-primary)] text-white rounded hover:bg-[var(--color-primary-dark)] transition-colors">
                                <Send className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <PricingSection />
        </main>
    );
}
