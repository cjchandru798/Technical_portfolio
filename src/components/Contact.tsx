
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';

export default function Contact() {


    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        toast.success("Message sent successfully (Demo)");
    };

    return (
        <motion.div
            className="page-transition min-h-[80vh] flex items-center justify-center pt-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="w-full max-w-xl">
                <div className="mb-10 text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">Get in Touch</h1>
                    <p className="text-gray-500">Have a project in mind? Let's build something together.</p>
                </div>

                <form onSubmit={sendEmail} className="space-y-6">
                    <div className="group">
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 ml-1">Name</label>
                        <input
                            type="text"

                            className="w-full bg-gray-50 border-0 border-b-2 border-gray-200 px-4 py-3 text-gray-900 focus:ring-0 focus:border-black focus:bg-white transition-all duration-300 placeholder:text-gray-300"
                            placeholder="Enter your name"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 ml-1">Email</label>
                        <input
                            type="email"
                            className="w-full bg-gray-50 border-0 border-b-2 border-gray-200 px-4 py-3 text-gray-900 focus:ring-0 focus:border-black focus:bg-white transition-all duration-300 placeholder:text-gray-300"
                            placeholder="name@example.com"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 ml-1">Message</label>
                        <textarea
                            rows={4}
                            className="w-full bg-gray-50 border-0 border-b-2 border-gray-200 px-4 py-3 text-gray-900 focus:ring-0 focus:border-black focus:bg-white transition-all duration-300 placeholder:text-gray-300 resize-none"
                            placeholder="Tell me about your project..."
                        ></textarea>
                    </div>

                    <button className="w-full bg-black text-white py-4 rounded-lg font-bold text-sm tracking-wide hover:bg-gray-800 transform active:scale-[0.98] transition-all duration-200">
                        SEND MESSAGE
                    </button>
                </form>
            </div>
        </motion.div>
    );
}
