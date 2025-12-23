
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { FiDownload, FiArrowRight } from 'react-icons/fi';
import Resume from '../assets/resume.pdf';

export default function Hero() {
    return (
        <motion.section
            className="min-h-screen flex items-center justify-center pt-20 pb-10 px-6 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="space-y-8 order-2 md:order-1">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-3 h-3 rounded-full bg-red-400" />
                            <div className="w-3 h-3 rounded-full bg-yellow-400" />
                            <div className="w-3 h-3 rounded-full bg-green-400" />
                            <span className="ml-2 font-mono text-xs text-gray-400">~/hema/portfolio</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
                            <span className="text-slate-800">Hello, I'm</span> <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
                                Hemachandiran.
                            </span>
                        </h1>

                        <div className="text-xl md:text-2xl font-mono h-12">
                            <span className="text-purple-500">const</span> <span className="text-blue-500">role</span> = <span className="text-green-500">
                                '<Typewriter
                                    words={['Full Stack Developer', 'UI/UX Designer', 'Tech Enthusiast']}
                                    loop
                                    cursor
                                    cursorStyle="_"
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1500}
                                />'
                            </span>
                        </div>
                    </motion.div>

                    <motion.p
                        className="text-gray-600 text-lg leading-relaxed max-w-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        Turning coffee into clean code. I build accessible, pixel-perfect, and performant web experiences.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        <Link
                            to="/projects"
                            className="px-8 py-3.5 bg-slate-900 text-white rounded-xl font-bold hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-200 flex items-center justify-center gap-2 group"
                        >
                            View Projects
                            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <Link
                            to="/contact"
                            className="px-8 py-3.5 bg-white border-2 border-slate-100 text-slate-900 rounded-xl font-bold hover:border-slate-900 hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
                        >
                            <FaEnvelope />
                            Contact Me
                        </Link>

                        <a
                            href={Resume}
                            download="Hemachandiran_Resume.pdf"
                            className="px-8 py-3.5 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600 border border-blue-100 rounded-xl font-bold hover:shadow-md transition-all flex items-center justify-center gap-2 group"
                        >
                            <FiDownload className="group-hover:translate-y-0.5 transition-transform" />
                            Resume
                        </a>
                    </motion.div>

                    <div className="flex gap-6 pt-4 text-gray-400">
                        <a href="https://github.com/cjchandru798" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors transform hover:scale-110">
                            <FaGithub size={28} />
                        </a>
                        <a href="https://linkedin.com/in/hemachandiran-a-242527300" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors transform hover:scale-110">
                            <FaLinkedin size={28} />
                        </a>
                        <a href="https://wa.me/9962098084" className="hover:text-pink-600 transition-colors transform hover:scale-110">
                            <FaWhatsapp size={28} />
                        </a>
                    </div>
                </div>

                {/* Right Photo */}
                <motion.div
                    className="order-1 md:order-2 flex justify-center md:justify-end"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="relative w-72 h-72 md:w-96 md:h-96">
                        {/* Abstract Shapes behind */}
                        <div className="absolute top-0 right-0 w-full h-full bg-blue-100 rounded-full blur-3xl opacity-50 animate-pulse"></div>
                        <div className="absolute bottom-0 left-0 w-3/4 h-3/4 bg-purple-100 rounded-full blur-3xl opacity-50"></div>

                        {/* Image Container */}
                        <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-white shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                            {/* Placeholder for Photo */}
                            <div className="w-full h-full bg-slate-200 flex items-center justify-center flex-col text-slate-400">
                                <span className="text-4xl mb-2">👋</span>
                                <span className="font-mono text-sm">Add Photo Here</span>
                            </div>
                        </div>

                        {/* Floating Tech Badges */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="absolute -right-4 top-10 bg-white p-3 rounded-lg shadow-lg border border-gray-100"
                        >
                            <span className="text-2xl">⚛️</span>
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="absolute -left-4 bottom-10 bg-white p-3 rounded-lg shadow-lg border border-gray-100"
                        >
                            <span className="text-2xl">🚀</span>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}
