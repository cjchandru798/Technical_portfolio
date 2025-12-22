import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    const links = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Projects', path: '/projects' },
        { name: 'Skills', path: '/skills' },
        { name: 'Contact', path: '/contact' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-6 pointer-events-none">
            <motion.nav
                className={`pointer-events-auto flex items-center gap-1 rounded-full p-2 border transition-all duration-500 bg-white/80 backdrop-blur-md ${isScrolled ? 'shadow-lg border-gray-200' : 'shadow-sm border-transparent'}`}
                layout
            >
                {links.map((link) => (
                    <NavLink
                        key={link.path}
                        to={link.path}
                        className={({ isActive }) => `
                        relative px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300
                        ${isActive ? 'text-black' : 'text-gray-500 hover:text-black hover:bg-gray-100/50'}
                    `}
                    >
                        {link.name}
                        {location.pathname === link.path && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute inset-0 bg-gray-100 rounded-full -z-10 mix-blend-multiply"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                    </NavLink>
                ))}
            </motion.nav>
        </div>
    );
}
