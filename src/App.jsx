import { DarkModeProvider } from './context/DarkModeContext';
import { UserStateProvider } from './context/UserStateContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ContinueReading from './components/ContinueReading';
import ClinicalCases from './components/ClinicalCases';
import NewArrivals from './components/NewArrivals';
import IntelligentSearch from './components/IntelligentSearch';
import TrendingTopics from './components/TrendingTopics';
import Newsletter from './components/Newsletter';
import Testimonials from './components/Testimonials';
import ContentCounters from './components/ContentCounters';
import Footer from './components/Footer';
import AccessibilityBar from './components/AccessibilityBar';
import { useUserState } from './context/UserStateContext';
import { useDarkMode } from './context/DarkModeContext';

// Inner app with access to contexts
function AppInner() {
  const { isLoggedIn } = useUserState();
  const { darkMode } = useDarkMode();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-[#1A1A2E]' : 'bg-white'}`}>
      {/* Top Accessibility Bar */}
      <AccessibilityBar />

      {/* Sticky Navbar */}
      <Navbar />

      {/* Main Content */}
      <main id="main-content">
        {/* Hero — always visible */}
        <Hero />

        {/* Continue Reading — only in logged-in state */}
        {isLoggedIn && <ContinueReading />}

        {/* Clinical Cases */}
        <ClinicalCases />

        {/* New Arrivals */}
        <IntelligentSearch />
        <NewArrivals />

        {/* Trending Topics */}
        <TrendingTopics />

        {/* Testimonials */}
        <Testimonials />

        {/* Newsletter */}
        <Newsletter />

        {/* Content Counters */}
        <ContentCounters />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <DarkModeProvider>
      <UserStateProvider>
        <AppInner />
      </UserStateProvider>
    </DarkModeProvider>
  );
}
