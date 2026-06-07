import React, { useState } from 'react';
import { Ayah } from '../../assets/data/quran_core';
import { Eye, EyeOff, Award } from 'lucide-react';

interface AyahRowProps {
  key?: string | number;
  ayah: Ayah;
  index: number;
  isFocused: boolean;
  isHifdhMode: boolean;
  isMemorized: boolean;
  onFocused: () => void;
  onToggleMemorized: () => void;
}

// Map English digits to Eastern Arabic numerals
const toArabicNumeral = (num: number): string => {
  const map: Record<string, string> = {
    '0': '٠', '1': '١', '2': '٢', '3': '٣', '4': '٤',
    '5': '٥', '6': '٦', '7': '٧', '8': '٨', '9': '٩'
  };
  return String(num).split('').map(char => map[char] || char).join('');
};

export default function AyahRow({
  ayah,
  index,
  isFocused,
  isHifdhMode,
  isMemorized,
  onFocused,
  onToggleMemorized,
}: AyahRowProps) {
  const [localReveal, setLocalReveal] = useState(false);

  const toggleLocalReveal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLocalReveal((prev) => !prev);
  };

  const showBlur = isHifdhMode && !isMemorized && !localReveal;

  return (
    <div
      onClick={onFocused}
      className={`group grid grid-cols-[1fr_60px_1fr] items-center transition-all duration-200 border-b border-dark-border/40 py-5 px-8 relative border-l-4 ${
        isFocused 
          ? 'bg-dark-surface border-l-neon-green' 
          : index % 2 === 0
            ? 'bg-dark-bg/20 border-l-transparent hover:border-l-neon-green/40 hover:bg-dark-surface/30'
            : 'bg-dark-surface/15 border-l-transparent hover:border-l-neon-green/40 hover:bg-dark-surface/30'
      }`}
    >
      {/* Dynamic Memorized badge in top right corner if applicable */}
      {isHifdhMode && isMemorized && (
        <span className="absolute top-1 right-2 flex items-center space-x-1 text-[8px] font-mono text-neon-green bg-neon-green/10 border border-neon-green/20 px-1.5 py-0.2 rounded-md font-bold">
          <Award className="w-2.5 h-2.5" />
          <span>MEMORIZED</span>
        </span>
      )}

      {/* Column Left: English Translation */}
      <div className="text-left pr-8 font-sans text-sm text-neutral-300 antialiased leading-relaxed max-w-[400px]">
        {ayah.translation}
      </div>

      {/* Column Middle: Eastern Arabic Verse Number */}
      <div className="flex justify-center font-arabic text-xl text-neon-green/90 select-none font-bold">
        {toArabicNumeral(ayah.ayah_number)}
      </div>

      {/* Column Right: Arabic Verse with blur capability */}
      <div className="text-right pl-8 font-arabic text-2xl text-[#e5e2e1] select-all rtl pr-4 relative min-h-[44px] flex items-center justify-end">
        <div 
          dir="rtl"
          className={`w-full text-right ${
            showBlur ? 'blurred-ayah text-neon-green/5' : 'reveal-active font-normal'
          }`}
        >
          {ayah.arabic}
        </div>

        {/* Floating eye toggle icon ONLY in Hifdh validation mode if blurred/unrevealed */}
        {isHifdhMode && !isMemorized && (
          <button
            onClick={toggleLocalReveal}
            className="absolute -left-1 text-neutral-600 hover:text-neon-green transition-colors cursor-pointer p-1 rounded-md bg-dark-bg border border-dark-border shadow-md z-10"
            title={localReveal ? "Blur Ayah (Spacebar)" : "Reveal Ayah (Spacebar)"}
          >
            {localReveal ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        )}
      </div>
    </div>
  );
}
