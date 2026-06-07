import { useState, useEffect } from 'react';
import { useQuranStore } from '../../store/useQuranStore';
import { juz_index, surah_index, getJuzForPage, getPagesInJuz, getSurah, getDisplayPage, Page } from '../../assets/data/quran_core';
import { Check, Lock, ChevronDown, ChevronRight } from 'lucide-react';

interface ReciteMapProps {
  onOpenReader: (actualPage: number, isHistory: boolean) => void;
}

export default function ReciteMap({ onOpenReader }: ReciteMapProps) {
  const currentActualPage = useQuranStore((state) => state.quran_recite_tracker.current_actual_page);
  const completedHistory = useQuranStore((state) => state.quran_recite_tracker.completed_pages_history);

  const activeJuz = getJuzForPage(currentActualPage);
  
  // State to track which Juz tabs are expanded
  const [expandedJuzs, setExpandedJuzs] = useState<Record<number, boolean>>({});

  // Auto-expand the Juz containing the active page on load
  useEffect(() => {
    if (activeJuz) {
      setExpandedJuzs((prev) => ({
        ...prev,
        [activeJuz.juz_number]: true,
      }));
    }
  }, [activeJuz?.juz_number]);

  const toggleJuz = (juzNumber: number) => {
    setExpandedJuzs((prev) => ({
      ...prev,
      [juzNumber]: !prev[juzNumber],
    }));
  };

  // Check if a page is in the completed history
  const isPageCompleted = (actualPage: number) => {
    return completedHistory.some((h) => h.actual_page === actualPage);
  };

  const getJuzPageStats = (juzNumber: number) => {
    const pages = getPagesInJuz(juzNumber);
    const completedInJuz = pages.filter((p) => isPageCompleted(p)).length;
    return {
      completed: completedInJuz,
      total: pages.length,
    };
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center pb-2 border-b border-dark-border/40 select-none">
        <div>
          <h2 className="text-2xl font-display font-bold text-white tracking-tight">Current Journey</h2>
          <p className="text-xs text-dark-muted font-mono tracking-wide">
            The Path of Revelation — Juz by Juz progression
          </p>
        </div>
        <div className="flex items-center space-x-4 text-[10px] font-mono font-bold tracking-wider">
          <div className="flex items-center space-x-1.5">
            <span className="w-2.5 h-2.5 rounded bg-neon-green"></span>
            <span className="text-neon-green">COMPLETED</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <span className="w-2.5 h-2.5 rounded border border-neon-green bg-transparent animate-pulse"></span>
            <span className="text-[#a8eba0]">ACTIVE</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <span className="w-2.5 h-2.5 rounded bg-neutral-800"></span>
            <span className="text-dark-muted">LOCKED</span>
          </div>
        </div>
      </div>

      {/* Accordion list of Juzs (reverse order, 30 at top) */}
      <div className="space-y-3.5">
        {juz_index.map((juz) => {
          const isExpanded = !!expandedJuzs[juz.juz_number];
          const stats = getJuzPageStats(juz.juz_number);
          const isJuzActive = currentActualPage >= juz.page_start && currentActualPage <= juz.page_end;
          const pagesInJuz = getPagesInJuz(juz.juz_number); // Comes in reversed order: e.g. 604, 603, ... 582

          return (
            <div 
              key={juz.juz_number} 
              className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                isJuzActive 
                  ? 'border-neon-green/35 bg-dark-surface/50 shadow-[0_0_15px_rgba(57,255,20,0.03)]' 
                  : 'border-dark-border bg-dark-surface/10 hover:border-dark-border/80'
              }`}
            >
              {/* Header */}
              <button
                onClick={() => toggleJuz(juz.juz_number)}
                className="w-full flex items-center justify-between p-4 cursor-pointer text-left select-none"
              >
                <div className="flex items-center space-x-3">
                  {isExpanded ? (
                    <ChevronDown className="w-4 h-4 text-neon-green" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-dark-muted" />
                  )}
                  
                  <div className="flex items-baseline space-x-3">
                    <span className="font-display font-bold text-lg text-white">
                      JUZ {juz.juz_number}
                    </span>
                    <span className="text-xs text-dark-muted font-mono font-medium">
                      —
                    </span>
                    <span className="font-arabic font-bold text-base text-neon-green/90">
                      {juz.name_arabic}
                    </span>
                    <span className="text-sm font-sans text-neutral-400 font-medium">
                      {juz.name_english}
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-3.5">
                  <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded-md ${
                    stats.completed === stats.total 
                      ? 'bg-neon-green/10 text-neon-green' 
                      : isJuzActive 
                        ? 'bg-neon-green/5 text-[#a8eba0]' 
                        : 'text-dark-muted bg-neutral-900/40'
                  }`}>
                    {stats.completed} / {stats.total} PAGES
                  </span>
                </div>
              </button>

              {/* Page Nodes Grid (only if expanded) */}
              {isExpanded && (
                <div className="border-t border-dark-border/40 p-5 bg-black/40">
                  <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4 justify-items-center relative">
                    {pagesInJuz.map((actualPage) => {
                      const isCompleted = isPageCompleted(actualPage);
                      const isActive = actualPage === currentActualPage;
                      const isLocked = actualPage < currentActualPage;
                      const displayPageNum = getDisplayPage(actualPage);

                      // Determine Surah context for hover
                      const surahs = surah_index.filter(s => actualPage >= s.page_start && actualPage <= s.page_end);
                      const surahLabel = surahs.map(s => s.name_english).join(' & ');

                      return (
                        <div 
                          key={actualPage} 
                          className="flex flex-col items-center space-y-2 relative group"
                        >
                          {/* Active Label above node */}
                          {isActive && (
                            <span className="absolute -top-5 bg-neon-green text-black text-[8px] font-mono font-extrabold tracking-wider px-1.5 py-0.5 rounded shadow-[0_0_10px_rgba(57,255,20,0.5)] uppercase animate-bounce z-10">
                              ACTIVE
                            </span>
                          )}

                          {/* Node Button */}
                          <button
                            onClick={() => {
                              if (isActive) {
                                onOpenReader(actualPage, false);
                              } else if (isCompleted) {
                                onOpenReader(actualPage, true);
                              }
                            }}
                            disabled={isLocked}
                            className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 relative select-none ${
                              isCompleted
                                ? 'bg-[#39ff14] text-black shadow-[0_0_15px_rgba(57,255,20,0.3)] hover:shadow-[0_0_20px_rgba(57,255,20,0.5)] cursor-pointer border-transparent'
                                : isActive
                                  ? 'border-2 border-neon-green bg-neon-green/10 text-neon-green animate-pulse shadow-[0_0_12px_rgba(57,255,20,0.15)] cursor-pointer'
                                  : 'bg-dark-surface hover:bg-neutral-900 text-dark-muted border border-dark-border cursor-not-allowed'
                            }`}
                          >
                            {isCompleted ? (
                              <Check className="w-5 h-5 stroke-[3]" />
                            ) : isLocked ? (
                              <Lock className="w-4 h-4 text-neutral-800" />
                            ) : (
                              <span className="font-mono text-xs font-extrabold">
                                {displayPageNum}
                              </span>
                            )}
                          </button>

                          {/* Page actual index underneath */}
                          <span className={`text-[9px] font-mono font-bold ${
                            isActive ? 'text-neon-green' : 'text-dark-muted'
                          }`}>
                            P. {actualPage}
                          </span>

                          {/* Beautiful Custom Tooltip */}
                          <div className="absolute bottom-16 scale-0 group-hover:scale-100 transition-all duration-200 origin-bottom bg-dark-bg border border-dark-border py-2 px-3.5 rounded-lg shadow-2xl z-50 text-[10px] whitespace-nowrap text-left pointer-events-none">
                            <p className="font-mono font-bold text-neon-green uppercase mb-0.5">
                              DISPLAY PAGE {displayPageNum}
                            </p>
                            <p className="font-bold text-white text-xs">{surahLabel}</p>
                            <p className="text-dark-muted font-mono mt-0.5">
                              Actual Page {actualPage} • Juz {juz.juz_number}
                            </p>
                            {isCompleted && (
                              <p className="text-[#85967c] font-mono font-bold mt-1 text-[9px] flex items-center space-x-1">
                                <span className="inline-block w-1 h-1 rounded-full bg-neon-green"></span>
                                <span>Verified Completed</span>
                              </p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
