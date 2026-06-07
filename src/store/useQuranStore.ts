import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { getCurrentDateString, getYesterdayDateString, daysBetween } from '../utils/dateUtils';

export interface CompletedPage {
  actual_page: number;
  date: string;
}

export interface KhatmRecord {
  khatm_number: number;
  completed_date: string;
  start_date: string;
  days_taken: number;
}

export interface AppMeta {
  active_theme: 'dark' | 'light';
  current_view_mode: 'recite' | 'hifdh';
  current_sub_tab: 'juz' | 'surah' | 'map';
  active_reading_page: number | null; // null if on hub map, otherwise the actual_page being read
  is_history_view: boolean; // true if reading a page already completed prior to active page
}

export interface QuranReciteTracker {
  current_actual_page: number;
  completed_pages_history: CompletedPage[];
  last_read_date: string | null;
  khatm_cycle: number;
  khatm_history: KhatmRecord[];
}

export interface QuranHifdhTracker {
  current_surah_id: number;
  current_ayah_id: number;
  memorized_ayahs_manifest: string[]; // "surah_id:ayah_number"
  last_hifdh_date: string | null;
}

export interface Streak {
  current_streak: number;
  last_streak_date: string | null;
}

export interface QuranStore {
  app_meta: AppMeta;
  quran_recite_tracker: QuranReciteTracker;
  quran_hifdh_tracker: QuranHifdhTracker;
  streak: Streak;

  // Actions
  toggleViewMode: () => void;
  setSubTab: (tab: 'juz' | 'surah' | 'map') => void;
  openReader: (actualPage: number, isHistory?: boolean) => void;
  closeReader: () => void;
  
  // Recite actions
  advancePage: () => void;
  regressPage: () => void;
  completePageDirectly: (actualPage: number) => void;
  beginNextKhatm: () => void;

  // Hifdh actions
  setHifdhSurahAndAyah: (surahId: number, ayahNumber: number) => void;
  toggleAyahMemorized: (surahId: number, ayahNumber: number) => void;
  isAyahMemorized: (surahId: number, ayahNumber: number) => boolean;

  // Streak engine
  checkStreakOnAppLoad: () => void;
}

export const useQuranStore = create<QuranStore>()(
  persist(
    (set, get) => ({
      // Initial States
      app_meta: {
        active_theme: 'dark',
        current_view_mode: 'recite',
        current_sub_tab: 'juz',
        active_reading_page: null,
        is_history_view: false,
      },
      quran_recite_tracker: {
        current_actual_page: 604,
        completed_pages_history: [],
        last_read_date: null,
        khatm_cycle: 1,
        khatm_history: [],
      },
      quran_hifdh_tracker: {
        current_surah_id: 114,
        current_ayah_id: 1,
        memorized_ayahs_manifest: [],
        last_hifdh_date: null,
      },
      streak: {
        current_streak: 0,
        last_streak_date: null,
      },

      // Actions
      toggleViewMode: () => set((state) => ({
        app_meta: {
          ...state.app_meta,
          current_view_mode: state.app_meta.current_view_mode === 'recite' ? 'hifdh' : 'recite'
        }
      })),

      setSubTab: (tab) => set((state) => ({
        app_meta: {
          ...state.app_meta,
          current_sub_tab: tab
        }
      })),

      openReader: (actualPage, isHistory = false) => set((state) => ({
        app_meta: {
          ...state.app_meta,
          active_reading_page: actualPage,
          is_history_view: isHistory,
        }
      })),

      closeReader: () => set((state) => ({
        app_meta: {
          ...state.app_meta,
          active_reading_page: null,
          is_history_view: false,
        }
      })),

      advancePage: () => {
        const store = get();
        const currentPage = store.app_meta.active_reading_page;
        if (currentPage === null) return;

        // If in history reader, simply allow navigating but do not run streak/completion logic
        if (store.app_meta.is_history_view) {
          if (currentPage > 1) {
            set((state) => ({
              app_meta: {
                ...state.app_meta,
                active_reading_page: currentPage - 1
              }
            }));
          }
          return;
        }

        const newPage = currentPage - 1;
        if (newPage < 1) return; // Khatm is completed! Will check index 1 in the celebrate panel.

        const today = getCurrentDateString();
        
        // 1. Update the display page in the reader
        set((state) => ({
          app_meta: {
            ...state.app_meta,
            active_reading_page: newPage
          }
        }));

        // 2. Check streak & completion logic
        const alreadyReadPage = store.quran_recite_tracker.completed_pages_history.some(
          (h) => h.actual_page === currentPage
        );

        if (!alreadyReadPage) {
          // Add current page to completion history
          set((state) => {
            const history = [...state.quran_recite_tracker.completed_pages_history];
            history.push({ actual_page: currentPage, date: today });

            // Evaluate streak
            let updatedStreak = state.streak.current_streak;
            let updatedLastDate = state.streak.last_streak_date;

            const isPageCompletedToday = state.quran_recite_tracker.completed_pages_history.some(
              (p) => p.date === today
            );

            if (!isPageCompletedToday && state.streak.last_streak_date !== today) {
              const yesterday = getYesterdayDateString();
              const lastStreak = state.streak.last_streak_date;
              if (lastStreak === yesterday || lastStreak === null) {
                updatedStreak = state.streak.current_streak + 1;
              } else {
                updatedStreak = 1; // Broken streak reset
              }
              updatedLastDate = today;
            }

            return {
              quran_recite_tracker: {
                ...state.quran_recite_tracker,
                current_actual_page: newPage < state.quran_recite_tracker.current_actual_page ? newPage : state.quran_recite_tracker.current_actual_page,
                completed_pages_history: history,
                last_read_date: today,
              },
              streak: {
                current_streak: updatedStreak,
                last_streak_date: updatedLastDate,
              }
            };
          });
        }
      },

      regressPage: () => {
        const store = get();
        const currentPage = store.app_meta.active_reading_page;
        if (currentPage === null || currentPage >= 604) return;

        // Simply update page. No streak metrics are calculated when going backward
        set((state) => ({
          app_meta: {
            ...state.app_meta,
            active_reading_page: currentPage + 1
          }
        }));
      },

      completePageDirectly: (actualPage) => {
        const store = get();
        const today = getCurrentDateString();
        const alreadyReadPage = store.quran_recite_tracker.completed_pages_history.some(
          (h) => h.actual_page === actualPage
        );

        if (!alreadyReadPage) {
          set((state) => {
            const history = [...state.quran_recite_tracker.completed_pages_history];
            history.push({ actual_page: actualPage, date: today });

            let updatedStreak = state.streak.current_streak;
            let updatedLastDate = state.streak.last_streak_date;

            const isPageCompletedToday = state.quran_recite_tracker.completed_pages_history.some(
              (p) => p.date === today
            );

            if (!isPageCompletedToday && state.streak.last_streak_date !== today) {
              const yesterday = getYesterdayDateString();
              if (state.streak.last_streak_date === yesterday || state.streak.last_streak_date === null) {
                updatedStreak = state.streak.current_streak + 1;
              } else {
                updatedStreak = 1;
              }
              updatedLastDate = today;
            }

            // Move the current_actual_page to next if completing current
            let nextActualPage = state.quran_recite_tracker.current_actual_page;
            if (actualPage === state.quran_recite_tracker.current_actual_page) {
              nextActualPage = Math.max(1, actualPage - 1);
            }

            return {
              quran_recite_tracker: {
                ...state.quran_recite_tracker,
                completed_pages_history: history,
                current_actual_page: nextActualPage,
                last_read_date: today,
              },
              streak: {
                current_streak: updatedStreak,
                last_streak_date: updatedLastDate,
              }
            };
          });
        }
      },

      beginNextKhatm: () => {
        set((state) => {
          const today = getCurrentDateString();
          const firstEntryDate = state.quran_recite_tracker.completed_pages_history[0]?.date || today;
          const daysTaken = daysBetween(firstEntryDate, today) || 1;

          const newKhatmRecord: KhatmRecord = {
            khatm_number: state.quran_recite_tracker.khatm_cycle,
            completed_date: today,
            start_date: firstEntryDate,
            days_taken: daysTaken,
          };

          return {
            quran_recite_tracker: {
              current_actual_page: 604,
              completed_pages_history: [],
              last_read_date: null,
              khatm_cycle: state.quran_recite_tracker.khatm_cycle + 1,
              khatm_history: [...state.quran_recite_tracker.khatm_history, newKhatmRecord],
            },
            app_meta: {
              ...state.app_meta,
              active_reading_page: null,
              is_history_view: false,
            }
          };
        });
      },

      setHifdhSurahAndAyah: (surahId, ayahNumber) => set((state) => ({
        quran_hifdh_tracker: {
          ...state.quran_hifdh_tracker,
          current_surah_id: surahId,
          current_ayah_id: ayahNumber,
        }
      })),

      toggleAyahMemorized: (surahId, ayahNumber) => set((state) => {
        const key = `${surahId}:${ayahNumber}`;
        const prevManifest = [...state.quran_hifdh_tracker.memorized_ayahs_manifest];
        const isMem = prevManifest.includes(key);
        
        let newManifest;
        if (isMem) {
          newManifest = prevManifest.filter((m) => m !== key);
        } else {
          newManifest = [...prevManifest, key];
        }

        return {
          quran_hifdh_tracker: {
            ...state.quran_hifdh_tracker,
            memorized_ayahs_manifest: newManifest,
            last_hifdh_date: getCurrentDateString(),
          }
        };
      }),

      isAyahMemorized: (surahId, ayahNumber) => {
        const key = `${surahId}:${ayahNumber}`;
        return get().quran_hifdh_tracker.memorized_ayahs_manifest.includes(key);
      },

      checkStreakOnAppLoad: () => {
        const store = get();
        const today = getCurrentDateString();
        const yesterday = getYesterdayDateString();
        const lastDate = store.streak.last_streak_date;

        if (lastDate === null) return;
        if (lastDate === today || lastDate === yesterday) return;

        // Hard reset streak if they missed a day
        set(() => ({
          streak: {
            current_streak: 0,
            last_streak_date: null,
          }
        }));
      }
    }),
    {
      name: 'thartheel-storage',
    }
  )
);
