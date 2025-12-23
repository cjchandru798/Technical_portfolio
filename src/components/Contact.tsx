
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        toast.success("Message sent successfully (Simulation)");
    };

    return (
        <motion.div
            className="page-transition min-h-screen py-24 px-6 relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 -z-10 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-50 rounded-full blur-3xl opacity-50 -z-10"></div>

            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

                {/* Left Column: Info */}
                <div className="space-y-12">
                    <div>
                        <motion.h1
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="text-5xl md:text-6xl font-black text-slate-900 mb-6 leading-tight"
                        >
                            Let's start a <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                                conversation.
                            </span>
                        </motion.h1>
                        <p className="text-slate-500 text-lg leading-relaxed max-w-md">
                            Interested in working together or have a question?
                            I'm always open to discussing new projects and opportunities.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <div className="flex items-center gap-6 group">
                            <div className="w-14 h-14 bg-white rounded-2xl shadow-lg border border-slate-100 flex items-center justify-center text-blue-600 text-2xl group-hover:scale-110 transition-transform duration-300">
                                <FaEnvelope />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 text-lg">Email Me</h3>
                                <a href="mailto:hemachandiran5002@gmail.com" className="text-slate-500 hover:text-blue-600 transition-colors font-medium">
                                    hemachandiran5002@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 group">
                            <div className="w-14 h-14 bg-white rounded-2xl shadow-lg border border-slate-100 flex items-center justify-center text-purple-600 text-2xl group-hover:scale-110 transition-transform duration-300">
                                <FaMapMarkerAlt />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 text-lg">Location</h3>
                                <p className="text-slate-500 font-medium">Chennai, India</p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-slate-200">
                        <h3 className="font-bold text-slate-400 text-sm uppercase tracking-wider mb-6">Connect across platforms</h3>
                        <div className="flex gap-4">
                            {[FaGithub, FaLinkedin, FaWhatsapp].map((Icon, i) => (
                                <a key={i} href="#" className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-slate-200">
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column: Form */}
                <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100 relative"
                >
                    <form onSubmit={sendEmail} className="space-y-6">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">First Name</label>
                                <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-bold text-slate-800" placeholder="John" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Last Name</label>
                                <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-bold text-slate-800" placeholder="Doe" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                            <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-bold text-slate-800" placeholder="john@example.com" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Your Message</label>
                            <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-bold text-slate-800 resize-none" placeholder="Targeting a project launch..."></textarea>
                        </div>

                        <button className="w-full group bg-slate-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-600 transition-all duration-300 shadow-xl shadow-slate-200 hover:shadow-blue-200 flex items-center justify-center gap-3">
                            Send Message
                            <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </form>
                </motion.div>

            </div>
        </motion.div>
    );
}
