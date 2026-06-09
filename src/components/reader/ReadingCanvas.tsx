import React, { useState, useEffect } from 'react';
import { useQuranStore } from '../../store/useQuranStore';
import { getPage, getDisplayPage, getSurah, Page } from '../../assets/data/quran_core';
import ContextBar from './ContextBar';
import AyahRow from './AyahRow';
import { 
  X, 
  Mic, 
  Sparkles, 
  RefreshCw,
  Info
} from 'lucide-react';

export default function ReadingCanvas() {
  const activePage = useQuranStore((state) => state.app_meta.active_reading_page);
  const closeReader = useQuranStore((state) => state.closeReader);
  const isHifdhView = useQuranStore((state) => state.app_meta.current_view_mode === 'hifdh');
  const isHistoryView = useQuranStore((state) => state.app_meta.is_history_view);
  const toggleViewMode = useQuranStore((state) => state.toggleViewMode);
  const advancePage = useQuranStore((state) => state.advancePage);
  const regressPage = useQuranStore((state) => state.regressPage);
  const completePageDirectly = useQuranStore((state) => state.completePageDirectly);
  const isAyahMemorized = useQuranStore((state) => state.isAyahMemorized);
  const toggleAyahMemorized = useQuranStore((state) => state.toggleAyahMemorized);
  const hifdhTargetSurah = useQuranStore((state) => state.quran_hifdh_tracker.current_surah_id);
  const hifdhTargetAyah = useQuranStore((state) => state.quran_hifdh_tracker.current_ayah_id);

  const cycle = useQuranStore((state) => state.quran_recite_tracker.khatm_cycle);
  const completedHistory = useQuranStore((state) => state.quran_recite_tracker.completed_pages_history);
  const beginNextKhatm = useQuranStore((state) => state.beginNextKhatm);

  // Reader core states
  const [activeRowIdx, setActiveRowIdx] = useState<number>(0);
  const [showKhatmCelebration, setShowKhatmCelebration] = useState<boolean>(false);
  const [validatorActive, setValidatorActive] = useState<boolean>(false);

  const pageData: Page = activePage !== null ? getPage(activePage) : getPage(604);

  // Group ayahs on this page by surah to allow clean section layout
  const surahGroups: { surahId: number; ayahs: typeof pageData.ayahs }[] = [];
  pageData.ayahs.forEach((ayah) => {
    let lastGroup = surahGroups[surahGroups.length - 1];
    if (!lastGroup || lastGroup.surahId !== ayah.surah_id) {
      lastGroup = { surahId: ayah.surah_id, ayahs: [] };
      surahGroups.push(lastGroup);
    }
    lastGroup.ayahs.push(ayah);
  });

  // Set the first surah on page as default for audio streams
  const primarySurahId = pageData.surah_on_page[0]?.surah_id || 114;
  const surahNames = pageData.surah_on_page.map(s => s.name_english).join(' • ');

  // Update focused row when page changes
  useEffect(() => {
    setActiveRowIdx(0);
  }, [activePage]);

  // Handle Khatm Completion trigger
  useEffect(() => {
    if (activePage === 1) {
      // Completed last page of active cycle!
      // Verify if they click page 1 first node. Since active page is 1:
      // When page index 1 completes (e.g. they finish reading it and try to proceed), 
      // check if page 1 is in history and trigger celebration
      const page1Completed = completedHistory.some(h => h.actual_page === 1);
      if (page1Completed) {
        setShowKhatmCelebration(true);
      }
    }
  }, [activePage, completedHistory]);

  // Global Keyboard event registration
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activePage === null) return;
      if (showKhatmCelebration) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        closeReader();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        if (isHifdhView) {
          // Advance focused verse row
          setActiveRowIdx((prev) => (prev + 1) % pageData.ayahs.length);
        } else {
          // Advancing the recitation page (going forward in reverse, decrements actual_page)
          if (activePage === 1) {
            // Completed page 1! Direct record and trigger celebration
            completePageDirectly(1);
            setShowKhatmCelebration(true);
          } else {
            advancePage();
          }
        }
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        if (isHifdhView) {
          // Regress focused verse row
          setActiveRowIdx((prev) => (prev - 1 + pageData.ayahs.length) % pageData.ayahs.length);
        } else {
          // Navigate backward
          regressPage();
        }
      } else if (e.key === ' ' || e.key === 'Spacebar') {
        // Spacebar toggles active row blur in Hifdh mode
        if (isHifdhView) {
          e.preventDefault();
          const activeAyah = pageData.ayahs[activeRowIdx];
          if (activeAyah) {
            toggleAyahMemorized(activeAyah.surah_id, activeAyah.ayah_number);
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePage, activeRowIdx, pageData, isHifdhView, showKhatmCelebration]);

  // Complete page directly and go to next
  const handleMarkPageComplete = () => {
    if (activePage === null) return;
    completePageDirectly(activePage);
    if (activePage === 1) {
      setShowKhatmCelebration(true);
    } else {
      advancePage();
    }
  };

  if (activePage === null) return null;

  return (
    <div className="absolute inset-0 bg-dark-bg z-50 flex flex-col h-screen select-none relative animate-fadeIn">
      
      {/* Dynamic Background Atmosphere Map Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] grid-bg z-0" />

      {/* Top Header */}
      <ContextBar actualPage={activePage} surahNames={surahNames} />

      {/* Central Split Reading Canvas Container */}
      <section className="flex-1 overflow-y-auto px-10 py-8 z-10 custom-scrollbar relative flex flex-col items-center">
        <div className="w-full max-w-[850px] space-y-3 bg-dark-bg/40 rounded-2xl relative p-4 border border-dark-border/40">
          
          {/* Grouped Ayah Verse Lists */}
          <div className="w-full space-y-12">
            {surahGroups.map((group) => {
              const surahInfo = getSurah(group.surahId);
              const startsHere = group.ayahs[0].ayah_number === 1;

              return (
                <div key={group.surahId} className="space-y-5 animate-fadeIn">
                  {startsHere && (
                    <div className="mb-6 flex flex-col items-center justify-center w-full select-none">
                      <div className="w-full max-w-sm px-8 py-3.5 rounded-xl border border-neon-green/30 bg-dark-surface/80 flex flex-col items-center justify-center relative shadow-[0_0_15px_rgba(57,255,20,0.05)] text-center">
                        <span className="text-[9px] font-mono tracking-[0.2em] uppercase font-bold text-neon-green/80 mb-1 select-none">
                          SURAH {surahInfo?.revelation_type} • {surahInfo?.total_ayahs} AYAHS
                        </span>
                        <span className="font-arabic font-extrabold text-2xl text-white py-0.5">
                          سُورَةُ {surahInfo?.name_arabic}
                        </span>
                        <p className="font-display font-semibold text-[11px] text-[#85967c] mt-1.5 uppercase tracking-widest leading-none">
                          {surahInfo?.name_transliteration} ({surahInfo?.name_english})
                        </p>
                      </div>
                      
                      {group.surahId !== 9 && group.surahId !== 1 && (
                        <div className="mt-8 mb-2 flex flex-col items-center">
                          <p className="text-3xl font-arabic text-white/95 text-center pr-6 select-none tracking-normal">
                            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                          </p>
                          <p className="font-sans text-[10px] text-dark-muted text-center italic font-medium mt-1 select-none">
                            In the name of Allah, the Entirely Merciful, the Especially Merciful.
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="rounded-xl overflow-hidden border border-dark-border shadow-2xl bg-dark-bg/10">
                    {group.ayahs.map((ayah) => {
                      const indexOnPage = pageData.ayahs.findIndex(
                        (a) => a.surah_id === ayah.surah_id && a.ayah_number === ayah.ayah_number
                      );
                      const isMem = isAyahMemorized(ayah.surah_id, ayah.ayah_number);
                      const isFocused = indexOnPage === activeRowIdx;

                      return (
                        <AyahRow
                          key={`${ayah.surah_id}:${ayah.ayah_number}`}
                          ayah={ayah}
                          index={indexOnPage}
                          isFocused={isFocused}
                          isHifdhMode={isHifdhView}
                          isMemorized={isMem}
                          onFocused={() => setActiveRowIdx(indexOnPage)}
                          onToggleMemorized={() => toggleAyahMemorized(ayah.surah_id, ayah.ayah_number)}
                        />
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Frictionless Page Advancement Indicator */}
          <div className="pt-8 text-center select-none">
            {!isHistoryView && (
              <button
                onClick={handleMarkPageComplete}
                className="py-3 px-8 bg-neon-green hover:bg-[#2ae500] text-black font-mono font-bold text-xs uppercase tracking-widest rounded-xl shadow-[0_0_20px_rgba(57,255,20,0.3)] hover:scale-105 active:scale-95 transition-all select-none cursor-pointer"
              >
                Mark Page Read & Advance →
              </button>
            )}
            
            <p className="text-[10px] text-dark-muted font-mono mt-3">
              Press <kbd className="px-1 py-0.5 bg-dark-surface border border-dark-border rounded text-[9px]">Right Arrow</kbd> to {isHifdhView ? 'scroll next verse' : 'advance page'} • <kbd className="px-1 py-0.5 bg-dark-surface border border-dark-border rounded text-[9px]">Left Arrow</kbd> to go back
            </p>
          </div>
        </div>
      </section>

      {/* Floating Bottom action row buttons */}
      <div className="absolute bottom-6 right-8 flex items-center space-x-3.5 z-50">
        {/* Start Hifdh Blur Target Validation button */}
        <button
          onClick={() => {
            const nextActive = !validatorActive;
            setValidatorActive(nextActive);
            // If turning on validation, ensure we are in hifdh mode to trigger verse blurs
            if (nextActive && !isHifdhView) {
              toggleViewMode();
            } else if (!nextActive && isHifdhView) {
              toggleViewMode();
            }
          }}
          className={`p-4 rounded-full transition-all shadow-2xl cursor-pointer hover:shadow-[0_0_25px_rgba(57,255,20,0.4)] hover:scale-105 active:scale-95 flex items-center space-x-2.5 px-8 ${
            validatorActive || isHifdhView
              ? 'bg-neon-green text-black font-black'
              : 'bg-neon-green/20 text-[#a8eba0] border border-neon-green/15'
          }`}
        >
          <Mic className="w-4 h-4" />
          <span className="font-mono text-[10px] font-extrabold tracking-widest uppercase">
            {isHifdhView || validatorActive ? 'STOP VALIDATION' : 'START VALIDATION'}
          </span>
        </button>
      </div>

      {/* Full Screen Khatm Celebration Overlay Modal */}
      {showKhatmCelebration && (
        <div className="absolute inset-0 bg-[#0a0a0a]/95 backdrop-blur-xl z-[9999] flex flex-col items-center justify-center text-center p-8 select-none select-none animate-fadeIn transition-all">
          <div className="max-w-xl space-y-8 bg-dark-surface/30 p-10 rounded-3xl border border-neon-green/20 shadow-[0_0_50px_rgba(57,255,20,0.05)] relative overflow-hidden">
            
            {/* Glowing circle patterns */}
            <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-neon-green/5 blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-neon-green/5 blur-3xl" />

            <div className="flex justify-center select-none text-neon-green/80">
              <Sparkles className="w-16 h-16 animate-spin duration-1000" />
            </div>

            <div className="space-y-4">
              <span className="text-sm font-arabic font-bold text-neon-green tracking-widest text-[#85967c] px-4 py-1 rounded bg-neon-green/10 border border-neon-green/15">
                قَدْ خَتَمْتَ الْقُرْآنَ
              </span>
              <p className="text-4xl font-arabic text-white select-none pr-3">
                وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا
              </p>
              <p className="font-display font-medium text-xs text-dark-muted italic">
                \"...and recite the Quran with measured recitation.\" — Al-Muzzammil 73:4
              </p>
            </div>

            <div className="border-t border-b border-dark-border py-6 select-none flex items-center justify-around">
              <div>
                <p className="text-[10px] uppercase font-mono tracking-widest text-dark-muted mb-0.5">
                  Khatm Finished
                </p>
                <p className="text-2xl font-mono text-white font-black">
                  Cycle #{cycle}
                </p>
              </div>

              <div className="border-l border-dark-border h-10" />

              <div>
                <p className="text-[10px] uppercase font-mono tracking-widest text-dark-muted mb-0.5">
                  Pages Completed
                </p>
                <p className="text-2xl font-mono text-neon-green font-black select-all">
                  604 / 604
                </p>
              </div>

              <div className="border-l border-dark-border h-10" />

              <div>
                <p className="text-[10px] uppercase font-mono tracking-widest text-dark-muted mb-0.5">
                  Timeline Speed
                </p>
                <p className="text-2xl font-mono text-white font-black">
                  Offline Persist
                </p>
              </div>
            </div>

            <p className="text-sm text-neutral-300 leading-relaxed px-4 select-none">
              All praises belong to Allah. You have successfully finished reading the Holy Quran from Page 604 down to Page 1. May Allah grant you steadfast progression and crown your efforts with barakah.
            </p>

            <div className="pt-4">
              <button
                onClick={() => {
                  beginNextKhatm();
                  setShowKhatmCelebration(false);
                }}
                className="w-full flex items-center justify-center space-x-3 py-4.5 px-8 bg-neon-green text-black font-mono font-bold text-sm tracking-widest uppercase rounded-2xl shadow-[0_0_30px_rgba(57,255,20,0.5)] hover:scale-102 transition-all active:scale-95 cursor-pointer"
              >
                <RefreshCw className="w-5 h-5 animate-spin duration-3000" />
                <span>BEGIN NEXT KHATM CYCLE</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
