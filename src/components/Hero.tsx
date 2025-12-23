
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { FiDownload, FiArrowRight } from 'react-icons/fi';
import Resume from '../assets/resume.pdf';
import ProfileImage from '../assets/selfimage.jpg';

export default function Hero() {
    // Mouse tracking for 3D tilt
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

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

                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-slate-900">
                            Hello, I'm <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
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
                            className="px-8 py-3.5 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-600 border border-blue-100 rounded-xl font-bold hover:shadow-md transition-all flex items-center justify-center gap-2 group"
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
                        <a href="https://wa.me/9962098084" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition-colors transform hover:scale-110">
                            <FaWhatsapp size={28} />
                        </a>
                    </div>
                </div>

                {/* Right Photo Area: Holographic Projector */}
                <motion.div
                    className="order-1 md:order-2 flex flex-col items-center justify-center relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Perspective Container */}
                    <div
                        className="relative group cursor-pointer"
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        style={{ perspective: "1000px" }}
                    >
                        {/* Light Beam Effect */}
                        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-48 h-[400px] bg-gradient-to-t from-blue-400/20 via-blue-400/5 to-transparent clip-path-beam opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                        {/* Hologram Display */}
                        <motion.div
                            style={{
                                rotateX,
                                rotateY,
                                transformStyle: "preserve-3d"
                            }}
                            className="relative w-72 h-72 md:w-96 md:h-96"
                        >
                            {/* Floating Motion */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="w-full h-full relative"
                            >
                                {/* The Image with Holographic overlays */}
                                <div className="relative w-full h-full rounded-2xl overflow-hidden border border-cyan-400/30 shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                                    {/* Scanlines Overlay */}
                                    <div className="absolute inset-0 z-20 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_2px,3px_100%]"></div>

                                    {/* Digital Grid */}
                                    <div className="absolute inset-0 z-20 opacity-10 pointer-events-none bg-[radial-gradient(#22d3ee_1px,transparent_1px)] [background-size:20px_20px]"></div>

                                    {/* flickering effect */}
                                    <motion.div
                                        className="absolute inset-0 z-20 bg-cyan-400/5 pointer-events-none"
                                        animate={{ opacity: [0, 0.1, 0] }}
                                        transition={{ duration: 0.1, repeat: Infinity, repeatDelay: 3 }}
                                    ></motion.div>

                                    <img
                                        src={ProfileImage}
                                        alt="Hemachandiran"
                                        className="w-full h-full object-cover filter brightness-110 contrast-110 hue-rotate-[5deg]"
                                    />

                                    {/* Technical Readouts */}
                                    <div className="absolute top-4 left-4 z-30 font-mono text-[10px] text-cyan-400 opacity-70">
                                        <p>SYS_STATUS: ACTIVE</p>
                                        <p>UID: 0xHEMA_24</p>
                                    </div>
                                    <div className="absolute bottom-4 right-4 z-30 font-mono text-[10px] text-cyan-400 opacity-70 text-right">
                                        <p>LOC: 13.0827° N</p>
                                        <p>RAD: 80.2707° E</p>
                                    </div>

                                    {/* Active Scanning Line */}
                                    <motion.div
                                        className="absolute top-0 left-0 w-full h-0.5 bg-cyan-400/50 shadow-[0_0_10px_#22d3ee] z-40"
                                        animate={{ top: ["0%", "100%", "0%"] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                    ></motion.div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Projector Base */}
                    <div className="mt-8 relative hidden md:block">
                        <div className="w-24 h-4 bg-slate-200 rounded-lg shadow-inner relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-100 to-transparent animate-shimmer"></div>
                            {/* Lens */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-cyan-400/50 rounded-full blur-[2px]"></div>
                        </div>
                        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-12 h-1 bg-cyan-400 shadow-[0_0_15px_#22d3ee] animate-pulse rounded-full"></div>
                    </div>
                </motion.div>
            </div>

            {/* Global style for beam shape */}
            <style>{`
                .clip-path-beam {
                    clip-path: polygon(40% 100%, 60% 100%, 100% 0, 0 0);
                }
                @keyframes shimmer {
                    from { transform: translateX(-100%); }
                    to { transform: translateX(100%); }
                }
                .animate-shimmer {
                    animation: shimmer 2s infinite;
                }
            `}</style>
        </motion.section>
    );
}
