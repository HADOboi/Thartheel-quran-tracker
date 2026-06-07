import { useState } from 'react';
import { useQuranStore } from '../../store/useQuranStore';
import { surah_index, getSurah } from '../../assets/data/quran_core';
import { Check, BrainCircuit, ChevronDown, ChevronRight, Lock } from 'lucide-react';

export default function HifdhMap() {
  const memorizedManifest = useQuranStore((state) => state.quran_hifdh_tracker.memorized_ayahs_manifest);
  const toggleAyahMemorized = useQuranStore((state) => state.toggleAyahMemorized);
  const currentSurahId = useQuranStore((state) => state.quran_hifdh_tracker.current_surah_id);
  const currentAyahId = useQuranStore((state) => state.quran_hifdh_tracker.current_ayah_id);
  const setHifdhSelection = useQuranStore((state) => state.setHifdhSurahAndAyah);

  const [expandedSurahs, setExpandedSurahs] = useState<Record<number, boolean>>({
    114: true, // Auto-expand An-Nas on start!
  });

  const toggleExpandSurah = (surahId: number) => {
    setExpandedSurahs((prev) => ({
      ...prev,
      [surahId]: !prev[surahId],
    }));
  };

  // Check how many ayahs in a Surah are memorized
  const getMemorizedCount = (surahId: number, totalAyahs: number) => {
    let count = 0;
    for (let i = 1; i <= totalAyahs; i++) {
      if (memorizedManifest.includes(`${surahId}:${i}`)) {
        count++;
      }
    }
    return count;
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center pb-2 border-b border-dark-border/40 select-none">
        <div>
          <h2 className="text-2xl font-display font-bold text-white tracking-tight">Hifdh Journey</h2>
          <p className="text-xs text-dark-muted font-mono tracking-wide">
            Interactive Ayah-by-Ayah Memorization Manifest
          </p>
        </div>
        <div className="flex items-center space-x-4 text-[10px] font-mono font-bold tracking-wider">
          <div className="flex items-center space-x-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-neon-green"></span>
            <span className="text-neon-green">MEMORIZED</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <span className="w-2.5 h-2.5 rounded-full border border-neon-green bg-transparent animate-pulse"></span>
            <span className="text-[#a8eba0]">ACTIVE TARGET</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-neutral-800"></span>
            <span className="text-dark-muted">NOT MEMORIZED</span>
          </div>
        </div>
      </div>

      {/* Surahs ordered list in descending order (Surah 114 to Surah 1) */}
      <div className="space-y-3.5 max-h-[70vh] overflow-y-auto pr-1">
        {surah_index.map((surah) => {
          const isExpanded = !!expandedSurahs[surah.surah_id];
          const isSurahActive = surah.surah_id === currentSurahId;
          const memorizedCount = getMemorizedCount(surah.surah_id, surah.total_ayahs);
          const percent = ((memorizedCount / surah.total_ayahs) * 100).toFixed(0);

          return (
            <div 
              key={surah.surah_id}
              className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                isSurahActive 
                  ? 'border-neon-green/35 bg-dark-surface/50 shadow-[0_0_15px_rgba(57,255,20,0.03)]' 
                  : 'border-dark-border bg-dark-surface/10 hover:border-dark-border/80'
              }`}
            >
              {/* Surah Accordion Header */}
              <button
                onClick={() => toggleExpandSurah(surah.surah_id)}
                className="w-full flex items-center justify-between p-4 cursor-pointer text-left select-none"
              >
                <div className="flex items-center space-x-3">
                  {isExpanded ? (
                    <ChevronDown className="w-4 h-4 text-neon-green" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-dark-muted" />
                  )}

                  <div className="flex items-baseline space-x-2.5">
                    <span className="font-mono text-xs font-semibold text-dark-muted">
                      {String(surah.surah_id).padStart(3, '0')}
                    </span>
                    <span className="font-display font-bold text-lg text-white">
                      {surah.name_transliteration}
                    </span>
                    <span className="text-xs text-dark-muted font-mono font-medium">—</span>
                    <span className="font-arabic font-bold text-base text-neon-green/95">
                      {surah.name_arabic}
                    </span>
                    <span className="text-xs font-sans text-neutral-400">
                      ({surah.revelation_type})
                    </span>
                  </div>
                </div>

                {/* Right Progress ratio */}
                <div className="flex items-center space-x-3">
                  <span className="text-xs font-mono font-bold text-dark-muted bg-dark-bg px-2.5 py-1 rounded-md border border-dark-border/40">
                    {memorizedCount} / {surah.total_ayahs} AYAHs
                  </span>
                  {memorizedCount === surah.total_ayahs ? (
                    <span className="bg-[#107100]/25 text-neon-green text-[9px] font-mono font-bold border border-neon-green/30 px-2 py-0.5 rounded-lg">
                      COMPLETE
                    </span>
                  ) : memorizedCount > 0 ? (
                    <span className="text-[10px] font-mono font-bold text-[#a8eba0]">
                      {percent}%
                    </span>
                  ) : null}
                </div>
              </button>

              {/* Ayah Dots Grid (if expanded) */}
              {isExpanded && (
                <div className="border-t border-dark-border/40 p-4 bg-black/45 select-none animate-fadeIn">
                  <p className="text-[10px] uppercase font-mono tracking-widest text-[#85967c] font-bold mb-3 select-none">
                    Select Ayah to toggle memorized state:
                  </p>
                  
                  <div className="flex flex-wrap gap-2.5 items-center">
                    {Array.from({ length: surah.total_ayahs }, (_, i) => {
                      const ayahNumber = i + 1;
                      const isAyahTarget = isSurahActive && ayahNumber === currentAyahId;
                      const isMem = memorizedManifest.includes(`${surah.surah_id}:${ayahNumber}`);

                      return (
                        <button
                          key={ayahNumber}
                          onClick={() => {
                            toggleAyahMemorized(surah.surah_id, ayahNumber);
                            // Set this ayah as the active target
                            setHifdhSelection(surah.surah_id, ayahNumber);
                          }}
                          className={`w-10 h-10 rounded-xl font-mono text-xs font-bold transition-all duration-300 flex items-center justify-center cursor-pointer relative ${
                            isMem
                              ? 'bg-neon-green text-black font-extrabold shadow-[0_0_12px_rgba(57,255,20,0.3)] hover:scale-110'
                              : isAyahTarget
                                ? 'border-2 border-neon-green bg-neon-green/15 text-neon-green font-extrabold animate-pulse'
                                : 'bg-dark-surface hover:bg-neutral-900 border border-dark-border text-dark-muted hover:text-white'
                          }`}
                          title={`Surah ${surah.name_transliteration} Ayah ${ayahNumber}`}
                        >
                          {isMem ? (
                            <Check className="w-4 h-4 stroke-[3]" />
                          ) : (
                            ayahNumber
                          )}

                          {isAyahTarget && !isMem && (
                            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-neon-green animate-ping"></span>
                          )}
                        </button>
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
