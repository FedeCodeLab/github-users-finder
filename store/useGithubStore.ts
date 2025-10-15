import { create } from "zustand";

interface GithubUser {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
}

interface GithubStore {
  query: string;
  lastQuery: string;
  users: GithubUser[];
  setQuery: (value: string) => void;
  fetchUsers: () => Promise<void>;
}

export const useGithubStore = create<GithubStore>((set, get) => ({
  query: "",
  lastQuery: "",
  users: [],

  setQuery: (value) => set({ query: value }),

  fetchUsers: async () => {
    const { query } = get();
    if (!query) return;

    try {
      const res = await fetch(
        `https://api.github.com/search/users?q=${query}&per_page=12`
      );
      const data = await res.json();
      set({ users: data.items || [], lastQuery: query });
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  },
}));
