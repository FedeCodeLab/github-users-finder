"use client";

import Image from "next/image";
import { useGithubStore } from "@/store/useGithubStore";

export const Navbar = () => {
  const { query, setQuery, fetchUsers, reset } = useGithubStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchUsers();
  };

  const handleReset = () => {
    reset();
  };

  return (
    <nav className="border-b border-blue-highlight-light py-4 px-[2vw] flex justify-between items-center">
      <div
        onClick={handleReset}
        className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
      >
        <Image
          src="/github-light.webp"
          height={30}
          width={30}
          alt="Github Logo"
        />
        <h4 className="font-semibold text-light">Github Users Finder</h4>
      </div>

      <form onSubmit={handleSubmit} className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Find a user"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="font-light text-[14px] text-neutral border border-blue-highlight-light focus:border-transparent px-6 py-3 min-w-[300px] rounded-[10px] focus:outline-none focus:ring-2 focus:ring-blue-800"
        />
        <button
          type="submit"
          className="py-3 px-6 font-semibold text-[14px] bg-[#3B8640] hover:bg-[#2e7433] cursor-pointer rounded-[10px]"
        >
          Search
        </button>
      </form>
    </nav>
  );
};
