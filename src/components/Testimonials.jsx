import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useDarkMode } from '../context/DarkModeContext';
import { testimonialsData } from '../data/mockData';

// Star rating SVG
function Stars({ count = 5 }) {
    return (
        <div className="flex gap-0.5 mb-4">
            {Array.from({ length: count }).map((_, i) => (
                <svg key={i} className="w-4 h-4 text-[#7f2880]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
}

export default function Testimonials() {
    const { darkMode } = useDarkMode();
    const [active, setActive] = useState(0);
    const intervalRef = useRef(null);

    const startAutoplay = () => {
        intervalRef.current = setInterval(() => {
            setActive(prev => (prev + 1) % testimonialsData.length);
        }, 4500);
    };

    useEffect(() => {
        startAutoplay();
        return () => clearInterval(intervalRef.current);
    }, []);

    const goTo = (i) => {
        clearInterval(intervalRef.current);
        setActive(i);
        startAutoplay();
    };

    const prev = () => goTo((active - 1 + testimonialsData.length) % testimonialsData.length);
    const next = () => goTo((active + 1) % testimonialsData.length);

    return (
        <section className={`py-24 ${darkMode ? 'bg-[#0b1220]' : 'bg-white'}`}>
            <div className="max-w-[1440px] mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className={`text-3xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
                        Trusted by Students, Faculty & Institutions
                    </h2>
                    <p className={`text-base ${darkMode ? 'text-gray-400' : 'text-[#6B7280]'}`}>
                        Real stories from real users across India's top medical colleges
                    </p>
                </div>

                <div className="relative max-w-3xl mx-auto">
                    {/* Main Card */}
                    <div className={`rounded-2xl p-8 border min-h-[280px] flex items-center ${darkMode ? 'bg-[#1A1A2E] border-[#374151]' : 'bg-white border-[#E5E7EB] shadow-lg'}`}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={active}
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -30 }}
                                transition={{ duration: 0.4 }}
                                className="w-full"
                            >
                                <Stars />
                                <blockquote className={`text-lg italic leading-relaxed mb-6 ${darkMode ? 'text-gray-200' : 'text-[#1A1A1A]'}`}>
                                    "{testimonialsData[active].quote}"
                                </blockquote>
                                <div className="flex items-center gap-4">
                                    {/* Avatar */}
                                    <div
                                        className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                                        style={{ background: testimonialsData[active].avatarColor }}
                                    >
                                        {testimonialsData[active].initials}
                                    </div>
                                    <div>
                                        <div className={`font-semibold text-sm ${darkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
                                            {testimonialsData[active].name}
                                        </div>
                                        <div className={`text-xs ${darkMode ? 'text-[#c084c8]' : 'text-[#7f2880]'}`}>
                                            {testimonialsData[active].role}
                                        </div>
                                        <div className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                                            {testimonialsData[active].institution}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center justify-center gap-4 mt-6">
                        <button onClick={prev} className={`p-2 rounded-full border transition-all hover:scale-110 ${darkMode ? 'border-[#374151] text-gray-400 hover:border-[#7f2880] hover:text-[#c084c8]' : 'border-[#E5E7EB] text-gray-500 hover:border-[#7f2880] hover:text-[#7f2880]'}`}>
                            <ChevronLeft size={18} />
                        </button>
                        {/* Dots */}
                        <div className="flex gap-2">
                            {testimonialsData.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => goTo(i)}
                                    className={`rounded-full transition-all duration-300 ${i === active ? 'w-6 h-2.5 bg-[#7f2880]' : 'w-2.5 h-2.5 bg-[#c084c8]/40 hover:bg-[#c084c8]'}`}
                                />
                            ))}
                        </div>
                        <button onClick={next} className={`p-2 rounded-full border transition-all hover:scale-110 ${darkMode ? 'border-[#374151] text-gray-400 hover:border-[#7f2880] hover:text-[#c084c8]' : 'border-[#E5E7EB] text-gray-500 hover:border-[#7f2880] hover:text-[#7f2880]'}`}>
                            <ChevronRight size={18} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
