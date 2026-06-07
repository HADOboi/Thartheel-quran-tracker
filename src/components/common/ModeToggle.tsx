import { useQuranStore } from '../../store/useQuranStore';

export default function ModeToggle() {
  const mode = useQuranStore((state) => state.app_meta.current_view_mode);
  const toggleMode = useQuranStore((state) => state.toggleViewMode);

  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex bg-dark-bg border border-dark-border p-1 rounded-lg w-full relative">
        <button
          onClick={() => { if (mode !== 'recite') toggleMode(); }}
          className={`flex-1 text-center py-2 text-xs font-mono tracking-widest uppercase transition-all duration-200 cursor-pointer rounded-md font-semibold z-10 ${
            mode === 'recite'
              ? 'bg-neon-green text-black shadow-[0_0_12px_rgba(57,255,20,0.4)]'
              : 'text-dark-muted hover:text-white'
          }`}
        >
          RECITE
        </button>
        <button
          onClick={() => { if (mode !== 'hifdh') toggleMode(); }}
          className={`flex-1 text-center py-2 text-xs font-mono tracking-widest uppercase transition-all duration-200 cursor-pointer rounded-md font-semibold z-10 ${
            mode === 'hifdh'
              ? 'bg-neon-green text-black shadow-[0_0_12px_rgba(57,255,20,0.4)]'
              : 'text-dark-muted hover:text-white'
          }`}
        >
          HIFDH
        </button>
      </div>
      <p className="text-[10px] font-mono text-center text-dark-muted select-none">
        Press <kbd className="px-1 py-0.5 bg-dark-surface border border-dark-border rounded text-[9px] font-semibold">Tab</kbd> to toggle mode
      </p>
    </div>
  );
}
