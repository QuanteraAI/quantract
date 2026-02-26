
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <section className="relative w-full flex flex-col pt-12 pb-4 md:pb-8 px-4 md:px-8 bg-transparent">
            {/* Footer */}
            <div className="relative z-20 w-full mt-auto">
                <footer className="w-full bg-white border border-stone-200 rounded-[2rem] md:rounded-[3rem] overflow-hidden flex flex-col pt-12 md:pt-16 px-8 md:px-16 shadow-xl relative z-20">

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 font-sans relative z-10 w-full">
                        {/* Brand & Status */}
                        <div className="flex flex-col">
                            <div>
                                <div className="font-serif text-4xl tracking-tight text-[var(--color-dark-text)] mb-4 flex items-center gap-3">
                                    <img src="/logo.png" alt="Quantract" className="h-8 w-auto object-contain" /> Quantract
                                </div>
                                <p className="max-w-md text-stone-600 leading-relaxed font-medium">
                                    Stop losing hours to dense procurement contracts. Instantly extract your key terms, verify compliance, and speed up approvals.
                                </p>
                            </div>

                            <div className="mt-12 flex items-center gap-3 bg-stone-50 w-fit px-5 py-3 rounded-full border border-stone-200 shadow-inner mb-6 md:mb-0">
                                <div className="relative w-2.5 h-2.5" aria-hidden="true">
                                    <div className="absolute inset-0 w-full h-full rounded-full bg-green-500 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] opacity-75" />
                                    <div className="relative w-2.5 h-2.5 rounded-full bg-green-500" />
                                </div>
                                <span className="text-xs font-semibold text-stone-700 uppercase tracking-widest">System Operational</span>
                            </div>
                        </div>

                        {/* Legal Nav */}
                        <nav aria-label="Legal links" className="pb-4 z-20">
                            <ul className="flex gap-8 text-lg font-medium text-stone-600">
                                <li><Link to="/privacy" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-[var(--color-primary)] transition-colors duration-300">Privacy Policy</Link></li>
                                <li><Link to="/terms" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-[var(--color-primary)] transition-colors duration-300">Terms of Service</Link></li>
                            </ul>
                        </nav>
                    </div>

                    {/* Decorative Large Text */}
                    <div className="relative mt-20 mb-[-3%] flex items-end justify-center w-full min-h-[150px] text-center pointer-events-none select-none overflow-hidden" aria-hidden="true">
                        <span
                            className="font-serif text-[18vw] leading-[0.7] tracking-tighter whitespace-nowrap translate-y-[15%] bg-gradient-to-b from-[var(--color-primary)] to-transparent bg-clip-text text-transparent opacity-10"
                        >
                            QUANTRACT
                        </span>
                    </div>

                </footer>
            </div>
        </section>
    );
};
