import { useState, useRef, useEffect } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { useDarkMode } from '../context/DarkModeContext';

const contentTypes = [
  'All Content',
  'Books',
  'Journals',
  'Videos',
  'Clinical Cases',
  'MCQs',
];

export default function IntelligentSearch() {
  const { darkMode } = useDarkMode();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchContent, setSearchContent] = useState('All Content');
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onDoc = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, []);

  return (
    <section className={`py-24 relative overflow-hidden ${darkMode ? 'bg-[#11121a]' : 'bg-[#fcfaff]'}`}>
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#7f2880]/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#7f2880]/5 rounded-full blur-3xl translate-y-1/2" />

      <div className="max-w-[1100px] mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
            Intelligent Medical Search
          </h2>
          <p className={`max-w-2xl mx-auto text-base md:text-lg ${darkMode ? 'text-gray-400' : 'text-[#6B7280]'}`}>
            Find exactly what you need from our comprehensive medical database. Search through 4,000+ eBooks, 12,000+ videos, and 230,000+ MCQs with AI-powered precision.
          </p>
        </div>

        <div ref={ref} className="flex flex-col items-center">
          <div className={`w-full max-w-4xl p-1 md:p-1.5 rounded-[2rem] shadow-2xl transition-all duration-500 ${darkMode ? 'bg-white/5 border border-white/10 backdrop-blur-md' : 'bg-white border border-[#EDE8EE]'}`}>
            <div className={`flex flex-col md:flex-row items-stretch gap-0 md:gap-2 rounded-[1.8rem] overflow-hidden ${darkMode ? 'bg-[#0b1220]' : 'bg-white'}`}>
              <div className="flex items-center flex-1 min-w-0 px-4 md:px-6 py-2">
                <Search size={22} className="text-gray-400 shrink-0" aria-hidden />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search books, clinical cases, videos, topics..."
                  aria-label="Search medical content"
                  className={`flex-1 px-4 py-4 md:py-6 text-base md:text-lg bg-transparent outline-none ${darkMode ? 'text-white placeholder-gray-500' : 'text-[#1A1A1A] placeholder-gray-400'}`}
                />
              </div>

              <div className="flex items-center gap-2 p-2">
                <div className="relative">
                  <button
                    aria-haspopup="listbox"
                    aria-expanded={open}
                    aria-controls="int-search-content-list"
                    onClick={() => setOpen(v => !v)}
                    className={`flex items-center gap-2 px-6 py-4 text-sm font-bold rounded-xl transition-all ${darkMode ? 'bg-white/5 text-gray-300 hover:text-white border border-white/10' : 'bg-gray-50 text-gray-600 hover:text-[#7f2880] border border-gray-100'}`}
                  >
                    {searchContent}
                    <ChevronDown size={16} className={`${open ? 'rotate-180' : ''} transition-transform`} />
                  </button>

                  {open && (
                    <div id="int-search-content-list" role="listbox" className={`absolute right-0 top-full mt-3 w-56 rounded-2xl shadow-2xl border z-50 overflow-hidden ${darkMode ? 'bg-[#1A1A2E] border-[#374151]' : 'bg-white border-[#E5E7EB]'}`}>
                      {contentTypes.map(label => (
                        <button
                          key={label}
                          role="option"
                          aria-selected={searchContent === label}
                          onClick={() => { setSearchContent(label); setOpen(false); }}
                          className={`w-full text-left px-5 py-3 text-sm font-medium transition-colors ${darkMode ? 'text-gray-300 hover:bg-[#7f2880] hover:text-white' : 'text-gray-700 hover:bg-[#EFE0F0] hover:text-[#7f2880]'}`}
                        >
                          {label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <button
                  className="px-8 py-4 rounded-xl font-bold text-white shadow-lg hover:shadow-primary/20 hover:scale-[1.02] transition-all"
                  style={{ background: 'linear-gradient(135deg, #7f2880 0%, #c084c8 100%)' }}
                  aria-label="Execute search"
                >
                  Search
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className={`flex items-center gap-2 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
              <span className="font-medium">Trending:</span>
              <div className="flex gap-3">
                {['Cardiology', 'Endocrinology', 'Surgery'].map(tag => (
                  <button key={tag} className={`transition-colors font-semibold ${darkMode ? 'text-gray-300 hover:text-[#c084c8]' : 'text-[#7f2880] hover:text-[#a855a0]'}`}>
                    {tag}
                  </button>
                ))}
              </div>
            </div>
            <a href="#" className={`font-bold transition-colors ${darkMode ? 'text-[#c084c8] hover:text-[#d4a5db]' : 'text-[#7f2880] hover:text-[#a855a0]'}`}>
              Advanced Search →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
