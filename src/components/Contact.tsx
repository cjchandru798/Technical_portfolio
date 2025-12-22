import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Contact() {
    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        toast.success("Message sent successfully (Simulation)");
    };

    return (
        <motion.div
            className="page-transition min-h-screen pt-32 pb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
        >
            <div className="grid lg:grid-cols-2 gap-16">

                {/* Left Column: Info */}
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-8">
                        Let's work <br />
                        <span className="text-gray-400">together.</span>
                    </h1>

                    <div className="space-y-8 mb-12">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-gray-50 rounded-lg text-black">
                                <FaEnvelope size={20} />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900">Email</h3>
                                <a href="mailto:hemachandiran.dev@example.com" className="text-gray-500 hover:text-black hover:underline transition-colors">
                                    hemachandiran.dev@example.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-gray-50 rounded-lg text-black">
                                <FaMapMarkerAlt size={20} />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900">Location</h3>
                                <p className="text-gray-500">Chennai, India</p>
                            </div>
                        </div>
                    </div>

                    {/* Socials */}
                    <div>
                        <h3 className="font-mono text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Connect</h3>
                        <div className="flex gap-4">
                            {[FaGithub, FaLinkedin, FaTwitter].map((Icon, i) => (
                                <a key={i} href="#" className="w-12 h-12 flex items-center justify-center border border-gray-200 rounded-full hover:bg-black hover:text-white hover:border-black transition-all duration-300">
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column: Form */}
                <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm">
                    <form onSubmit={sendEmail} className="space-y-6">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">First Name</label>
                                <input type="text" className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-black transition-colors" placeholder="John" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Last Name</label>
                                <input type="text" className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-black transition-colors" placeholder="Doe" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email</label>
                            <input type="email" className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-black transition-colors" placeholder="john@example.com" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Message</label>
                            <textarea rows={4} className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-black transition-colors resize-none" placeholder="Tell me about your project..."></textarea>
                        </div>

                        <button className="w-full flex items-center justify-center gap-2 bg-black text-white py-4 rounded-xl font-bold hover:bg-gray-800 transition-colors">
                            <FaPaperPlane size={14} /> Send Message
                        </button>
                    </form>
                </div>

            </div>
        </motion.div>
    );
}
