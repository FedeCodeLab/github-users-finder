"use client";

import { useGithubStore } from "@/store/useGithubStore";
import Image from "next/image";

export default function Home() {
  const { users } = useGithubStore();

  return (
    <div className="font-sans min-h-screen bg-[#0D1117]">
      <div className="grid grid-cols-[350px_1fr] min-h-[inherit]">
        <div className="px-[2vw] pt-10 bg-blue-highlight border-r border-r-blue-highlight-light flex flex-col gap-6">
          <Image
            src="/avatar-default.jpg"
            width={350}
            height={350}
            alt="avatar"
            className="rounded-full mx-auto"
          />
          <div className="flex flex-col gap-4">
            <div>
              <h4 className="text-[24px] font-semibold text-light leading-6">
                Jon Snow
              </h4>
              <h5 className="text-[20px] font-light text-default">
                LordCommander.Dev · he/him
              </h5>
            </div>
            <div>
              <p className="text-[15px] text-light">
                Fullstack Developer | Building scalable solutions beyond the
                Wall. Passionate about clean code, strong typing, and protecting
                the realm of production.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 px-[2vw] pt-10">
          <h3 className="text-xl text-light">GitHub Users</h3>
          <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {users.length === 0 ? (
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
                    src={user.avatar_url}
                    alt={user.login}
                    width={300}
                    height={300}
                    className="w-[full] h-auto rounded-full mx-auto mb-3"
                  />
                  <h3 className="font-semibold text-light">{user.login}</h3>
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 text-sm mt-2 inline-block"
                  >
                    View Profile
                  </a>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
