import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Clock, Bookmark, ChevronDown, PlayCircle, User, GraduationCap, UserCheck } from 'lucide-react';
import { useDarkMode } from '../context/DarkModeContext';
import { useUserState } from '../context/UserStateContext';

// 3D Media Component for Hero
function HeroMedia() {
    return (
        <div className="relative w-full max-w-lg aspect-square flex items-center justify-center">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#7f2880]/20 to-[#c084c8]/20 rounded-full blur-[100px] animate-pulse" />

            {/* 3D Popout Book */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    rotateY: [-15, -10, -15],
                    rotateX: [5, 8, 5],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="relative z-20 w-64 sm:w-80 shadow-[20px_30px_60px_-15px_rgba(0,0,0,0.5)] rounded-r-lg preserve-3d"
                style={{
                    perspective: '1200px',
                    transformStyle: 'preserve-3d',
                }}
            >
                <img
                    src="/images/hero_book.png"
                    alt="Clinical Excellence Book"
                    className="w-full h-auto rounded-r-lg block"
                    style={{
                        transform: 'rotateY(-20deg)',
                        boxShadow: 'inset 4px 0 10px rgba(0,0,0,0.2)'
                    }}
                />
                {/* Book Spine Shadow */}
                <div className="absolute top-0 bottom-0 left-0 w-4 bg-black/20 blur-[2px] rounded-l-sm" style={{ transform: 'translateX(-2px) rotateY(-20deg)' }} />
            </motion.div>

            {/* Floating Video Card */}
            <motion.div
                animate={{
                    y: [0, 20, 0],
                    x: [0, -10, 0],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                }}
                className="absolute -bottom-4 -left-4 sm:-bottom-10 sm:-left-10 z-30 w-48 sm:w-64 bg-[#1A1A2E]/80 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden shadow-2xl group cursor-pointer"
            >
                <div className="relative aspect-video">
                    <img
                        src="/images/hero_video.png"
                        alt="Surgery Video"
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 group-hover:scale-110 transition-transform">
                            <PlayCircle size={24} fill="currentColor" fillOpacity="0.3" />
                        </div>
                    </div>
                </div>
                <div className="p-3 sm:p-4">
                    <div className="text-[10px] font-bold text-[#c9a84c] uppercase tracking-widest mb-1">Interactive Lesson</div>
                    <div className="text-xs sm:text-sm font-bold text-white line-clamp-1">Mastering Cardiology Update</div>
                </div>
            </motion.div>

            {/* Decorative Floating Dots */}
            <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-10 right-10 w-3 h-3 bg-[#c9a84c] rounded-full shadow-[0_0_15px_#c9a84c]"
            />
            <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 7, repeat: Infinity, delay: 1 }}
                className="absolute bottom-20 right-0 w-2 h-2 bg-[#7f2880] rounded-full shadow-[0_0_10px_#7f2880]"
            />
        </div>
    );
}

export default function Hero() {
    const { darkMode } = useDarkMode();
    const { isLoggedIn, setUserState, userState, currentUser } = useUserState();

    const lightGradient = 'linear-gradient(135deg, #2b0b2b 0%, #4b0f47 40%, #6e2a6e 70%, #a85aa0 100%)';
    const darkGradient = 'linear-gradient(135deg, #0d0115 0%, #1c0826 40%, #3d1050 70%, #7f2880 100%)';

    const bgGradient = darkMode ? darkGradient : lightGradient;
    const curveFill = darkMode ? '#1A1A2E' : '#EFE0F0';

    const scrollToNext = () => {
        window.scrollTo({
            top: window.innerHeight - 80,
            behavior: 'smooth'
        });
    };

    return (
        <section style={{ background: bgGradient }} className="min-h-screen flex flex-col relative overflow-hidden">
            {/* Floating decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        y: [0, -40, 0],
                        rotate: [0, 5, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute -top-24 -right-24 w-[500px] h-[500px] opacity-10"
                >
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                        <circle cx="100" cy="100" r="90" fill="white" />
                    </svg>
                </motion.div>

                <motion.div
                    animate={{
                        y: [0, 40, 0],
                        rotate: [0, -8, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute -bottom-24 -left-24 w-[600px] h-[600px] opacity-10"
                >
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                        <circle cx="100" cy="100" r="90" fill="white" />
                    </svg>
                </motion.div>

                {/* Floating blur blobs */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-1/4 left-1/3 w-96 h-96 bg-white/5 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        x: [0, 20, 0],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-[#c084c8]/10 rounded-full blur-3xl"
                />
            </div>

            {/* Prototype Toggle Banner */}
            <div className="bg-amber-50 border border-amber-200 text-amber-800 text-[10px] uppercase tracking-widest font-bold py-1 px-4 text-center absolute top-0 left-0 right-0 z-10">
                PROTOTYPE TOGGLE — Switch user state for demo review
            </div>

            <div className="flex-1 flex flex-col justify-center pt-24 pb-40 relative z-10">
                {/* Toggle pill */}
                <div className="flex justify-center mb-16">
                    <div className={`flex items-center rounded-full p-1 border ${darkMode ? 'bg-white/5 border-white/10' : 'bg-white/70 border-white/50'} shadow-xl backdrop-blur-md`}>
                        {['guest', 'student', 'faculty'].map(state => (
                            <button
                                key={state}
                                onClick={() => setUserState(state)}
                                className={`px-6 py-2.5 rounded-full text-sm font-bold capitalize transition-all duration-300 flex items-center gap-2 ${userState === state
                                        ? 'bg-[#7f2880] text-white shadow-lg scale-105'
                                        : darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-[#7f2880]'
                                    }`}
                            >
                                {state === 'guest' ? <User size={16} /> : state === 'student' ? <GraduationCap size={16} /> : <UserCheck size={16} />}
                                {state}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="max-w-[1440px] mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-16 lg:gap-24">
                    {/* Left Content — 55% */}
                    <div className="w-full md:flex-[0_0_55%]">
                        {!isLoggedIn ? (
                            /* GUEST STATE */
                            <motion.div
                                key="guest"
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-xs font-bold mb-8 backdrop-blur-md border border-white/10 uppercase tracking-widest">
                                    🇮🇳 India's Premier Medical Knowledge Platform
                                </div>
                                <h1 className="text-5xl sm:text-6xl lg:text-7xl leading-[1.1] mb-6 font-extrabold" style={{ fontFamily: 'DM Sans, sans-serif', color: '#EFECE0', letterSpacing: '-0.03em' }}>
                                    Learn Smarter.<br />
                                    Practice Deeper.<br />
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f3e1a5] to-[#c9a84c]">Grow Faster.</span>
                                </h1>

                                <p className="text-lg sm:text-xl text-white/70 mb-10 max-w-2xl leading-relaxed">
                                    Access <span className="text-white font-bold">4,289+</span> eBooks, <span className="text-white font-bold">12,769+</span> videos, and <span className="text-white font-bold">233,738+</span> MCQs — all meticulously mapped to your curriculum and specialty.
                                </p>

                                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
                                    <button className="px-10 py-4 rounded-xl font-bold text-[#1A1A1A] bg-gradient-to-r from-[#f3e1a5] to-[#c9a84c] shadow-2xl hover:scale-[1.05] transition-all hover:shadow-[#c9a84c]/20">
                                        Start Learning Free
                                    </button>
                                    <button className="px-10 py-4 rounded-xl border-2 border-white/30 text-white font-bold hover:bg-white/10 transition-all backdrop-blur-sm">
                                        Explore Library →
                                    </button>
                                </div>

                                <div className="flex items-center gap-6 flex-wrap text-sm font-medium text-white/60">
                                    {['50+ Institutions', 'AI-Search', 'Clinical Focus'].map(badge => (
                                        <span key={badge} className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]" /> {badge}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ) : (
                            /* LOGGED-IN STATE */
                            <motion.div
                                key="loggedin"
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-2xl shadow-xl">
                                        👋
                                    </div>
                                    <div>
                                        <h1 className="text-4xl sm:text-5xl font-extrabold mb-1" style={{ fontFamily: 'DM Sans, sans-serif', color: '#c9a84c', letterSpacing: '-0.02em' }}>
                                            {userState === 'faculty' ? `Dr. Sharma` : `Rahul Kumar`}
                                        </h1>
                                        <p className="text-white/60 font-medium tracking-wide flex items-center gap-1.5">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]" />
                                            {currentUser.institution}
                                        </p>
                                    </div>
                                </div>

                                {/* Quick Stats Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                                    {[
                                        { icon: BookOpen, label: 'Activity', value: '12', unit: 'Books Read', color: '#f3e1a5' },
                                        { icon: Clock, label: 'Learning', value: '4.5', unit: 'Hrs / Week', color: '#c084c8' },
                                        { icon: Bookmark, label: 'Saved', value: '3', unit: 'Items', color: '#a855a0' },
                                    ].map(({ icon: Icon, value, unit, color }) => (
                                        <div key={unit} className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-5 hover:bg-white/15 transition-all group">
                                            <Icon size={20} className="mb-3 transition-transform group-hover:scale-110" style={{ color }} />
                                            <div className="text-3xl font-black text-white mb-0.5">{value}</div>
                                            <div className="text-[11px] font-bold text-white/50 uppercase tracking-widest">{unit}</div>
                                        </div>
                                    ))}
                                </div>

                                <button className="flex items-center gap-3 px-10 py-5 rounded-2xl bg-white text-[#7f2880] font-black text-sm uppercase tracking-wider hover:bg-[#EFE0F0] transition-all hover:shadow-2xl hover:-translate-y-1 active:scale-95">
                                    Resume Your Path <ArrowRight size={18} />
                                </button>
                            </motion.div>
                        )}
                    </div>

                    {/* Right Illustration — 45% */}
                    <div className="w-full md:flex-[0_0_45%] flex items-center justify-center">
                        <HeroMedia />
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.button
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                onClick={scrollToNext}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors group"
            >
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Scroll</span>
                <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center p-1.5">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1 h-1.5 bg-current rounded-full"
                    />
                </div>
            </motion.button>

            {/* Bottom Wave-like Curve (Shallower and partially hidden) */}
            <div className="absolute -bottom-1 left-0 right-0 leading-[0] z-20">
                <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                    <path
                        d="M0 80H1440V40C1440 40 1260 80 1080 80C900 80 720 0 540 0C360 0 180 40 0 40V80Z"
                        fill={curveFill}
                    />
                </svg>
            </div>
        </section>
    );
}
