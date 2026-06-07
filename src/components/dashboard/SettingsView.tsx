import { useQuranStore } from '../../store/useQuranStore';
import { 
  Settings2, 
  HelpCircle, 
  BookOpen, 
  Check, 
  RotateCcw, 
  Flame, 
  Key, 
  FileText,
  AlertTriangle
} from 'lucide-react';

export default function SettingsView() {
  const currentActualPage = useQuranStore((state) => state.quran_recite_tracker.current_actual_page);
  const cycle = useQuranStore((state) => state.quran_recite_tracker.khatm_cycle);

  const handleResetData = () => {
    if (confirm('Are you absolutely sure you want to hard-reset all Thartheel data? This deletes your history, streaks, and Khatm milestones forever.')) {
      localStorage.removeItem('thartheel-storage');
      window.location.reload();
    }
  };

  const handleSetPage604 = () => {
    useQuranStore.setState((state) => ({
      quran_recite_tracker: {
        ...state.quran_recite_tracker,
        current_actual_page: 604
      }
    }));
    alert('Active reading page reset to Page 604 (Juz 30 start).');
  };

  return (
    <div className="flex-1 overflow-y-auto p-10 bg-[#0a0a0a] h-full custom-scrollbar relative select-none">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] grid-bg z-0" />

      <div className="max-w-[750px] mx-auto space-y-8 z-10 relative select-none text-left">
        <div className="border-b border-dark-border/40 pb-4 select-none">
          <h2 className="text-2xl font-display font-bold text-white tracking-tight">System Settings</h2>
          <p className="text-xs text-dark-muted font-mono tracking-wide">
            Interactive system configurations & shortcut manifests
          </p>
        </div>

        {/* Keyboard interaction shortcuts registry CARD */}
        <div className="bg-dark-surface border border-dark-border rounded-2xl shadow-xl overflow-hidden">
          <div className="p-4.5 bg-dark-bg border-b border-dark-border flex items-center space-x-2.5">
            <Key className="w-4.5 h-4.5 text-neon-green" />
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-white">
              Keyboard Shortcut Registry
            </h3>
          </div>
          
          <div className="p-5 divide-y divide-dark-border/30">
            <div className="flex justify-between py-2.5 items-center text-xs font-mono">
              <span className="text-neutral-300">Advance Reading Page (Decrement index)</span>
              <kbd className="bg-dark-bg border border-dark-border px-2.5 py-1 rounded text-[10px] text-neon-green font-bold">
                → Right Arrow
              </kbd>
            </div>
            <div className="flex justify-between py-2.5 items-center text-xs font-mono">
              <span className="text-neutral-300">Regress Reading Page (Increment index)</span>
              <kbd className="bg-dark-bg border border-dark-border px-2.5 py-1 rounded text-[10px] text-white">
                ← Left Arrow
              </kbd>
            </div>
            <div className="flex justify-between py-2.5 items-center text-xs font-mono">
              <span className="text-neutral-300">Toggle active verse Hifdh blur filter</span>
              <kbd className="bg-dark-bg border border-dark-border px-2.5 py-1 rounded text-[10px] text-neon-green font-bold">
                Spacebar
              </kbd>
            </div>
            <div className="flex justify-between py-2.5 items-center text-xs font-mono">
              <span className="text-neutral-300">Toggle View Mode (RECITE ↔ HIFDH)</span>
              <kbd className="bg-dark-bg border border-dark-border px-2.5 py-1 rounded text-[10px] text-white">
                Tab Key
              </kbd>
            </div>
            <div className="flex justify-between py-2.5 items-center text-xs font-mono">
              <span className="text-neutral-300">Exit active Reading overlay</span>
              <kbd className="bg-dark-bg border border-dark-border px-2.5 py-1 rounded text-[10px] text-white">
                Escape Link
              </kbd>
            </div>
          </div>
        </div>

        {/* Administration and Data reset Card */}
        <div className="bg-dark-surface border border-dark-border rounded-2xl shadow-xl overflow-hidden">
          <div className="p-4.5 bg-dark-bg border-b border-dark-border flex items-center space-x-2.5">
            <Settings2 className="w-4.5 h-4.5 text-neon-green" />
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-white">
              Device Administration
            </h3>
          </div>
          
          <div className="p-5 space-y-6">
            <div>
              <p className="text-xs font-mono font-bold text-neutral-200">Reset Active Target Page</p>
              <p className="text-[10px] text-dark-muted font-mono leading-relaxed mt-1">
                Force reset your active page pointer back to Page 604 (Quran start page). Your completed milestones are retained.
              </p>
              <button
                onClick={handleSetPage604}
                className="mt-3 py-1.5 px-4 bg-dark-bg border border-dark-border hover:border-white text-xs font-mono font-bold text-white rounded-lg cursor-pointer transition-colors"
              >
                Set Active Target to Page 604
              </button>
            </div>

            <div className="pt-5 border-t border-dark-border/40">
              <div className="flex items-center space-x-2 text-red-500 mb-1">
                <AlertTriangle className="w-4 h-4" />
                <p className="text-xs font-mono font-bold">Hard-Reset Device LocalStorage</p>
              </div>
              <p className="text-[10px] text-dark-muted font-mono leading-relaxed">
                Wipes the entire Zustand persist store from this browser, immediately reloading with pristine initial states. Use with absolute caution.
              </p>
              <button
                onClick={handleResetData}
                className="mt-3 py-2 px-4 bg-red-950/20 hover:bg-red-950/40 border border-red-900/40 hover:border-red-500 text-xs font-mono font-bold text-red-400 rounded-lg cursor-pointer transition-all"
              >
                Hard Reset Application Data
              </button>
            </div>
          </div>
        </div>

        {/* Application details */}
        <div className="p-5 border border-dark-border bg-dark-surface/15 rounded-2xl flex space-x-4 items-start select-none">
          <FileText className="w-6 h-6 text-neon-green shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="text-xs font-mono font-bold text-white">About Thartheel</p>
            <p className="text-[10px] text-dark-muted font-mono leading-relaxed">
              Thartheel (ترتيل) is conceived as a high-performance, distract-free environment for serious Quranic engagement. Optimized for mechanical efficiency, it relies heavily on sequential navigation loops and local index persistence. Built with React, Zustand, and Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
