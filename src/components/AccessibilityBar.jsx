import { useState, useEffect } from 'react';
import { Languages, TextCursor } from 'lucide-react';

const AccessibilityBar = () => {
    const [currentLang, setCurrentLang] = useState('en');
    const [googleLoaded, setGoogleLoaded] = useState(false);
    const [textSize, setTextSize] = useState(100);
    const [highContrast, setHighContrast] = useState(false);

    useEffect(() => {
        document.documentElement.style.fontSize = `${textSize}%`;
    }, [textSize]);

    useEffect(() => {
        if (highContrast) {
            document.documentElement.classList.add('high-contrast');
        } else {
            document.documentElement.classList.remove('high-contrast');
        }
    }, [highContrast]);

    useEffect(() => {
        const checkGoogle = setInterval(() => {
            if (document.querySelector('select.goog-te-combo')) {
                setGoogleLoaded(true);
                clearInterval(checkGoogle);
            }
        }, 500);
        return () => clearInterval(checkGoogle);
    }, []);

    const changeLanguage = (langCode) => {
        const select = document.querySelector('select.goog-te-combo');
        if (select) {
            select.value = langCode;
            select.dispatchEvent(new Event('change'));
            setCurrentLang(langCode);
        } else {
            // Set cookie and reload if widget not ready
            document.cookie = `googtrans=/en/${langCode}; path=/`;
            window.location.reload();
        }
    };

    const skipToContent = () => {
        const main = document.getElementById('main-content');
        if (main) {
            main.tabIndex = -1;
            main.focus();
            main.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="accessibility-bar bg-white border-b border-gray-200 text-[10px] sm:text-[11px] font-bold py-1 px-4 sm:px-8 flex flex-wrap items-center justify-between fixed top-0 left-0 right-0 z-[100] h-8 transition-colors duration-300 uppercase tracking-wider text-gray-700">
            {/* Left side: Navigation Shortcuts */}
            <div className="flex items-center gap-3 sm:gap-5">
                <button
                    onClick={skipToContent}
                    className="text-[#374151] hover:text-[#7f2880] transition-colors focus:underline outline-none"
                >
                    Skip to Content
                </button>
                <span className="text-gray-300" aria-hidden="true">|</span>
                <div className="flex items-center gap-2">
                    <button 
                        onClick={() => setTextSize(prev => Math.min(prev + 10, 150))}
                        className="text-[#374151] hover:text-[#7f2880] transition-colors"
                        aria-label="Increase text size"
                    >
                        A+
                    </button>
                    <button 
                        onClick={() => setTextSize(prev => Math.max(prev - 10, 80))}
                        className="text-[#374151] hover:text-[#7f2880] transition-colors"
                        aria-label="Decrease text size"
                    >
                        A-
                    </button>
                    <button 
                        onClick={() => setHighContrast(!highContrast)}
                        className={`ml-1 px-1.5 py-0.5 rounded border transition-all ${highContrast ? 'bg-black border-black text-white' : 'border-gray-300 text-gray-500'}`}
                        aria-label="Toggle High Contrast"
                    >
                        Contrast
                    </button>
                </div>
            </div>

            {/* Right side: Language Selection */}
            <div className="flex items-center gap-3 sm:gap-5 ml-auto sm:ml-0 mt-1 sm:mt-0">
                <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="text-gray-400 dark:text-gray-600 hidden xs:inline">Quick Translate:</span>
                    {[
                        { name: 'English', code: 'en' },
                        { name: 'Español', code: 'es' },
                        { name: 'Mandarin', code: 'zh-CN' }
                    ].map(lang => (
                        <button
                            key={lang.code}
                            onClick={() => changeLanguage(lang.code)}
                            className={`px-2 py-0.5 rounded transition-all ${currentLang === lang.code
                                ? 'bg-[#7f2880] text-white shadow-sm'
                                : 'text-[#374151] hover:bg-gray-100'}`}
                            aria-label={`Translate to ${lang.name}`}
                        >
                            {lang.name}
                        </button>
                    ))}
                </div>

                <span className="text-gray-300" aria-hidden="true">|</span>

                <div className="flex items-center gap-1.5 relative">
                    <button
                        onClick={() => {
                            const el = document.getElementById('google_translate_element');
                            if (el) {
                                el.style.display = el.style.display === 'none' ? 'block' : 'none';
                                el.style.position = 'fixed';
                                el.style.top = '32px';
                                el.style.right = '20px';
                                el.style.zIndex = '1000';
                                el.style.background = 'white';
                                el.style.padding = '10px';
                                el.style.borderRadius = '8px';
                                el.style.boxShadow = '0 10px 15px -3px rgb(0 0 0 / 0.1)';
                            }
                        }}
                        className="flex items-center gap-1.5 text-[#374151] hover:text-[#7f2880] transition-colors"
                    >
                        <Languages size={13} className="text-[#7f2880]" />
                        All Translations
                    </button>
                </div>
            </div>
            
            <style>{`
                .accessibility-bar {
                    background-color: white !important;
                    color: #374151 !important;
                }
                .goog-te-banner-frame.skiptranslate, .goog-te-gadget-icon { display: none !important; }
                body { top: 0px !important; }
                .goog-tooltip { display: none !important; }
                .goog-tooltip:hover { display: none !important; }
                .goog-text-highlight { background-color: transparent !important; border: none !important; box-shadow: none !important; }
                
                #google_translate_element select {
                    padding: 4px;
                    border-radius: 4px;
                    border: 1px solid #E5E7EB;
                    font-size: 12px;
                }

                .high-contrast {
                    filter: contrast(1.5) brightness(1.1);
                }
                .high-contrast body {
                    background: black !important;
                    color: white !important;
                }
                .high-contrast * {
                    border-color: #555 !important;
                }
            `}</style>
        </div>
    );
};

export default AccessibilityBar;
