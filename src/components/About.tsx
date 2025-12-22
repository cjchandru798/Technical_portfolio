import { motion } from 'framer-motion';

export default function About() {
    return (
        <motion.div
            className="page-transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
        >
            <div className="grid md:grid-cols-2 gap-16 items-start">

                {/* Bio */}
                <div>
                    <h1 className="text-4xl font-bold mb-6">
                        <span className="text-purple-600">class</span> <span className="text-yellow-600">Developer</span> <span className="text-gray-400">extends</span> <span className="text-blue-600">Human</span>
                    </h1>

                    <div className="space-y-6 text-lg text-gray-600 leading-relaxed border-l-4 border-gray-100 pl-6">
                        <p>
                            I'm Hemachandiran, a creator at heart and an engineer by trade.
                            My passion lies in bridging the gap between <span className="text-purple-500 font-medium">logic</span> and <span className="text-pink-500 font-medium">creativity</span>.
                        </p>
                        <p>
                            With a strong foundation in Computer Science, I specialize in building systems that are not only robust but also intuitive.
                            I believe great software should feel invisible.
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="flex gap-12 mt-12">
                        <div>
                            <div className="text-4xl font-bold text-slate-800">04+</div>
                            <div className="text-sm font-mono text-gray-400 mt-1">YEARS CODE</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-slate-800">10+</div>
                            <div className="text-sm font-mono text-gray-400 mt-1">PROJECTS</div>
                        </div>
                    </div>
                </div>

                {/* Photo Card */}
                <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl transform rotate-6 group-hover:rotate-3 transition-transform opacity-20"></div>
                    <div className="relative bg-white p-2 rounded-2xl border border-gray-100 shadow-xl overflow-hidden aspect-[4/5]">
                        <div className="w-full h-full bg-slate-100 rounded-xl flex items-center justify-center text-slate-300">
                            {/* Photo Placeholder */}
                            <div className="text-center">
                                <span className="block text-5xl mb-2">📸</span>
                                <span className="font-mono text-sm">Image.jpg</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </motion.div>
    );
}
