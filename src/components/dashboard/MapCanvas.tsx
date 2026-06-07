import { useQuranStore } from '../../store/useQuranStore';
import ReciteMap from './ReciteMap';
import HifdhMap from './HifdhMap';
import { Sparkles, Navigation, Layers, Compass, BookOpen, Clock } from 'lucide-react';

interface MapCanvasProps {
  onOpenReader: (actualPage: number, isHistory: boolean) => void;
}

export default function MapCanvas({ onOpenReader }: MapCanvasProps) {
  const currentTab = useQuranStore((state) => state.app_meta.current_sub_tab);
  const setTab = useQuranStore((state) => state.setSubTab);
  const currentActualPage = useQuranStore((state) => state.quran_recite_tracker.current_actual_page);
  const completedHistory = useQuranStore((state) => state.quran_recite_tracker.completed_pages_history);

  return (
    <div className="flex-1 flex flex-col h-full bg-[#0a0a0a] relative overflow-hidden select-none">
      
      {/* Background Spiritual Grid layout representation */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] grid-bg z-0" />

      {/* Top Navigation Menu Bar */}
      <header className="h-16 flex items-center justify-between px-10 border-b border-dark-border/40 bg-zinc-950/20 backdrop-blur-md z-40 relative">
        <div className="flex items-center space-x-8">
          <span className="text-sm font-display font-bold text-white uppercase tracking-wider select-none">
            Map View
          </span>

          <nav className="flex space-x-6">
            <button
              onClick={() => setTab('juz')}
              className={`py-5 text-xs font-mono font-bold tracking-widest uppercase cursor-pointer border-b-2 transition-all duration-200 ${
                currentTab === 'juz'
                  ? 'border-neon-green text-neon-green font-extrabold'
                  : 'border-transparent text-dark-muted hover:text-white'
              }`}
            >
              Juz View
            </button>
            <button
              onClick={() => setTab('surah')}
              className={`py-5 text-xs font-mono font-bold tracking-widest uppercase cursor-pointer border-b-2 transition-all duration-200 ${
                currentTab === 'surah'
                  ? 'border-neon-green text-neon-green font-extrabold'
                  : 'border-transparent text-dark-muted hover:text-white'
              }`}
            >
              Surah View
            </button>
            <button
              onClick={() => setTab('map')}
              className={`py-5 text-xs font-mono font-bold tracking-widest uppercase cursor-pointer border-b-2 transition-all duration-200 ${
                currentTab === 'map'
                  ? 'border-neon-green text-neon-green font-extrabold'
                  : 'border-transparent text-dark-muted hover:text-white'
              }`}
            >
              Interactive Map
            </button>
          </nav>
        </div>

        {/* Action and User details */}
        <div className="flex items-center space-x-3 text-xs font-mono font-bold">
          <div className="flex items-center bg-dark-surface border border-dark-border px-3 py-1.5 rounded-lg space-x-1.5 text-xs text-[#85967c]">
            <Sparkles className="w-3.5 h-3.5 text-neon-green" />
            <span>DAILY PROGRESS TRAY</span>
          </div>

          <div className="w-8 h-8 rounded-full border border-dark-border bg-dark-surface overflow-hidden flex items-center justify-center">
            <span className="text-xs font-bold text-neon-green">Q</span>
          </div>
        </div>
      </header>

      {/* Main Workspace Canvas Area */}
      <main className="flex-1 overflow-y-auto p-10 z-10 custom-scrollbar relative">
        
        {/* Render Tab panels based on active selections */}
        <div className="max-w-[1000px] mx-auto select-none">
          {currentTab === 'juz' && (
            <div className="animate-fadeIn">
              <ReciteMap onOpenReader={onOpenReader} />
            </div>
          )}

          {currentTab === 'surah' && (
            <div className="animate-fadeIn">
              <HifdhMap />
            </div>
          )}

          {currentTab === 'map' && (
            <div className="animate-fadeIn space-y-6 select-none select-none relative">
              <div className="p-5 border border-dark-border bg-dark-surface/40 rounded-2xl relative overflow-hidden backdrop-blur-sm shadow-xl">
                
                {/* Background City Image from HTML hotlinked */}
                <div className="absolute right-0 bottom-0 w-1/3 opacity-[0.06] pointer-events-none select-none select-none filter invert">
                  <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBB93rKPJvzygnkwWG65BqiKJLBnxBVBajXLPqdmeqA9HefYLg_V_cFL8g3tJVRraQydPu7hGbli7Ox6Vq9xT1W_y2KVFpWh0QzzK0kIEUbci7uSunKh0K3Nu3XGstcDfJY9wf18fnjag_syjixO4ElNmQ5F0cLZx7O16Tylnz8QerdaAoVDYoz6AlMa3KxWclOLtslQMjmDvQJHsLemx10E5WScFMSZukYkCCLafS-PrxKmoCqJLTORlwnMFS_yC3YbsCWVcyagv0"
                    alt="City Grid Outline Map"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="flex items-center space-x-3 text-neon-green mb-2.5">
                  <Compass className="w-5 h-5" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider">
                    Digital Sacred Geography — Mecca Route
                  </span>
                </div>
                <h3 className="text-2xl font-display font-bold text-white tracking-tight select-none">
                  Habit-Momentum Grid Map
                </h3>
                <p className="text-xs text-dark-muted font-mono leading-relaxed max-w-xl">
                  A stylized digital city schematic. Glowing neon nodes light up as pages are successfully tracked. Reach Page 1 to finish the path of revelation.
                </p>

                {/* Simulated Geographic coordinates */}
                <div className="mt-4 flex space-x-6 text-[10px] font-mono text-dark-muted">
                  <div>
                    <span className="font-bold text-white">LAT:</span> 21.3891° N
                  </div>
                  <div>
                    <span className="font-bold text-white">LONG:</span> 39.8579° E
                  </div>
                  <div>
                    <span className="font-bold text-white">GRID CELL:</span> REGION_604
                  </div>
                </div>
              </div>

              {/* Grid map visualizing all 604 pages as tiny interactive pixel squares! */}
              <div className="p-6 border border-dark-border bg-dark-surface/25 backdrop-blur-xl rounded-2xl select-none select-none shadow-2xl">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-dark-muted">
                    604-PAGE PIXEL MATRIX MAP
                  </span>
                  <span className="text-xs font-mono font-bold text-white">
                    {completedHistory.length} / 604 Completed
                  </span>
                </div>

                <div 
                  className="grid gap-1 justify-items-center select-none"
                  style={{ gridTemplateColumns: 'repeat(40, minmax(0, 1fr))' }}
                >
                  {Array.from({ length: 604 }, (_, i) => {
                    const pageIndex = 604 - i; // reverse order
                    const isCompleted = completedHistory.some((h) => h.actual_page === pageIndex);
                    const isActive = pageIndex === currentActualPage;

                    return (
                      <button
                        key={pageIndex}
                        onClick={() => {
                          if (isCompleted) {
                            onOpenReader(pageIndex, true);
                          } else if (isActive) {
                            onOpenReader(pageIndex, false);
                          }
                        }}
                        disabled={pageIndex < currentActualPage}
                        className={`w-3 h-3 rounded-xs border-transparent transition-all duration-300 ${
                          isCompleted
                            ? 'bg-neon-green shadow-[0_0_6px_rgba(57,255,20,0.6)] hover:scale-125 hover:z-50 cursor-pointer'
                            : isActive
                              ? 'bg-neon-green/20 border border-neon-green animate-pulse hover:scale-125 hover:z-50 cursor-pointer'
                              : 'bg-neutral-900 border border-transparent cursor-not-allowed'
                        }`}
                        title={`Page ${pageIndex} - ${isCompleted ? 'Completed' : isActive ? 'Active' : 'Locked'}`}
                      />
                    );
                  })}
                </div>
                
                <div className="mt-4 flex justify-between items-center text-[8.5px] font-mono font-bold text-dark-muted select-none">
                  <span>PAGE 604 (START)</span>
                  <span>PAGE 302 (MEDIAN)</span>
                  <span>PAGE 1 (KHATM ENTRY)</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
