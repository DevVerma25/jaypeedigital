import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Book, Video, Edit, Stethoscope, Users, FileText } from 'lucide-react';
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

export default function ContentCounters() {
    const { darkMode } = useDarkMode();
    
    const lightBg = 'linear-gradient(135deg, #2b0b2b 0%, #4b0f47 40%, #6e2a6e 70%, #a85aa0 100%)';
    const darkBg = 'linear-gradient(135deg, #0d0115 0%, #1c0826 40%, #3d1050 70%, #7f2880 100%)';

    return (
        <section
            className="py-24"
            style={{ background: darkMode ? darkBg : lightBg }}
        >
            <div className="max-w-[1440px] mx-auto px-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 md:gap-4">
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
                                <div className="flex justify-center mb-4">
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#c084c8] group-hover:bg-[#7f2880] group-hover:text-white group-hover:scale-110 transition-all duration-300">
                                        <Icon size={28} strokeWidth={1.5} />
                                    </div>
                                </div>
                                <Counter target={counter.target} suffix={counter.suffix} />
                                <p className="text-[#c084c8]/80 text-sm font-bold uppercase tracking-widest mt-3">{counter.label}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
