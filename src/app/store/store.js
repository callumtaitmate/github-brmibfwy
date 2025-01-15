import { create } from "zustand";

export const useOverviewStore = create((set) => ({
  overview: [],
  addToOverview: (postCalcObject) =>
    set((state) => ({ overview: [...state.overview, postCalcObject] })),

  clearItem: (foodId, foodDay) =>
    set((state) => ({
      overview: state.overview.filter(
        (foods) => foods.id !== foodId || foods.day !== foodDay
      ),
    })),

  clearAll: () => set({ overview: [] }),
}));

export const useExerciseStore = create((set) => ({
  overview: [],
  addToOverview: (postCalcObject) =>
    set((state) => ({ overview: [...state.overview, postCalcObject] })),

  clearItem: (foodId, foodDay) =>
    set((state) => ({
      overview: state.overview.filter(
        (foods) => foods.configure.result.id !== foodId || foods.configure.result.day !== foodDay
      ),
    })),

  clearAll: () => set({ overview: [] }),
}));

export const useConfigureSotre = create((set) => ({
  configure: {
    result: {
      price: 0,
      quantity: 100,
      day: "Monday",
      food: {
        label: "Add food to start",
        nutrients: {
          ENERC_KCAL: 0,
          CHOCDF: 0,
          FAT: 0,
          PROCNT: 0,
        },
      },
    },
  },
  addConfiguration: (result) => set((state) => ({ configure: { result } })),

  clearConfiguration: () =>
    set({
      configure: {
        result: {
          price: 0,
          quantity: 100,
          day: "Monday",
          food: {
            label: "Add food to start",
            nutrients: {
              ENERC_KCAL: 0,
              CHOCDF: 0,
              FAT: 0,
              PROCNT: 0,
            },
          },
        },
      },
    }),
}));

export const useMovementStore = create((set) => ({
  exercise: {
    result: {
      sets: 3,
      reps: 8,
      weight: 100,
      day: "Monday",
      name: "Add Exercise to Start",
      id: ""
    },
  },
  addExercise: (result) => set((state) => ({ exercise: { result } })),

  clearExercise: () =>
    set({
      exercise: {
        result: {
          sets: 3,
          reps: 8,
          weight: 100,
          day: "Monday",
          name: "Add Exercise to Start",
          id: ""
        },
      },
    }),
}));

export const useDayStore = create((set) => ({
  day: "Monday",
  updateDay: (day) => set({ day: day }),
}));
