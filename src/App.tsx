import { useState, useEffect } from 'react';
import { useQuranStore } from './store/useQuranStore';

// Components
import Sidebar from './components/sidebar/Sidebar';
import MapCanvas from './components/dashboard/MapCanvas';
import ReadingCanvas from './components/reader/ReadingCanvas';
import KhatmHistoryView from './components/dashboard/KhatmHistoryView';
import SettingsView from './components/dashboard/SettingsView';

export default function App() {
  const currentViewMode = useQuranStore((state) => state.app_meta.current_view_mode);
  const toggleViewMode = useQuranStore((state) => state.toggleViewMode);
  const activeReadingPage = useQuranStore((state) => state.app_meta.active_reading_page);
  const openReader = useQuranStore((state) => state.openReader);
  const setSubTab = useQuranStore((state) => state.setSubTab);
  const checkStreakOnAppLoad = useQuranStore((state) => state.checkStreakOnAppLoad);

  // Active section inside the Sidebar
  const [activeSection, setActiveSection] = useState<'recitation' | 'dashboard' | 'hifdh' | 'khatm' | 'settings'>(() => {
    const initMode = useQuranStore.getState().app_meta?.current_view_mode;
    return initMode === 'hifdh' ? 'hifdh' : 'recitation';
  });

  // Audit streak calculations once upon app startup, and calibrate active sidebar section
  useEffect(() => {
    checkStreakOnAppLoad();
    const persistedMode = useQuranStore.getState().app_meta?.current_view_mode;
    if (persistedMode === 'hifdh') {
      setActiveSection('hifdh');
    } else {
      setActiveSection('recitation');
    }
  }, []);

  const currentSubTab = useQuranStore((state) => state.app_meta.current_sub_tab);

  // Clean, robust unified selection handler that gets triggered when clicking the sidebar links
  const handleNavigateSection = (sec: 'recitation' | 'dashboard' | 'hifdh' | 'khatm' | 'settings') => {
    // Reset reading page first to exit overlay if swapping sidebar tabs
    if (activeReadingPage !== null) {
      useQuranStore.getState().closeReader();
    }
    setActiveSection(sec);
    
    // Explicitly update store states on click to avoid complex bidirectional useEffect triggers
    if (sec === 'recitation') {
      if (currentViewMode !== 'recite') {
        toggleViewMode();
      }
      if (currentSubTab !== 'juz' && currentSubTab !== 'map') {
        setSubTab('juz');
      }
    } else if (sec === 'hifdh') {
      if (currentViewMode !== 'hifdh') {
        toggleViewMode();
      }
      if (currentSubTab !== 'surah') {
        setSubTab('surah');
      }
    }
  };

  // Safe, one-way alignment when the reading layout is closed
  useEffect(() => {
    if (activeReadingPage === null) {
      if (activeSection === 'recitation') {
        if (currentViewMode !== 'recite') {
          toggleViewMode();
        }
        if (currentSubTab !== 'juz' && currentSubTab !== 'map') {
          setSubTab('juz');
        }
      } else if (activeSection === 'hifdh') {
        if (currentViewMode !== 'hifdh') {
          toggleViewMode();
        }
        if (currentSubTab !== 'surah') {
          setSubTab('surah');
        }
      }
    }
    // We intentionally do NOT include currentViewMode or currentSubTab here to prevent loop recursion
  }, [activeReadingPage, activeSection]);

  // Global Tab Key listener to toggle Recite vs Hifdh mode cleanly
  useEffect(() => {
    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        e.preventDefault();
        
        const nextMode = currentViewMode === 'recite' ? 'hifdh' : 'recite';
        toggleViewMode();
        
        if (nextMode === 'recite') {
          setActiveSection('recitation');
          setSubTab('juz');
        } else {
          setActiveSection('hifdh');
          setSubTab('surah');
        }
      }
    };
    window.addEventListener('keydown', handleTabKey);
    return () => window.removeEventListener('keydown', handleTabKey);
  }, [currentViewMode, toggleViewMode, setSubTab]);

  return (
    <div className="flex w-screen h-screen overflow-hidden bg-[#0a0a0a] text-[#e5e2e1] select-none font-sans antialiased">
      {/* 1. Left Sidebar Navigation */}
      <Sidebar 
        activeSection={activeSection} 
        setActiveSection={handleNavigateSection} 
      />

      {/* 2. Fluid Right Panel Area */}
      <div className="flex-1 h-full relative flex flex-col min-w-0 overflow-hidden">
        
        {/* Render main view based on active section */}
        {activeSection === 'recitation' && (
          <MapCanvas onOpenReader={openReader} />
        )}

        {activeSection === 'hifdh' && (
          <MapCanvas onOpenReader={openReader} />
        )}

        {activeSection === 'dashboard' && (
          <KhatmHistoryView />
        )}

        {activeSection === 'settings' && (
          <SettingsView />
        )}

        {/* 3. Full-Screen Reading Overlay overlay (rendered on top of the fluid workspace) */}
        {activeReadingPage !== null && (
          <ReadingCanvas />
        )}
      </div>
    </div>
  );
}
