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
  const [activeSection, setActiveSection] = useState<'recitation' | 'dashboard' | 'hifdh' | 'khatm' | 'settings'>(
    'recitation'
  );

  // Audit streak calculations once upon app startup
  useEffect(() => {
    checkStreakOnAppLoad();
  }, []);

  // Sync state selectors when active sidebar panel gets changed
  useEffect(() => {
    if (activeSection === 'recitation') {
      setSubTab('juz');
      if (currentViewMode !== 'recite') {
        toggleViewMode();
      }
    } else if (activeSection === 'hifdh') {
      setSubTab('surah');
      if (currentViewMode !== 'hifdh') {
        toggleViewMode();
      }
    }
  }, [activeSection]);

  const currentSubTab = useQuranStore((state) => state.app_meta.current_sub_tab);

  // Sync back sidebar when sub tab is clicked inside the MapCanvas
  useEffect(() => {
    if (currentSubTab === 'juz') {
      setActiveSection('recitation');
    } else if (currentSubTab === 'surah') {
      setActiveSection('hifdh');
    }
  }, [currentSubTab]);

  // Global Tab Key listener to toggle Recite vs Hifdh mode
  useEffect(() => {
    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        e.preventDefault();
        toggleViewMode();
        
        // Align active sidebar menu item to match mode swap
        setActiveSection((prev) => {
          if (prev === 'recitation') return 'hifdh';
          if (prev === 'hifdh') return 'recitation';
          return prev;
        });
      }
    };
    window.addEventListener('keydown', handleTabKey);
    return () => window.removeEventListener('keydown', handleTabKey);
  }, [toggleViewMode]);

  return (
    <div className="flex w-screen h-screen overflow-hidden bg-[#0a0a0a] text-[#e5e2e1] select-none font-sans antialiased">
      {/* 1. Left Sidebar Navigation */}
      <Sidebar 
        activeSection={activeSection} 
        setActiveSection={(sec) => {
          // Reset reading page first to exit overlay if swapping sidebar tabs
          if (activeReadingPage !== null) {
            useQuranStore.getState().closeReader();
          }
          setActiveSection(sec);
        }} 
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
