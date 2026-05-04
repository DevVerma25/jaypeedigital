import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Mail, CheckCircle, Book, Video, Edit, Stethoscope, Users, FileText } from 'lucide-react';
import { useDarkMode } from '../context/DarkModeContext';
import { contentCounters } from '../data/mockData';

const iconMap = {
    book: Book,
    video: Video,
    edit: Edit,
    stethoscope: Stethoscope,
    users: Users,
    'file-text': FileText,
};

// Shooting Star Component (same as Hero)
const ShootingStar = () => {
    return (
        <motion.div
            initial={{ x: '-100%', y: '100%', opacity: 0 }}
            animate={{ 
                x: ['0%', '200%'], 
                y: ['0%', '-100%'], 
                opacity: [0, 1, 0] 
            }}
            transition={{
                duration: 3 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 25,
                ease: "linear"
            }}
            className="absolute w-28 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent rotate-[-45deg] blur-[1px] shadow-[0_0_12px_rgba(255,255,255,0.8)]"
            aria-hidden="true"
            style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 50}%`,
            }}
        />
    );
};

function Counter({ target, suffix, duration = 2000 }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    useEffect(() => {
        if (!inView) return;
        let start = 0;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);
        return () => clearInterval(timer);
    }, [inView, target, duration]);

    return (
        <span ref={ref} className="text-4xl md:text-5xl font-bold text-white tabular-nums">
            {count.toLocaleString()}{suffix}
        </span>
    );
}

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

    const lightBg = 'linear-gradient(135deg, #1a051a 0%, #2b0b2b 55%, #4b0f47 85%, #6e2a6e 100%)';
    const darkBg = 'linear-gradient(135deg, #05000a 0%, #0d0115 60%, #1c0826 85%, #3d1050 100%)';

    return (
        <section
            className="py-24 relative overflow-hidden"
            style={{ background: darkMode ? darkBg : lightBg }}
        >
            {/* Background decoration with floating effect & Stars */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Blur blobs */}
                <motion.div
                    animate={{ y: [0, -30, 0], rotate: [0, 8, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{ y: [0, 30, 0], rotate: [0, -8, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-20 -left-20 w-[700px] h-[700px] bg-[#c084c8]/10 rounded-full blur-[140px]"
                />
                
                {/* Stars (Copied from Hero) */}
                {[...Array(60)].map((_, i) => (
                    <motion.div
                        key={`news-star-${i}`}
                        animate={{ opacity: [0.1, 0.75, 0.1], scale: [1, 1.4, 1] }}
                        transition={{ duration: 6 + Math.random() * 10, repeat: Infinity, delay: Math.random() * 20 }}
                        className="absolute w-[2px] h-[2px] bg-white rounded-full shadow-[0_0_6px_rgba(255,255,255,0.6)]"
                        style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
                        aria-hidden="true"
                    />
                ))}
                {[...Array(6)].map((_, i) => <ShootingStar key={`news-shooting-${i}`} />)}
            </div>

            <div className="max-w-[1440px] mx-auto px-6 relative z-10">
                {/* Newsletter Content */}
                <div className="max-w-2xl mx-auto text-center mb-24">
                    <div className="inline-flex items-center gap-2 bg-white/10 text-white text-sm font-medium px-4 py-2 rounded-full mb-6 backdrop-blur-md border border-white/10 uppercase tracking-widest">
                        <Mail size={14} /> Weekly Updates
                    </div>

                    <h2 className="text-4xl md:text-5xl font-black text-[#EFECE0] mb-4 leading-tight" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                        Stay ahead of the curve
                    </h2>
                    <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
                        Get weekly updates on new content, clinical guidelines, and platform news curated for professionals.
                    </p>

                    <AnimatePresence mode="wait">
                        {!submitted ? (
                            <motion.form
                                key="form"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                onSubmit={handleSubmit}
                                className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
                            >
                                <label htmlFor="newsletter-email" className="sr-only">Email address for newsletter</label>
                                <input
                                    id="newsletter-email"
                                    type="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    placeholder="Enter your email address"
                                    required
                                    className="flex-1 px-6 py-4 rounded-full text-sm bg-white/5 text-white placeholder-white/40 border border-white/10 focus:outline-none focus:border-[#7f2880] focus:bg-white/10 backdrop-blur-xl transition-all"
                                />
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="px-8 py-4 rounded-full bg-white text-[#1a051a] font-bold text-sm hover:bg-[#7f2880] hover:text-white transition-all hover:shadow-[0_0_20px_rgba(127,40,128,0.4)] active:scale-95 disabled:opacity-70 whitespace-nowrap"
                                >
                                    {loading ? 'Subscribing...' : 'Subscribe Now'}
                                </button>
                            </motion.form>
                        ) : (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                role="status"
                                aria-live="polite"
                                className="flex items-center justify-center gap-3 text-white font-bold text-xl p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md"
                            >
                                <CheckCircle size={32} className="text-[#c084c8]" />
                                Welcome to the community! 🎉
                            </motion.div>
                        )}
                    </AnimatePresence>
                    {!submitted && <p className="text-white/30 text-[10px] mt-6 uppercase tracking-[0.2em]">No spam, ever. Unsubscribe anytime.</p>}
                </div>

                {/* Counters Grid - Now seamless within the same section */}
                <div className="pt-24 border-t border-white/5">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-12 md:gap-8">
                        {contentCounters.map((counter, i) => {
                            const Icon = iconMap[counter.icon] || Book;
                            return (
                                <motion.div
                                    key={counter.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: '-50px' }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="text-center group"
                                >
                                    <div className="flex justify-center mb-6">
                                        <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#c084c8] group-hover:bg-[#7f2880] group-hover:text-white group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(127,40,128,0.3)] transition-all duration-500">
                                            <Icon size={32} strokeWidth={1.5} />
                                        </div>
                                    </div>
                                    <Counter target={counter.target} suffix={counter.suffix} />
                                    <p className="text-[#c084c8]/60 text-[11px] font-black uppercase tracking-[0.2em] mt-4 group-hover:text-[#c084c8] transition-colors">{counter.label}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
