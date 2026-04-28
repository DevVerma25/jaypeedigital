import { motion } from 'framer-motion';
import { useDarkMode } from '../context/DarkModeContext';
import { trendingTopics } from '../data/mockData';

const sizeMap = {
    base: 'text-sm px-4 py-2',
    lg: 'text-base px-5 py-2',
    xl: 'text-lg px-6 py-2.5',
};

export default function TrendingTopics() {
    const { darkMode } = useDarkMode();

    return (
        <section className={`py-24 ${darkMode ? 'bg-[#252540]' : 'bg-[#F9F5FC]'}`}>
            <div className="max-w-[1440px] mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className={`text-3xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
                        Trending in Jaypee Digital
                    </h2>
                    <p className={`text-base ${darkMode ? 'text-gray-400' : 'text-[#6B7280]'}`}>
                        Explore what students and faculty are searching right now
                    </p>
                </div>

                <div className="flex flex-wrap gap-3 justify-center">
                    {trendingTopics.map((topic, i) => (
                        <motion.button
                            key={topic.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: i * 0.04 }}
                            className={`${sizeMap[topic.size]} rounded-full font-semibold border-2 border-[#7f2880] transition-all duration-200 hover:bg-[#7f2880] hover:text-white hover:shadow-lg hover:-translate-y-0.5 active:scale-95 group ${darkMode ? 'text-[#c084c8] hover:border-[#c084c8] hover:bg-[#c084c8]' : 'text-[#7f2880]'}`}
                        >
                            {topic.label}
                        </motion.button>
                    ))}
                </div>
            </div>
        </section>
    );
}
