import React, { useEffect, createContext, useContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react";
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './components/ui/ErrorFallback';
import './index.css';
import Lenis from 'lenis';

import InstHeader from './components/institutional/InstHeader';
import InstFooter from './components/institutional/InstFooter';

import Home from './pages/Home';
import Team from './pages/Team';
import DivisionDetail from './pages/DivisionDetail';

const LenisContext = createContext(null);

export const useLenis = () => useContext(LenisContext);

function ScrollToHashElement() {
    const { hash, pathname } = useLocation();
    const lenis = useLenis();

    useEffect(() => {
        if (lenis) {
            // Handle hash scroll
            if (hash) {
                const element = document.getElementById(hash.replace('#', ''));
                if (element) {
                    lenis.scrollTo(element, { offset: 0 });
                }
            } else {
                 // Handle normal page navigation - scroll to top immediately
                 lenis.scrollTo(0, { immediate: true });
            }
        } else {
            // Fallback if Lenis is not ready
            if (!hash) window.scrollTo(0, 0);
        }
    }, [hash, pathname, lenis]);

    return null;
}

function AppContent() {
    const [lenis, setLenis] = useState(null);

    useEffect(() => {
        const newLenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
        });

        setLenis(newLenis);

        function raf(time) {
            newLenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            newLenis.destroy();
        };
    }, []);

    return (
        <LenisContext.Provider value={lenis}>
            <div className="w-full min-h-screen bg-white">
                <InstHeader />
                <ScrollToHashElement />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/divisions/:id" element={<DivisionDetail />} />
                </Routes>
                <InstFooter />
            </div>
        </LenisContext.Provider>
    );
}

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => window.location.reload()}>
        <Router>
            <AppContent />
            <Analytics />
        </Router>
    </ErrorBoundary>
  );
}

export default App;
