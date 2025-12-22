import { useRef } from 'react';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';

export default function Contact() {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        toast.success("Message sent to the server (Simulation)");
    };

    return (
        <motion.section
            className="section-container flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="w-full max-w-2xl bg-white border border-gray-200 rounded-xl p-8 md:p-12 shadow-sm">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Initialize Connection</h2>
                <p className="text-gray-500 mb-8 font-mono text-sm">/api/contact/send-message</p>

                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            required
                            className="w-full bg-gray-50 border border-gray-200 p-3 rounded-md focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all text-sm placeholder:text-gray-400"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            placeholder="name@example.com"
                            required
                            className="w-full bg-gray-50 border border-gray-200 p-3 rounded-md focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all text-sm placeholder:text-gray-400"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Message</label>
                        <textarea
                            rows={6}
                            placeholder="Type your message here..."
                            required
                            className="w-full bg-gray-50 border border-gray-200 p-3 rounded-md focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all text-sm resize-none placeholder:text-gray-400"
                        ></textarea>
                    </div>

                    <button className="btn-primary w-full">
                        Transmit Message
                    </button>
                </form>
            </div>
        </motion.section>
    );
}
