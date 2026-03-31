import { create } from 'zustand';
import type { UserProfile, Category } from './types';

interface AppState {
  user: UserProfile | null;
  selectedCategory: Category | null;
  setUser: (user: UserProfile | null) => void;
  setSelectedCategory: (category: Category | null) => void;
}

export const useAppStore = create<AppState>((set) => ({
  user: null,
  selectedCategory: null,
  setUser: (user) => set({ user }),
  setSelectedCategory: (category) => set({ selectedCategory: category }),
}));
