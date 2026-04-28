import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Heart, Brain, Wind, Activity } from 'lucide-react';
import { useDarkMode } from '../context/DarkModeContext';
import { clinicalCasesData } from '../data/mockData';

const difficultyConfig = {
    'Easy': { bg: '#dcfce7', text: '#15803d' },
    'Medium': { bg: '#fef3c7', text: '#b45309' },
    'Hard': { bg: '#ffedd5', text: '#c2410c' },
    'Challenging': { bg: '#fee2e2', text: '#b91c1c' },
};

const iconMap = {
    heart: Heart,
    brain: Brain,
    lungs: Wind,
    default: Activity
};

export default function ClinicalCases() {
    const { darkMode } = useDarkMode();

    return (
        <section className={`py-24 ${darkMode ? 'bg-[#1A1A2E]' : 'bg-[#EFE0F0]'}`}>
            <div className="max-w-[1440px] mx-auto px-6">
                {/* Header */}
                <div className="flex items-end justify-between mb-10">
                    <div>
                        <h2 className={`text-3xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
                            Featured Clinical Cases
                        </h2>
                        <p className={`text-base ${darkMode ? 'text-gray-400' : 'text-[#6B7280]'}`}>
                            Sharpen your diagnostic thinking with real-world presentations
                        </p>
                    </div>
                    <button className="flex items-center gap-1.5 text-sm font-semibold text-[#7f2880] hover:text-[#a855a0] transition-colors group">
                        View All Cases <ExternalLink size={14} className="group-hover:scale-110 transition-transform" />
                    </button>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {clinicalCasesData.map((caseItem, i) => {
                        const diffStyle = difficultyConfig[caseItem.difficulty] || difficultyConfig['Medium'];
                        const Icon = iconMap[caseItem.icon] || iconMap.default;
                        
                        return (
                            <motion.div
                                key={caseItem.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.5, delay: i * 0.15 }}
                                className={`group rounded-2xl p-5 sm:p-6 border transition-all duration-200 hover:shadow-xl hover:-translate-y-1.5 cursor-pointer overflow-hidden relative ${darkMode ? 'bg-[#252540] border-[#374151]' : 'bg-white border-[#E5E7EB] shadow-sm'}`}
                            >
                                {/* Icon */}
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${darkMode ? 'bg-[#1A1A2E] text-[#c084c8]' : 'bg-[#EFE0F0] text-[#7f2880]'}`}>
                                    <Icon size={28} strokeWidth={1.5} />
                                </div>

                                {/* Tags */}
                                <div className="flex items-center gap-2 mb-3 flex-wrap">
                                    <span className="text-[10px] font-bold px-3 py-1 rounded-full text-white uppercase tracking-wider" style={{ background: caseItem.specialtyColor }}>
                                        {caseItem.specialty}
                                    </span>
                                    <span className="text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider" style={{ background: diffStyle.bg, color: diffStyle.text }}>
                                        {caseItem.difficulty}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className={`font-bold text-sm sm:text-base leading-snug mb-3 line-clamp-2 min-h-[3rem] ${darkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
                                    {caseItem.title}
                                </h3>

                                {/* Description */}
                                <p className={`text-sm leading-relaxed mb-6 line-clamp-2 ${darkMode ? 'text-gray-400' : 'text-[#6B7280]'}`}>
                                    {caseItem.description}
                                </p>

                                {/* CTA */}
                                <div className="flex items-center justify-between">
                                    <button className="flex items-center gap-2 text-sm font-bold text-[#7f2880] group-hover:gap-3 transition-all">
                                        Read Analysis <ArrowRight size={16} />
                                    </button>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
