import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

export default function Hero() {
    return (
        <section className="h-screen flex items-center justify-center p-6 bg-white overflow-hidden page-transition">
            <div className="max-w-4xl w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <div className="font-mono text-xs md:text-sm text-gray-400 tracking-widest pl-1">
                        INITIALIZING PORTFOLIO...
                    </div>

                    <div className="space-y-4">
                        <h1 className="text-6xl md:text-8xl font-black text-gray-900 tracking-tighter leading-[0.9]">
                            TECHNICAL <br />
                            <span className="text-gray-300">DEVELOPER.</span>
                        </h1>
                    </div>

                    <div className="h-4 font-mono text-sm text-blue-600">
                        <span className="mr-2">&gt;</span>
                        <Typewriter
                            words={['Building Scalable Systems', 'Architecting Solutions', 'Optimizing Performance']}
                            loop
                            cursor
                            cursorStyle="_"
                            typeSpeed={50}
                            deleteSpeed={20}
                            delaySpeed={2000}
                        />
                    </div>

                    <div className="pt-8 flex flex-col sm:flex-row gap-4">
                        <Link to="/projects" className="btn-primary text-center">
                            Execute Projects
                        </Link>
                        <Link to="/contact" className="px-6 py-3 border border-gray-200 rounded-md font-medium text-sm text-center hover:bg-gray-50 transition-colors">
                            Contact /api/me
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
