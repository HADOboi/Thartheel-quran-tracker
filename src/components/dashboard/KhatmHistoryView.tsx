import { useQuranStore } from '../../store/useQuranStore';
import { Calendar, LayoutGrid, Award, ShieldAlert, BookOpen, Compass, Flame } from 'lucide-react';

export default function KhatmHistoryView() {
  const khatmHistory = useQuranStore((state) => state.quran_recite_tracker.khatm_history);
  const cycle = useQuranStore((state) => state.quran_recite_tracker.khatm_cycle);
  const totalCompleted = useQuranStore((state) => state.quran_recite_tracker.completed_pages_history.length);
  const streak = useQuranStore((state) => state.streak.current_streak);

  return (
    <div className="flex-1 overflow-y-auto p-10 bg-[#0a0a0a] h-full custom-scrollbar relative select-none">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] grid-bg z-0" />

      <div className="max-w-[1000px] mx-auto space-y-8 z-10 relative">
        <div className="border-b border-dark-border/40 pb-4 select-none">
          <h2 className="text-2xl font-display font-bold text-white tracking-tight">Khatm Dashboard</h2>
          <p className="text-xs text-dark-muted font-mono tracking-wide">
            Detailed accountability analysis & historical lifecycle graphs
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-dark-surface border border-dark-border p-5 rounded-2xl relative shadow-xl overflow-hidden group">
            <div className="absolute -right-2 -bottom-2 text-neon-green/5 group-hover:text-neon-green/10 transition-colors pointer-events-none font-black text-6xl">
              Q
            </div>
            <p className="text-[10px] font-mono uppercase tracking-widest text-[#85967c] font-bold">
              Active Cycle
            </p>
            <p className="text-3xl font-mono font-black text-white mt-1">
              Cycle #{cycle}
            </p>
            <p className="text-[10px] text-dark-muted font-mono mt-1">
              Currently in progress
            </p>
          </div>

          <div className="bg-dark-surface border border-dark-border p-5 rounded-2xl relative shadow-xl overflow-hidden group">
            <div className="absolute -right-2 -bottom-2 text-neon-green/5 pointer-events-none font-black text-6xl">
              P
            </div>
            <p className="text-[10px] font-mono uppercase tracking-widest text-[#85967c] font-bold">
              Total Recorded
            </p>
            <p className="text-3xl font-mono font-black text-neon-green mt-1 shadow-[0_0_15px_rgba(57,255,20,0.1)]">
              {totalCompleted} <span className="text-xs font-normal text-dark-muted">/ 604</span>
            </p>
            <p className="text-[10px] text-dark-muted font-mono mt-1">
              Pages counted in this cycle
            </p>
          </div>

          <div className="bg-dark-surface border border-dark-border p-5 rounded-2xl relative shadow-xl overflow-hidden group">
            <div className="absolute -right-2 -bottom-2 text-neon-green/5 pointer-events-none font-black text-6xl">
              S
            </div>
            <p className="text-[10px] font-mono uppercase tracking-widest text-[#85967c] font-bold">
              Active Streak
            </p>
            <p className="text-3xl font-mono font-black text-white mt-1">
              {streak} Days
            </p>
            <p className="text-[10px] text-dark-muted font-mono mt-1">
              Consecutive recitation streak
            </p>
          </div>

          <div className="bg-dark-surface border border-dark-border p-5 rounded-2xl relative shadow-xl overflow-hidden group">
            <div className="absolute -right-2 -bottom-2 text-neon-green/5 pointer-events-none font-black text-6xl">
              K
            </div>
            <p className="text-[10px] font-mono uppercase tracking-widest text-[#85967c] font-bold">
              Completed Khatms
            </p>
            <p className="text-3xl font-mono font-black text-white mt-1">
              {khatmHistory.length} Cycles
            </p>
            <p className="text-[10px] text-dark-muted font-mono mt-1">
              Saved in localStorage
            </p>
          </div>
        </div>

        {/* Khatm History Table List */}
        <div className="border border-dark-border bg-dark-surface/40 rounded-2xl shadow-xl overflow-hidden">
          <div className="p-5 border-b border-dark-border bg-dark-surface/80 flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <Award className="w-5 h-5 text-neon-green" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                Completed Khatm Registers
              </span>
            </div>
          </div>

          {khatmHistory.length === 0 ? (
            <div className="p-12 text-center text-dark-muted flex flex-col items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-dark-bg border border-dark-border flex items-center justify-center text-dark-muted mb-3.5 shadow-inner">
                <Compass className="w-5 h-5" />
              </div>
              <p className="font-display font-semibold text-sm text-neutral-400">No completed Khatms on this device yet.</p>
              <p className="text-[10px] font-mono mt-1 max-w-sm">
                Finish reading page 604 down to page 1 to log your first verified ritual Khatm completion. Good momentum!
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto select-none">
              <table className="w-full text-left font-mono text-xs border-collapse">
                <thead>
                  <tr className="bg-dark-bg text-dark-muted uppercase text-[9px] border-b border-dark-border">
                    <th className="py-3 px-5">Khatm Index</th>
                    <th className="py-3 px-5">Cycle Dates</th>
                    <th className="py-3 px-5">Time taken</th>
                    <th className="py-3 px-5 text-right">Verification</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-dark-border/40 text-neutral-300">
                  {khatmHistory.map((k) => (
                    <tr key={k.khatm_number} className="hover:bg-dark-surface/60 transition-colors">
                      <td className="py-4.5 px-5 font-black text-white">
                        Cycle #{k.khatm_number}
                      </td>
                      <td className="py-4.5 px-5 text-neutral-400">
                        {k.start_date} <span className="text-dark-muted font-bold">→</span> {k.completed_date}
                      </td>
                      <td className="py-4.5 px-5">
                        <span className="font-bold text-neon-green">{k.days_taken}</span> Days total
                      </td>
                      <td className="py-4.5 px-5 text-right">
                        <span className="inline-block bg-neon-green/10 border border-neon-green/20 text-neon-green text-[9px] font-extrabold px-2.5 py-0.5 rounded-full shadow-[0_0_8px_rgba(57,255,20,0.15)]">
                          VERIFIED
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
