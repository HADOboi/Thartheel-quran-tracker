import { useQuranStore } from '../../store/useQuranStore';
import { getCurrentDateString } from '../../utils/dateUtils';
import { 
  BookOpen, 
  LayoutDashboard, 
  BrainCircuit, 
  ShieldAlert, 
  Settings as SettingsIcon, 
  LifeBuoy, 
  LogOut, 
  Flame, 
  CheckCircle2, 
  RefreshCw 
} from 'lucide-react';

interface SidebarProps {
  activeSection: 'recitation' | 'dashboard' | 'hifdh' | 'khatm' | 'settings';
  setActiveSection: (sec: 'recitation' | 'dashboard' | 'hifdh' | 'khatm' | 'settings') => void;
}

export default function Sidebar({ activeSection, setActiveSection }: SidebarProps) {
  const streak = useQuranStore((state) => state.streak.current_streak);
  const totalCompleted = useQuranStore((state) => state.quran_recite_tracker.completed_pages_history.length);
  const cycle = useQuranStore((state) => state.quran_recite_tracker.khatm_cycle);
  const lastReadDate = useQuranStore((state) => state.quran_recite_tracker.last_read_date);
  const today = getCurrentDateString();
  const isCompletedToday = lastReadDate === today;

  // Let's calculate overall progress %
  const progressPercent = ((totalCompleted / 604) * 100).toFixed(1);

  // Generate the last 7 days of the week to display progression
  const getPastSevenDays = () => {
    const days = [];
    const dateLabels = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    const completedHistory = useQuranStore.getState().quran_recite_tracker.completed_pages_history;

    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      
      const year = d.getFullYear();
      const month = String(d.getMonth() + 1).padStart(2, '0');
      const day = String(d.getDate()).padStart(2, '0');
      const dateStr = `${year}-${month}-${day}`;
      
      const dayOfWeekIndex = d.getDay();
      const label = dateLabels[dayOfWeekIndex];
      
      const isDone = completedHistory.some((h) => h.date === dateStr);
      const isToday = i === 0;

      days.push({ label, isDone, isToday, dateStr });
    }
    return days;
  };

  const pastSevenDays = getPastSevenDays();

  return (
    <aside className="w-[280px] bg-dark-surface border-r border-dark-border flex flex-col p-6 h-screen select-none shrink-0 overflow-y-auto">
      {/* Brand logo block */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <span className="font-arabic font-bold text-2xl text-neon-green tracking-wide">ترتيل</span>
          <span className="text-[10px] font-mono text-dark-muted font-bold tracking-wider bg-dark-bg px-2 py-0.5 rounded border border-dark-border">
            HAFS V2.1
          </span>
        </div>
        <h1 className="font-display font-black text-3xl tracking-tight text-white leading-tight">
          Thartheel
        </h1>
        <p className="text-[10px] uppercase tracking-[0.2em] text-dark-muted font-bold block pt-1">
          Divine Instrument
        </p>
      </div>

      {/* Streak widget with week progression */}
      <div className="mb-6 py-5 px-4 rounded-xl bg-dark-bg border border-dark-border flex flex-col items-center justify-center relative group shadow-[inset_0_0_20px_rgba(0,0,0,0.6)]">
        <div className="absolute top-2.5 right-2.5 flex space-x-0.5">
          <span className="w-1.5 h-1.5 rounded-full bg-neon-green animate-ping"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-neon-green absolute"></span>
        </div>
        
        <div className="flex items-center justify-center space-x-2.5 text-neon-green focus:outline-none select-text">
          <Flame className="w-7 h-7 fill-neon-green drop-shadow-[0_0_8px_rgba(57,255,20,0.5)] animate-pulse shrink-0" />
          <span className="font-mono text-5xl font-extrabold tracking-tighter leading-tight select-text block py-1">
            {streak}
          </span>
        </div>
        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#85967c] mt-2 select-none">
          Day Streak
        </span>

        {/* Minimal 7-day Week Progression */}
        <div className="w-full mt-4 pt-4 border-t border-dark-border/40 flex items-center justify-between px-0.5">
          {pastSevenDays.map((day, idx) => (
            <div key={idx} className="flex flex-col items-center space-y-1">
              <span className={`text-[8.5px] font-mono font-bold leading-none select-none ${
                day.isToday ? 'text-neon-green' : 'text-dark-muted/80'
              }`}>
                {day.label}
              </span>
              <div 
                className={`w-3.5 h-3.5 rounded-full flex items-center justify-center transition-all duration-300 relative ${
                  day.isDone
                    ? 'bg-neon-green'
                    : day.isToday
                      ? 'border border-dashed border-neon-green/45 bg-neon-green/5'
                      : 'bg-neutral-900 border border-dark-border/40'
                }`}
                title={`${day.dateStr} — ${day.isDone ? 'Completed' : 'No Reading'}`}
              >
                {day.isDone && (
                  <CheckCircle2 className="w-2.5 h-2.5 text-black stroke-[3.5]" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Overall Progress widget */}
      <div className="mb-6 bg-dark-bg/45 p-3.5 rounded-xl border border-dark-border/60">
        <div className="flex justify-between items-center mb-1.5">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-dark-muted">
            PROGRESS
          </span>
          <span className="text-xs font-mono font-bold text-neon-green">
            {progressPercent}%
          </span>
        </div>
        
        {/* Progress bar */}
        <div className="w-full h-1.5 bg-neutral-900 rounded-full overflow-hidden border border-dark-border/40 mb-2">
          <div 
            className="h-full bg-neon-green shadow-[0_0_8px_rgba(57,255,20,0.5)] transition-all duration-500 ease-out" 
            style={{ width: `${Math.max(1.5, parseFloat(progressPercent))}%` }}
          />
        </div>

        <div className="flex justify-between items-end">
          <div>
            <span className="text-xl font-mono text-white font-extrabold pr-0.5">
              {totalCompleted}
            </span>
            <span className="text-xs font-mono text-dark-muted">
              / 604 Pages
            </span>
          </div>
          <span className="text-[9px] font-mono text-[#85967c] font-bold bg-[#39ff14]/10 border border-[#39ff14]/15 px-2 py-0.5 rounded-md">
            Khatm #{cycle}
          </span>
        </div>
      </div>

      {/* Quranic Habits */}
      <div className="mb-6">
        <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-dark-muted mb-2">
          Quranic Habits
        </div>
        <div 
          className={`flex items-center justify-between p-3 border rounded-xl select-none transition-all duration-300 ${
            isCompletedToday 
              ? 'bg-[#107100]/10 border-neon-green/30 text-neon-green' 
              : 'bg-dark-bg/30 border-dark-border text-dark-muted'
          }`}
        >
          <div className="flex items-center space-x-2.5">
            <CheckCircle2 className={`w-4 h-4 ${isCompletedToday ? 'text-neon-green fill-neon-green/10' : 'text-neutral-700'}`} />
            <span className="text-xs font-mono font-bold tracking-wide uppercase">
              Recitation
            </span>
          </div>
          <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded-md font-bold ${
            isCompletedToday 
              ? 'bg-neon-green/20 text-neon-green border border-neon-green/20' 
              : 'bg-neutral-800 text-neutral-600'
          }`}>
            {isCompletedToday ? 'ACTIVE' : 'PENDING'}
          </span>
        </div>
      </div>

      {/* Nav Menu Links */}
      <nav className="flex-1 space-y-1">
        <button 
          onClick={() => setActiveSection('recitation')}
          className={`w-full flex items-center justify-between py-2.5 px-3 rounded-lg text-left transition-all duration-200 group cursor-pointer ${
            activeSection === 'recitation' 
              ? 'bg-dark-bg/80 text-neon-green font-bold border-l-2 border-neon-green' 
              : 'text-dark-muted hover:bg-dark-surface/40 hover:text-[#e5e2e1]'
          }`}
        >
          <div className="flex items-center space-x-3">
            <BookOpen className={`w-4 h-4 ${activeSection === 'recitation' ? 'text-neon-green' : 'text-dark-muted group-hover:text-white'}`} />
            <span className="text-[11px] font-mono uppercase tracking-widest">Recitation</span>
          </div>
        </button>

        <button 
          onClick={() => setActiveSection('hifdh')}
          className={`w-full flex items-center justify-between py-2.5 px-3 rounded-lg text-left transition-all duration-200 group cursor-pointer ${
            activeSection === 'hifdh' 
              ? 'bg-dark-bg/80 text-neon-green font-bold border-l-2 border-neon-green' 
              : 'text-dark-muted hover:bg-dark-surface/40 hover:text-[#e5e2e1]'
          }`}
        >
          <div className="flex items-center space-x-3">
            <BrainCircuit className={`w-4 h-4 ${activeSection === 'hifdh' ? 'text-neon-green' : 'text-dark-muted group-hover:text-white'}`} />
            <span className="text-[11px] font-mono uppercase tracking-widest">Memorization</span>
          </div>
        </button>

        <button 
          onClick={() => setActiveSection('dashboard')}
          className={`w-full flex items-center justify-between py-2.5 px-3 rounded-lg text-left transition-all duration-200 group cursor-pointer ${
            activeSection === 'dashboard' 
              ? 'bg-dark-bg/80 text-neon-green font-bold border-l-2 border-neon-green' 
              : 'text-dark-muted hover:bg-dark-surface/40 hover:text-[#e5e2e1]'
          }`}
        >
          <div className="flex items-center space-x-3">
            <LayoutDashboard className={`w-4 h-4 ${activeSection === 'dashboard' ? 'text-neon-green' : 'text-dark-muted group-hover:text-white'}`} />
            <span className="text-[11px] font-mono uppercase tracking-widest">Khatm History</span>
          </div>
        </button>

        <button 
          onClick={() => setActiveSection('settings')}
          className={`w-full flex items-center justify-between py-2.5 px-3 rounded-lg text-left transition-all duration-200 group cursor-pointer ${
            activeSection === 'settings' 
              ? 'bg-dark-bg/80 text-neon-green font-bold border-l-2 border-neon-green' 
              : 'text-dark-muted hover:bg-dark-surface/40 hover:text-[#e5e2e1]'
          }`}
        >
          <div className="flex items-center space-x-3">
            <SettingsIcon className={`w-4 h-4 ${activeSection === 'settings' ? 'text-neon-green' : 'text-dark-muted group-hover:text-white'}`} />
            <span className="text-[11px] font-mono uppercase tracking-widest">Settings</span>
          </div>
        </button>
      </nav>

      {/* support links at the bottom */}
      <div className="mt-auto pt-4 border-t border-dark-border/60">
        <div className="flex items-center justify-between text-dark-muted text-[10px] font-mono pb-2 select-none">
          <button 
            onClick={() => alert('Thartheel Support: For help or suggestions, email support@thartheel.com.')}
            className="flex items-center space-x-1 cursor-pointer hover:text-white transition-colors"
          >
            <LifeBuoy className="w-3.5 h-3.5" />
            <span>Support</span>
          </button>
          
          <button 
            onClick={() => {
              if (confirm('Reset all localStorage data and start Thartheel over? This is irreversible.')) {
                localStorage.removeItem('thartheel-storage');
                window.location.reload();
              }
            }}
            className="flex items-center space-x-1 cursor-pointer hover:text-red-400 transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reset Data</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
