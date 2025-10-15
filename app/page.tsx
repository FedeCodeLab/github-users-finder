"use client";

import { useGithubStore } from "@/store/useGithubStore";
import { Sidebar } from "@/components/sidebar";
import Image from "next/image";
import { User } from "@/components/user";
import Link from "next/link";

export default function Home() {
  const { users, selectedUser, selectUser, repos } = useGithubStore();

  console.log("users: ", users);
  return (
    <div className="font-sans min-h-screen bg-[#0D1117]">
      <div className="grid grid-cols-[350px_1fr] min-h-[inherit]">
        <Sidebar />

        <div className="flex flex-col gap-6 px-[2vw] pt-10">
          <h3 className="text-xl text-light">
            {selectedUser ? selectedUser.login : "GitHub Users"}
          </h3>

          <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-10">
            {selectedUser ? (
              <>
                <User {...selectedUser} repos={repos} />
              </>
            ) : users.length === 0 ? (
              <p className="text-default">
                No users found. Try searching above.
              </p>
            ) : (
              users.map((user) => (
                <div
                  key={user.id}
                  className="border border-blue-highlight-light rounded-lg p-4 text-center bg-blue-highlight"
                >
                  <Image
                    src={user.avatar_url || "/avatar-default.jpg"}
                    alt={user.login || "default avatar"}
                    width={300}
                    height={300}
                    className="w-full h-auto rounded-full mx-auto mb-3"
                    unoptimized
                  />
                  <h3 className="font-semibold text-light">{user.login}</h3>

                  <p
                    onClick={() => selectUser(user.login)}
                    className="w-full border-2 cursor-pointer border-blue-highlight-light hover:bg-blue-highlight-light text-sm mt-2 inline-block px-4 py-2 rounded-[10px]"
                  >
                    View Profile
                  </p>

                  <Link
                    href={user.html_url}
                    target="_blank"
                    className="w-full bg-[#0A66C2] hover:bg-[#0a5caf] text-sm mt-2 inline-block px-4 py-2 rounded-[10px]"
                  >
                    View Profile on Github
                  </Link>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
