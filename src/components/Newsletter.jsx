import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, CheckCircle } from 'lucide-react';
import { useDarkMode } from '../context/DarkModeContext';

export default function Newsletter() {
    const { darkMode } = useDarkMode();
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) return;
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
        }, 800);
    };

    const lightBg = 'linear-gradient(135deg, #2b0b2b 0%, #4b0f47 40%, #6e2a6e 70%, #a85aa0 100%)';
    const darkBg = 'linear-gradient(135deg, #0d0115 0%, #1c0826 40%, #3d1050 70%, #7f2880 100%)';

    return (
        <section
            className="py-24 relative overflow-hidden"
            style={{ background: darkMode ? darkBg : lightBg }}
        >
            {/* Background decoration with floating effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{ y: [0, -30, 0], rotate: [0, 8, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-20 -right-20 w-80 h-80 opacity-10"
                >
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                        <circle cx="100" cy="100" r="90" fill="white" />
                    </svg>
                </motion.div>
                <motion.div
                    animate={{ y: [0, 30, 0], rotate: [0, -8, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-20 -left-20 w-96 h-96 opacity-10"
                >
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                        <circle cx="100" cy="100" r="90" fill="white" />
                    </svg>
                </motion.div>
            </div>

            <div className="max-w-2xl mx-auto px-6 text-center relative z-10">
                <div className="inline-flex items-center gap-2 bg-white/20 text-white text-sm font-medium px-3 py-1.5 rounded-full mb-5 backdrop-blur-sm border border-white/20">
                    <Mail size={14} /> Weekly Updates
                </div>

                <h2 className="text-3xl font-bold text-white mb-3">
                    Stay ahead of the curve
                </h2>
                <p className="text-white/80 text-base mb-8 leading-relaxed">
                    Get weekly updates on new content, clinical guidelines, and platform news — curated for medical professionals.
                </p>

                <AnimatePresence mode="wait">
                    {!submitted ? (
                        <motion.form
                            key="form"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="flex gap-2 max-w-lg mx-auto"
                        >
                            <label htmlFor="newsletter-email" className="sr-only">Email address for newsletter</label>
                            <input
                                id="newsletter-email"
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                placeholder="Enter your email address"
                                required
                                className="flex-1 px-5 py-3.5 rounded-full text-sm bg-white/15 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:border-white focus:bg-white/20 backdrop-blur-sm transition-all"
                            />
                            <button
                                type="submit"
                                disabled={loading}
                                className="px-6 py-3.5 rounded-full bg-[#FDF6EC] text-[#7f2880] font-semibold text-sm hover:bg-white transition-all hover:shadow-lg active:scale-95 disabled:opacity-70 whitespace-nowrap"
                            >
                                {loading ? (
                                    <span className="flex items-center gap-2">
                                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeOpacity="0.3" />
                                            <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                                        </svg>
                                        Subscribing...
                                    </span>
                                ) : 'Subscribe'}
                            </button>
                        </motion.form>
                    ) : (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            role="status"
                            aria-live="polite"
                            className="flex items-center justify-center gap-3 text-white font-semibold text-lg"
                        >
                            <CheckCircle size={28} className="text-green-300" />
                            You're in! 🎉 Welcome to the Jaypee Digital community.
                        </motion.div>
                    )}
                </AnimatePresence>

                <p className="text-white/50 text-xs mt-4">No spam, ever. Unsubscribe anytime.</p>
            </div>
        </section>
    );
}
