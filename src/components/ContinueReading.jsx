import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useDarkMode } from '../context/DarkModeContext';
import { continueReadingData } from '../data/mockData';

const typeColors = {
    'Book': { bg: '#EFE0F0', text: '#7f2880' },
    'Video': { bg: '#e0f2fe', text: '#0369a1' },
    'Clinical Case': { bg: '#fef3c7', text: '#b45309' },
};

export default function ContinueReading() {
    const { darkMode } = useDarkMode();
    const scrollRef = useRef(null);

    const scroll = (dir) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: dir * 340, behavior: 'smooth' });
        }
    };

    return (
        <section className={`py-24 ${darkMode ? 'bg-[#1A1A2E]' : 'bg-[#EFE0F0]'}`}>
            <div className="max-w-[1440px] mx-auto px-6">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
                            Continue Where You Left Off
                        </h2>
                        <p className={`text-sm mt-1 ${darkMode ? 'text-gray-400' : 'text-[#6B7280]'}`}>
                            Pick up right where you paused
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => scroll(-1)}
                            aria-label="Scroll left"
                            className={`p-2 rounded-full border transition-all hover:scale-105 ${darkMode ? 'border-[#374151] text-gray-400 hover:border-[#7f2880] hover:text-[#c084c8]' : 'border-[#E5E7EB] text-gray-500 hover:border-[#7f2880] hover:text-[#7f2880]'}`}
                        >
                            <ChevronLeft size={18} aria-hidden="true" />
                        </button>
                        <button
                            onClick={() => scroll(1)}
                            aria-label="Scroll right"
                            className={`p-2 rounded-full border transition-all hover:scale-105 ${darkMode ? 'border-[#374151] text-gray-400 hover:border-[#7f2880] hover:text-[#c084c8]' : 'border-[#E5E7EB] text-gray-500 hover:border-[#7f2880] hover:text-[#7f2880]'}`}
                        >
                            <ChevronRight size={18} aria-hidden="true" />
                        </button>
                    </div>
                </div>

                <div
                    ref={scrollRef}
                    className="flex gap-5 overflow-x-auto hide-scrollbar pb-2"
                >
                    {continueReadingData.map((item, i) => {
                        const typeStyle = typeColors[item.type] || { bg: '#EFE0F0', text: '#7f2880' };
                        return (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                className={`shrink-0 w-72 rounded-2xl p-5 border transition-all duration-200 hover:shadow-xl hover:-translate-y-1 cursor-pointer ${darkMode ? 'bg-[#252540] border-[#374151]' : 'bg-white border-[#E5E7EB] shadow-sm'}`}
                            >
                                {/* Type Badge */}
                                <span
                                    className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3"
                                    style={{ background: typeStyle.bg, color: typeStyle.text }}
                                >
                                    {item.type}
                                </span>

                                <h3 className={`font-semibold text-sm leading-snug mb-1 ${darkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
                                    {item.title}
                                </h3>
                                <p className={`text-xs mb-1 ${darkMode ? 'text-gray-400' : 'text-[#6B7280]'}`}>{item.subtitle}</p>
                                <p className={`text-xs mb-4 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>by {item.author}</p>

                                {/* Progress Bar */}
                                <div className="mb-1 flex items-center justify-between">
                                    <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Progress</span>
                                    <span className="text-xs font-semibold text-[#7f2880]">{item.progress}%</span>
                                </div>
                                <div className={`h-2 rounded-full overflow-hidden mb-4 ${darkMode ? 'bg-[#374151]' : 'bg-gray-100'}`}>
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${item.progress}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
                                        className="h-full rounded-full"
                                        style={{ background: 'linear-gradient(90deg, #7f2880, #c084c8)' }}
                                    />
                                </div>

                                <button className="flex items-center gap-1 text-sm font-semibold text-[#7f2880] hover:text-[#a855a0] transition-colors group" aria-label={`Resume reading ${item.title}`}>
                                    Resume <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                                </button>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
