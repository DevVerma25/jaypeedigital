import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Eye, ArrowRight } from 'lucide-react';
import { useDarkMode } from '../context/DarkModeContext';
import { booksData, journalsData } from '../data/mockData';

function ContentCard({ item, darkMode }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className={`shrink-0 w-52 rounded-2xl overflow-hidden border transition-all duration-200 hover:shadow-xl hover:-translate-y-1.5 cursor-pointer ${darkMode ? 'bg-[#252540] border-[#374151]' : 'bg-white border-[#E5E7EB] shadow-sm'}`}
        >
            {/* Cover */}
                <div className="main-book-wrap relative h-64 flex items-center justify-center p-4">
                <div className="book-cover w-full h-full">
                    <div className="book-inside" />
                    <div className="cover">
                        <div className="sc-c051ffce-4 jQLlGr">
                            <span style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, position: 'relative', maxWidth: '100%' }}>
                                <span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', maxWidth: '100%' }}>
                                    <img alt="placeholder" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%20width='380'%20height='584'/%3e" style={{ display: 'block', maxWidth: '100%', width: 'initial', height: 'initial', background: 'none' }} />
                                </span>
                                <img
                                    src={item.image || 'data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27380%27%20height=%27584%27/%3e'}
                                    alt={item.title}
                                    className="book-img"
                                    style={{ position: 'absolute', inset: 0, boxSizing: 'border-box', display: 'block', width: '100%', height: '100%', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }}
                                />
                            </span>
                        </div>
                        <div className="effect" />
                        <div className="light" />
                    </div>
                </div>
            </div>

            {/* Card body */}
            <div className={`p-4 ${darkMode ? 'bg-[#252540]' : 'bg-white'}`}>
                <p className={`text-sm font-semibold mb-1 ${darkMode ? 'text-white' : 'text-[#1A1A1A]'} line-clamp-2`}>{item.title}</p>
                {item.tag && (
                    <div className={`inline-block mb-2 px-2 py-0.5 text-[11px] rounded-full font-medium ${darkMode ? 'bg-[#3b2b4a] text-gray-300' : 'bg-[#FDF2FA] text-[#7f2880]'}`}>
                        {item.tag}
                    </div>
                )}
                <p className={`text-xs font-medium mb-0.5 ${darkMode ? 'text-gray-300' : 'text-[#1A1A1A]'}`}>{item.author}</p>
                <p className={`text-xs mb-3 ${darkMode ? 'text-gray-500' : 'text-[#6B7280]'}`}>{item.edition}</p>
                <button className="flex items-center gap-1 text-xs font-semibold text-[#7f2880] hover:text-[#a855a0] transition-colors group">
                    <Eye size={12} /> Preview <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
            </div>
        </motion.div>
    );
}

export default function NewArrivals() {
    const { darkMode } = useDarkMode();
    const [activeTab, setActiveTab] = useState('Books');
    const scrollRef = useRef(null);

    const data = activeTab === 'Books' ? booksData : journalsData;

    const scroll = (dir) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: dir * 280, behavior: 'smooth' });
        }
    };

    return (
        <section className={`py-24 ${darkMode ? 'bg-[#0f172a]' : 'bg-white'}`}>
            <div className="max-w-[1440px] mx-auto px-6">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-4 uppercase tracking-wider">
                            ✨ Freshly Added
                        </div>
                        <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
                            New Arrivals
                        </h2>
                        {/* Tabs */}
                        <div className={`flex rounded-xl p-1 w-fit border ${darkMode ? 'bg-[#252540] border-[#374151]' : 'bg-gray-50 border-[#E5E7EB]'}`}>
                            {['Books', 'Journals'].map(tab => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 ${activeTab === tab
                                            ? 'bg-[#7f2880] text-white shadow-lg'
                                            : darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-[#7f2880]'
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <button onClick={() => scroll(-1)} className={`p-3 rounded-full border transition-all hover:scale-110 active:scale-95 ${darkMode ? 'border-[#374151] text-gray-400 hover:bg-[#252540] hover:text-white' : 'border-[#E5E7EB] text-gray-500 hover:bg-gray-50 hover:text-[#7f2880]'}`}>
                                <ChevronLeft size={20} />
                            </button>
                            <button onClick={() => scroll(1)} className={`p-3 rounded-full border transition-all hover:scale-110 active:scale-95 ${darkMode ? 'border-[#374151] text-gray-400 hover:bg-[#252540] hover:text-white' : 'border-[#E5E7EB] text-gray-500 hover:bg-gray-50 hover:text-[#7f2880]'}`}>
                                <ChevronRight size={20} />
                            </button>
                        </div>
                        <div className={`w-[1px] h-8 ${darkMode ? 'bg-[#374151]' : 'bg-gray-200'} hidden md:block`} />
                        <button className={`flex items-center gap-2 text-sm font-bold transition-colors ${darkMode ? 'text-[#c084c8] hover:text-[#d4a5db]' : 'text-[#7f2880] hover:text-[#a855a0]'}`}>
                            View Library <ArrowRight size={16} />
                        </button>
                    </div>
                </div>

                {/* Scrollable Row */}
                <div className="relative group">
                    {/* Shadow indicators for scroll */}
                    <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-inherit to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-inherit to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                    <div ref={scrollRef} className="flex gap-6 overflow-x-auto hide-scrollbar pb-8 px-1">
                        {data.map(item => (
                            <ContentCard key={item.id} item={item} darkMode={darkMode} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
