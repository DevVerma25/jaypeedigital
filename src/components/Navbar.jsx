import { useState, useRef, useEffect } from 'react';
import {
    Search, ChevronDown, Moon, Sun, User, X, Menu,
    BookOpen, Video, FileText, GraduationCap, HelpCircle, Layers,
    Phone, Mail, Globe, LogOut, Settings, LogIn, UserPlus, ShieldCheck,
} from 'lucide-react';
import { useDarkMode } from '../context/DarkModeContext';
import { useUserState } from '../context/UserStateContext';

const navLinks = ['Books', 'Journals', 'Videos', 'Clinical Cases', 'MCQs', 'Subjects', 'Specialties', 'Courses (UG/PG)'];

const contentTypes = [
    { label: 'All Content', icon: Layers },
    { label: 'Books', icon: BookOpen },
    { label: 'Journals', icon: FileText },
    { label: 'Videos', icon: Video },
    { label: 'Clinical Cases', icon: FileText },
    { label: 'MCQs', icon: HelpCircle },
    { label: 'Courses', icon: GraduationCap },
];

const supportLinks = [
    { label: 'Contact Us', icon: Phone },
    { label: 'Request Trial', icon: Mail },
    { label: 'Sales Enquiry', icon: Mail },
    { label: 'Publish with Us', icon: FileText },
    { divider: true },
    { label: 'Change Region / Language', icon: Globe },
];

export default function Navbar() {
    const { darkMode, toggleDarkMode } = useDarkMode();
    const { isLoggedIn, userState, setUserState, currentUser } = useUserState();
    const [activeNav, setActiveNav] = useState('Books');
    const [searchContent, setSearchContent] = useState('All Content');
    const [showContentDropdown, setShowContentDropdown] = useState(false);
    const [showProfileDropdown, setShowProfileDropdown] = useState(false);
    const [showSupportDropdown, setShowSupportDropdown] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

    const profileRef = useRef(null);
    const supportRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (profileRef.current && !profileRef.current.contains(e.target)) setShowProfileDropdown(false);
            if (supportRef.current && !supportRef.current.contains(e.target)) setShowSupportDropdown(false);
            if (contentRef.current && !contentRef.current.contains(e.target)) setShowContentDropdown(false);
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const navBg = scrolled
        ? darkMode ? 'bg-[#1A1A2E]/90 backdrop-blur-md shadow-lg' : 'bg-white/80 backdrop-blur-md shadow-md'
        : darkMode ? 'bg-[#1A1A2E]' : 'bg-white';

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg} border-b ${darkMode ? 'border-[#374151]' : 'border-[#E5E7EB]'}`}>
            {/* Top Bar */}
            <div className="max-w-[1440px] mx-auto px-6 py-2 flex items-center gap-4">
                {/* Logo (use Jaypee-Logo.png from public/) */}
                <a href="#" className="flex items-center gap-2 shrink-0 mr-2" aria-label="Jaypee Digital Home">
                    <img src="/images/Jaypee-Logo.png" alt="" className="h-14 object-contain" aria-hidden="true" />
                </a>

                {/* Search Bar (hidden on small screens) */}
                <div className="hidden md:block flex-1 max-w-2xl">
                    <div className={`flex items-center rounded-xl border ${darkMode ? 'border-[#374151] bg-[#252540]' : 'border-[#E5E7EB] bg-gray-50'} overflow-hidden`}>
                        <Search size={16} className="ml-3 text-gray-400 shrink-0" aria-hidden="true" />
                        <label htmlFor="main-search" className="sr-only">Search books, clinical cases, videos...</label>
                        <input
                            id="main-search"
                            type="text"
                            value={searchQuery}
                            onChange={e => setSearchQuery(e.target.value)}
                            placeholder="Search books, clinical cases, videos..."
                            className={`flex-1 px-3 py-2.5 text-sm bg-transparent outline-none ${darkMode ? 'text-white placeholder-gray-500' : 'text-[#1A1A1A] placeholder-gray-400'}`}
                        />
                        {/* Content Type Dropdown */}
                        <div className="relative" ref={contentRef}>
                            <button
                                onClick={() => setShowContentDropdown(v => !v)}
                                aria-haspopup="listbox"
                                aria-expanded={showContentDropdown}
                                aria-label="Select content type"
                                className={`flex items-center gap-1 px-3 py-2.5 text-sm font-medium border-l ${darkMode ? 'border-[#374151] text-gray-300 hover:text-white' : 'border-[#E5E7EB] text-gray-600 hover:text-[#7f2880]'} transition-colors`}
                            >
                                {searchContent}
                                <ChevronDown size={14} className={`transition-transform ${showContentDropdown ? 'rotate-180' : ''}`} aria-hidden="true" />
                            </button>
                            {showContentDropdown && (
                                <div className={`absolute right-0 top-full mt-1 w-44 rounded-xl shadow-xl border z-50 overflow-hidden ${darkMode ? 'bg-[#252540] border-[#374151]' : 'bg-white border-[#E5E7EB]'}`}>
                                    {contentTypes.map(({ label, icon: Icon }) => (
                                        <button
                                            key={label}
                                            onClick={() => { setSearchContent(label); setShowContentDropdown(false); }}
                                            className={`w-full flex items-center gap-2 px-4 py-2.5 text-sm transition-colors ${darkMode ? 'text-gray-300 hover:bg-[#7f2880]/20 hover:text-white' : 'text-gray-700 hover:bg-[#EFE0F0] hover:text-[#7f2880]'} ${searchContent === label ? (darkMode ? 'bg-[#7f2880]/30 text-white' : 'bg-[#EFE0F0] text-[#7f2880]') : ''}`}
                                        >
                                            <Icon size={14} />
                                            {label}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                    <a href="#" className="text-xs mt-0.5 ml-1 inline-block text-[#7f2880] hover:underline">Advanced Search →</a>
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-2 ml-auto shrink-0">
                    {/* Mobile menu toggle */}
                    <button 
                        onClick={() => setMobileMenuOpen(v => !v)} 
                        className="md:hidden p-2 rounded-md"
                        aria-label="Toggle mobile menu"
                        aria-expanded={mobileMenuOpen}
                    >
                        {mobileMenuOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
                    </button>
                    {/* Support Dropdown (desktop only) */}
                    <div className="relative hidden md:block" ref={supportRef}>
                        <button
                            onClick={() => setShowSupportDropdown(v => !v)}
                            aria-haspopup="true"
                            aria-expanded={showSupportDropdown}
                            className={`text-sm font-medium px-3 py-2 rounded-lg border transition-colors ${darkMode ? 'border-[#374151] text-gray-300 hover:border-[#7f2880] hover:text-white' : 'border-[#E5E7EB] text-gray-600 hover:border-[#7f2880] hover:text-[#7f2880]'}`}
                        >
                            Support
                        </button>
                        {showSupportDropdown && (
                            <div className={`absolute right-0 top-full mt-2 w-52 rounded-xl shadow-xl border z-50 overflow-hidden ${darkMode ? 'bg-[#252540] border-[#374151]' : 'bg-white border-[#E5E7EB]'}`}>
                                {supportLinks.map((item, i) =>
                                    item.divider ? (
                                        <div key={i} className={`border-t my-1 ${darkMode ? 'border-[#374151]' : 'border-[#E5E7EB]'}`} />
                                    ) : (
                                        <button key={item.label} className={`w-full flex items-center gap-2 px-4 py-2.5 text-sm transition-colors ${darkMode ? 'text-gray-300 hover:bg-[#7f2880]/20 hover:text-white' : 'text-gray-700 hover:bg-[#EFE0F0] hover:text-[#7f2880]'}`}>
                                            <item.icon size={14} />
                                            {item.label}
                                        </button>
                                    )
                                )}
                            </div>
                        )}
                    </div>

                    {/* Profile Dropdown (desktop only) */}
                    <div className="relative hidden md:block" ref={profileRef}>
                        <button
                            onClick={() => setShowProfileDropdown(v => !v)}
                            aria-haspopup="true"
                            aria-expanded={showProfileDropdown}
                            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-95"
                            style={{ background: 'linear-gradient(135deg, #7f2880 0%, #a855a0 50%, #c084c8 100%)' }}
                        >
                            {isLoggedIn ? (
                                <span className="w-5 h-5 rounded-full bg-white/30 flex items-center justify-center text-xs font-bold">
                                    {currentUser.initials}
                                </span>
                            ) : (
                                <User size={15} />
                            )}
                            {isLoggedIn ? currentUser.name : 'My Profile'}
                            <ChevronDown size={14} className={`transition-transform ${showProfileDropdown ? 'rotate-180' : ''}`} />
                        </button>
                        {showProfileDropdown && (
                            <div className={`absolute right-0 top-full mt-2 w-52 rounded-xl shadow-xl border z-50 overflow-hidden ${darkMode ? 'bg-[#252540] border-[#374151]' : 'bg-white border-[#E5E7EB]'}`}>
                                {!isLoggedIn && (
                                    <>
                                        <button onClick={() => { setUserState('student'); setShowProfileDropdown(false); }} className={`w-full flex items-center gap-2 px-4 py-2.5 text-sm transition-colors ${darkMode ? 'text-gray-300 hover:bg-[#7f2880]/20 hover:text-white' : 'text-gray-700 hover:bg-[#EFE0F0] hover:text-[#7f2880]'}`}>
                                            <LogIn size={14} /> Log In
                                        </button>
                                        <button className={`w-full flex items-center gap-2 px-4 py-2.5 text-sm transition-colors ${darkMode ? 'text-gray-300 hover:bg-[#7f2880]/20 hover:text-white' : 'text-gray-700 hover:bg-[#EFE0F0] hover:text-[#7f2880]'}`}>
                                            <UserPlus size={14} /> Sign Up
                                        </button>
                                    </>
                                )}
                                <button className={`w-full flex items-center gap-2 px-4 py-2.5 text-sm transition-colors ${darkMode ? 'text-gray-500 cursor-not-allowed' : 'text-gray-400 cursor-not-allowed'}`} disabled={!isLoggedIn}>
                                    <Settings size={14} /> Profile Settings
                                </button>
                                <button onClick={() => { setUserState('faculty'); setShowProfileDropdown(false); }} className={`w-full flex items-center gap-2 px-4 py-2.5 text-sm transition-colors ${darkMode ? 'text-gray-300 hover:bg-[#7f2880]/20 hover:text-white' : 'text-gray-700 hover:bg-[#EFE0F0] hover:text-[#7f2880]'}`}>
                                    <ShieldCheck size={14} /> Log In as Admin
                                </button>
                                <div className={`border-t my-1 ${darkMode ? 'border-[#374151]' : 'border-[#E5E7EB]'}`} />
                                {isLoggedIn && (
                                    <button onClick={() => { setUserState('guest'); setShowProfileDropdown(false); }} className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
                                        <LogOut size={14} /> Log Out
                                    </button>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Dark Mode Toggle */}
                    <button
                        onClick={toggleDarkMode}
                        aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                        className={`p-2 rounded-full transition-all hover:scale-110 ${darkMode ? 'bg-[#252540] text-yellow-300 hover:bg-[#374151]' : 'bg-gray-100 text-gray-600 hover:bg-[#EFE0F0]'}`}
                    >
                        {darkMode ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
                    </button>
                </div>
            </div>

            {/* Nav Menu Bar */}
            <div className={`border-t ${darkMode ? 'border-[#374151]' : 'border-[#E5E7EB]'}`}>
                <div className="max-w-[1440px] mx-auto px-6 flex items-center gap-1 overflow-x-auto hide-scrollbar">
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map(link => (
                            <button
                                key={link}
                                onClick={() => setActiveNav(link)}
                                className={
                                    `shrink-0 px-4 py-3 text-sm font-medium border-b-2 transition-all ` +
                                    (activeNav === link
                                        ? 'border-[#7f2880] text-[#7f2880]'
                                        : 'border-transparent ' + (darkMode ? 'text-gray-400 hover:text-[#c084c8]' : 'text-gray-600 hover:text-[#7f2880]')
                                    )
                                }
                            >
                                {link}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {mobileMenuOpen && (
                <div className={`md:hidden ${darkMode ? 'bg-[#11121a] border-t border-[#374151]' : 'bg-white border-t border-[#E5E7EB]'}`}>
                    <div className="px-4 py-3">
                        <div className="flex items-center gap-2 mb-3">
                            <Search size={16} className="text-gray-400" />
                            <input
                                autoFocus
                                type="text"
                                value={searchQuery}
                                onChange={e => setSearchQuery(e.target.value)}
                                placeholder="Search books, clinical cases, videos..."
                                className={`flex-1 px-3 py-2 text-sm bg-transparent outline-none ${darkMode ? 'text-white placeholder-gray-500' : 'text-[#1A1A1A] placeholder-gray-400'}`}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            {navLinks.map(link => (
                                <button key={link} onClick={() => { setActiveNav(link); setMobileMenuOpen(false); }} className="text-left px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-[#252540]">
                                    {link}
                                </button>
                            ))}
                        </div>
                        <div className="mt-3 border-t pt-3">
                            {supportLinks.map((item, i) => item.divider ? <div key={i} className="border-t my-1" /> : (
                                <button key={item.label} className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-[#252540]">{item.label}</button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
