import { useQuranStore } from '../../store/useQuranStore';
import { getJuzForPage, getDisplayPage } from '../../assets/data/quran_core';
import { ArrowLeft, Clock } from 'lucide-react';

interface ContextBarProps {
  actualPage: number;
  surahNames: string;
}

export default function ContextBar({ actualPage, surahNames }: ContextBarProps) {
  const closeReader = useQuranStore((state) => state.closeReader);
  const isHistory = useQuranStore((state) => state.app_meta.is_history_view);
  const juz = getJuzForPage(actualPage);
  const displayPage = getDisplayPage(actualPage);

  return (
    <header className="h-16 flex items-center justify-between px-10 bg-[#0a0a0a]/90 backdrop-blur-md z-40 border-b border-dark-border select-none shrink-0">
      <div className="flex items-center space-x-5">
        <button
          onClick={closeReader}
          className="text-dark-muted hover:text-neon-green transition-all duration-200 cursor-pointer p-1.5 rounded-lg hover:bg-dark-surface border border-transparent hover:border-dark-border"
          title="Back to Map (Esc)"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="flex items-center space-x-2.5">
          <h2 className="text-lg font-display font-black text-white tracking-tight">
            {surahNames}
          </h2>
          <span className="text-dark-muted font-bold">•</span>
          <span className="text-xs font-mono font-bold text-dark-muted">
            Reading Room
          </span>
        </div>
      </div>

      <div className="flex items-center space-x-3 text-xs font-mono font-bold">
        {isHistory && (
          <span className="bg-[#107100]/20 text-neon-green border border-neon-green/30 px-3 py-1 rounded-full flex items-center space-x-1.5 animate-pulse">
            <Clock className="w-3.5 h-3.5" />
            <span>RE-READ HISTORICAL MODE</span>
          </span>
        )}
        <span className="bg-dark-surface px-3.5 py-1 rounded-full border border-dark-border text-white">
          Page {displayPage} of 604
        </span>
        <span className="bg-neon-green/10 text-[#a8eba0] px-3.5 py-1 rounded-full border border-neon-green/15">
          Juz {juz.juz_number} — {juz.name_english}
        </span>
      </div>
    </header>
  );
}
