import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Clock, Bookmark, ChevronDown, PlayCircle, User, GraduationCap, UserCheck, Heart, Stethoscope, Brain, Dna, Activity, Microscope } from 'lucide-react';
import { useDarkMode } from '../context/DarkModeContext';
import { useUserState } from '../context/UserStateContext';

// Shooting Star Component
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
            style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 50}%`,
            }}
        />
    );
};

// Premium 3D Medical Solar System Component
function HeroMedia() {
    const orbitingItems = [
        { img: 'https://img.icons8.com/clouds/512/heart-with-pulse.png', color: '#FF4D4D', radius: 220, duration: 25, delay: 0 },
        { img: 'https://img.icons8.com/fluency/512/stethoscope.png', color: '#4D96FF', radius: 320, duration: 35, delay: -5 },
        { img: 'https://img.icons8.com/fluency/512/brain.png', color: '#FF99CC', radius: 270, duration: 30, delay: -10 },
        { img: 'https://img.icons8.com/fluency/512/dna-helix.png', color: '#6BCB77', radius: 400, duration: 45, delay: -15 },
        { img: 'https://img.icons8.com/fluency/512/microscope.png', color: '#FFD93D', radius: 480, duration: 40, delay: -20 },
        { img: 'https://img.icons8.com/fluency/512/electrocardiogram.png', color: '#FF7B54', radius: 160, duration: 20, delay: -2 },
    ];

    return (
        <div className="relative w-full h-full flex items-center justify-center pointer-events-none" style={{ perspective: '2000px' }}>
            {/* Ambient Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#7f2880]/15 to-[#c084c8]/5 rounded-full blur-[140px]" />
            {/* 3D Tilted Orbit Container */}
            <div 
                className="absolute inset-0 flex items-center justify-center"
                style={{ 
                    transformStyle: 'preserve-3d',
                    transform: 'rotateX(60deg) rotateY(-15deg)'
                }}
            >
                {/* 3D Orbit Rings */}
                {[160, 220, 270, 320, 400, 480].map((r, i) => (
                    <div
                        key={i}
                        className="absolute border border-white/10 rounded-full"
                        style={{
                            width: r * 2,
                            height: r * 2,
                            boxShadow: '0 0 20px rgba(255,255,255,0.02)',
                        }}
                    />
                ))}

                {/* Orbiting Medical Images */}
                {orbitingItems.map((item, index) => (
                    <motion.div
                        key={index}
                        className="absolute"
                        animate={{ rotateZ: 360 }}
                        transition={{
                            duration: item.duration,
                            repeat: Infinity,
                            ease: "linear",
                            delay: item.delay
                        }}
                        style={{
                            width: item.radius * 2,
                            height: item.radius * 2,
                            transformStyle: 'preserve-3d',
                        }}
                    >
                        {/* 1. Counter-rotate Z so the item doesn't spin upside down */}
                        <motion.div
                            className="absolute top-0 left-1/2 w-0 h-0"
                            animate={{ rotateZ: -360 }}
                            transition={{
                                duration: item.duration,
                                repeat: Infinity,
                                ease: "linear",
                                delay: item.delay
                            }}
                            style={{ transformStyle: 'preserve-3d' }}
                        >
                            {/* 2. Counter-tilt X and Y so it acts like a 3D billboard facing the camera */}
                            <motion.div
                                className="absolute -translate-x-1/2 -translate-y-1/2"
                                style={{ transformStyle: 'preserve-3d' }}
                                animate={{
                                    rotateX: -60,
                                    rotateY: 15,
                                    scale: [0.7, 1.1, 0.7],
                                }}
                                transition={{
                                    duration: item.duration,
                                    repeat: Infinity,
                                    ease: "linear",
                                    delay: item.delay
                                }}
                            >
                                <motion.div
                                    className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl flex items-center justify-center"
                                    style={{ transformStyle: 'preserve-3d' }}
                                >
                                    <div 
                                        className="absolute inset-0 rounded-2xl opacity-20 blur-xl"
                                        style={{ backgroundColor: item.color }}
                                    />
                                    
                                    <img
                                        src={item.img}
                                        alt="Medical Illustration"
                                        className="w-[80%] h-[80%] object-contain filter drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]"
                                    />
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                ))}
            </div>

            {/* Central Sun: Jaypee Logo */}
            <motion.div
                animate={{
                    y: [0, -8, 0],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="relative z-30"
            >
                <div className="absolute inset-0 bg-white/10 rounded-full blur-2xl" />
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-3xl border border-white/20 shadow-[0_0_60px_rgba(255,255,255,0.05)] p-6 overflow-hidden">
                    <img
                        src="/images/Jaypee-Logo.png"
                        alt="Jaypee Digital Logo"
                        className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(255,255,255,0.5)]"
                    />
                </div>
            </motion.div>
        </div>
    );
}

export default function Hero() {
    const { darkMode } = useDarkMode();
    const { isLoggedIn, setUserState, userState, currentUser } = useUserState();

    const lightGradient = 'linear-gradient(135deg, #1a051a 0%, #2b0b2b 55%, #4b0f47 85%, #6e2a6e 100%)';
    const darkGradient = 'linear-gradient(135deg, #05000a 0%, #0d0115 60%, #1c0826 85%, #3d1050 100%)';

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

                {/* Starry Background for the entire Hero section */}
                <div className="absolute inset-0 pointer-events-none">
                    {[...Array(100)].map((_, i) => (
                        <motion.div
                            key={`bg-star-${i}`}
                            animate={{ opacity: [0.1, 0.75, 0.1], scale: [1, 1.4, 1] }}
                            transition={{ duration: 6 + Math.random() * 10, repeat: Infinity, delay: Math.random() * 20 }}
                            className="absolute w-[2px] h-[2px] bg-white rounded-full shadow-[0_0_6px_rgba(255,255,255,0.6)]"
                            style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
                        />
                    ))}
                    {[...Array(12)].map((_, i) => <ShootingStar key={`bg-shooting-${i}`} />)}
                </div>
            </div>

            {/* Prototype Toggle Banner */}
            <div className="bg-amber-50 border border-amber-200 text-amber-800 text-[10px] uppercase tracking-widest font-bold py-1 px-4 text-center absolute top-0 left-0 right-0 z-10">
                PROTOTYPE TOGGLE — Switch user state for demo review
            </div>

            <div className="flex-1 flex flex-col justify-center pt-16 pb-24 relative z-10">
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

                <div className="max-w-[1440px] w-full mx-auto px-6 flex flex-col md:flex-row items-center relative min-h-[500px]">
                    {/* Left Content — 55% */}
                    <div className="w-full md:w-[60%] relative z-10">
                        {!isLoggedIn ? (
                            /* GUEST STATE */
                            <motion.div
                                key="guest"
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                className="relative z-10"
                            >
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-[10px] font-bold mb-8 backdrop-blur-md border border-white/10 uppercase tracking-widest">
                                    🇮🇳 India's Premier Medical Knowledge Platform
                                </div>
                                <h1 className="text-5xl sm:text-6xl lg:text-[80px] leading-[1] mb-8 font-black" style={{ fontFamily: 'DM Sans, sans-serif', color: '#EFECE0', letterSpacing: '-0.04em' }}>
                                    Learn Smarter.<br />
                                    Practice Deeper.<br />
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f3e1a5] via-[#d4af37] to-[#c9a84c]">Grow Faster.</span>
                                </h1>

                                <p className="text-lg text-white/50 mb-12 max-w-xl leading-relaxed font-medium">
                                    Access <span className="text-white font-bold">4,289+</span> eBooks, <span className="text-white font-bold">12,769+</span> videos, and <span className="text-white font-bold">233,738+</span> MCQs — all meticulously mapped to your curriculum and specialty.
                                </p>

                                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 mb-12">
                                    <button className="px-10 py-5 rounded-xl font-black text-[#1A1A2E] bg-gradient-to-r from-[#f3e1a5] to-[#c9a84c] shadow-2xl hover:scale-[1.05] transition-all hover:shadow-[#c9a84c]/20 uppercase tracking-widest text-xs">
                                        Start Learning Free
                                    </button>
                                    <button className="px-10 py-5 rounded-xl border-2 border-white/20 text-white font-black hover:bg-white/10 transition-all backdrop-blur-sm uppercase tracking-widest text-xs flex items-center gap-2">
                                        Explore Library <ArrowRight size={18} />
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

                                <button className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-[#7f2880] font-black text-sm uppercase tracking-wider hover:bg-[#EFE0F0] transition-all hover:shadow-2xl hover:-translate-y-1 active:scale-95">
                                    Resume Your Path <ArrowRight size={18} />
                                </button>
                            </motion.div>
                        )}
                    </div>

                    {/* Right Illustration — Distant Background Element */}
                    <div className="absolute right-[-30%] top-1/2 -translate-y-1/2 w-[110%] h-[180%] z-0 pointer-events-none opacity-90 mix-blend-screen">
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
