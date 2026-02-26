import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
            <nav
                className={`pointer-events-auto flex items-center justify-between px-6 py-4 rounded-full transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${scrolled
                    ? 'w-[90%] md:w-[600px] bg-white/80 backdrop-blur-md shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-stone-200'
                    : 'w-full md:w-[1280px] bg-transparent border-transparent'
                    }`}
            >
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2.5 font-serif text-[28px] font-medium tracking-tight text-[var(--color-dark-text)] leading-none">
                    <img src="/logo.png" alt="Quantract" className="h-7 w-auto object-contain" />
                    Quantract
                </Link>

                {/* Links */}
                <div className={`hidden md:flex gap-8 text-sm font-medium transition-colors duration-500 ${scrolled ? 'text-stone-800' : 'text-stone-600'}`}>
                    <Link to="/" className="hover:text-[var(--color-primary)] transition-colors">Product</Link>
                    <Link to="/pricing" className="hover:text-[var(--color-primary)] transition-colors">Pricing</Link>
                </div>

                <div className="flex gap-4 items-center">
                    <a href="#" className={`text-sm font-medium transition-colors hover:text-[var(--color-primary)] hidden sm:block ${scrolled ? 'text-stone-800' : 'text-stone-600'}`}>Log in</a>
                </div>
            </nav>
        </header>
    );
};
