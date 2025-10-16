"use client";

import { create } from "zustand";

export interface GithubUser {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
}

export interface GithubUserDetail extends GithubUser {
  followers: number;
  following: number;
  name?: string;
  bio?: string;
  company?: string;
  blog?: string;
  location?: string;
}

export interface GithubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  language: string | null;
}

interface GithubStore {
  query: string;
  lastQuery: string;
  users: GithubUser[];
  selectedUser: GithubUserDetail | null;
  repos: GithubRepo[];
  setQuery: (value: string) => void;
  fetchUsers: () => Promise<void>;
  selectUser: (username: string) => Promise<void>;
  fetchRepos: (username: string) => Promise<void>;
  reset: () => void;
}

export const useGithubStore = create<GithubStore>((set, get) => ({
  query: "",
  lastQuery: "",
  users: [],
  selectedUser: null,
  repos: [],

  setQuery: (value) => set({ query: value }),

  fetchUsers: async () => {
    const { query } = get();
    if (!query) return;

    try {
      const res = await fetch(
        `https://api.github.com/search/users?q=${query}&per_page=12`
      );
      const data = await res.json();
      set({
        users: data.items || [],
        lastQuery: query,
        selectedUser: null,
        repos: [],
      });
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  },

  selectUser: async (username: string) => {
    if (!username) return;
    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      const data = await res.json();
      set({ selectedUser: data });
      await get().fetchRepos(username);
    } catch (err) {
      console.error("Error fetching user detail:", err);
    }
  },

  fetchRepos: async (username: string) => {
    try {
      const res = await fetch(`https://api.github.com/users/${username}/repos`);
      const data = await res.json();
      set({ repos: data || [] });
    } catch (err) {
      console.error("Error fetching repos:", err);
    }
  },

  reset: () =>
    set({
      query: "",
      lastQuery: "",
      users: [],
      selectedUser: null,
      repos: [],
    }),
}));
