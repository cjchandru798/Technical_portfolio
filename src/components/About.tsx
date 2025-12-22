import { motion } from 'framer-motion';

export default function About() {
    return (
        <motion.section
            className="section-container pt-32"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <div className="max-w-4xl mx-auto">
                <div className="border-l-2 border-gray-900 pl-6 mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">About Me</h1>
                    <p className="text-gray-500 font-mono text-sm">Last Updated: Dec 2025</p>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {/* Bio */}
                    <div className="md:col-span-2 space-y-6 text-gray-700 leading-relaxed">
                        <p>
                            I am a <strong>Full Stack Developer</strong> with a structured approach to solving problems.
                            I don't just write code; I architect solutions that are scalable, maintainable, and efficient.
                        </p>
                        <p>
                            Currently focusing on modern web technologies like React, Node.js, and Cloud Infrastructure.
                            My workflow is data-driven and user-centric, ensuring that every pixel serves a purpose.
                        </p>

                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <div className="bg-gray-50 p-4 border border-gray-100 rounded-lg">
                                <h3 className="font-bold text-2xl text-gray-900">4+</h3>
                                <p className="text-xs text-gray-500 uppercase tracking-wide">Years Experience</p>
                            </div>
                            <div className="bg-gray-50 p-4 border border-gray-100 rounded-lg">
                                <h3 className="font-bold text-2xl text-gray-900">10+</h3>
                                <p className="text-xs text-gray-500 uppercase tracking-wide">Shipments</p>
                            </div>
                        </div>
                    </div>

                    {/* Photo Placeholder */}
                    <div className="relative">
                        <div className="aspect-[3/4] bg-gray-900 rounded-lg relative overflow-hidden flex items-center justify-center text-gray-500 border border-gray-800">
                            <div className="text-center p-4">
                                <div className="text-4xl mb-4">📷</div>
                                <span className="text-xs font-mono uppercase tracking-widest text-gray-400">Photo Slot</span>
                            </div>
                        </div>
                        <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gray-200 -z-10 rounded-lg"></div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
