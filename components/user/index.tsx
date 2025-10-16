import Image from "next/image";
import { Repositories } from "./Repositories";
import Link from "next/link";

export interface GithubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  language: string | null;
}

export interface GithubUser {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
  followers: number;
  following: number;
  name?: string;
  bio?: string;
  company?: string;
  blog?: string;
  location?: string;
  repos?: GithubRepo[];
}

export const User = (selectedUser: GithubUser) => {
  return (
    <div className="col-span-full">
      <div className=" border border-blue-highlight-light rounded-lg p-4 bg-blue-highlight flex flex-col gap-10">
        <div className="text-center flex flex-col gap-4 items-center">
          <Image
            src={selectedUser.avatar_url || "/avatar-default.jpg"}
            alt={selectedUser.login}
            width={300}
            height={300}
            className="w-[300px] h-[300px] rounded-full mx-auto mb-3"
            unoptimized
          />

          <div>
            <h1 className="font-semibold text-light text-3xl">
              {selectedUser.login}
            </h1>

            {selectedUser.name && (
              <h2 className="text-default text-xl">{selectedUser.name}</h2>
            )}
          </div>

          {selectedUser.bio && (
            <p className="text-default max-w-[400px] ">{selectedUser.bio}</p>
          )}
          <div className="flex gap-4">
            <div className="flex items-center justify-center text-default text-[14px] font-semibold rounded-[10px] border border-blue-highlight-light py-2 px-6 w-[200px] text-center">
              <p>Followers: {selectedUser.followers}</p>
            </div>

            <div className="flex items-center justify-center text-default text-[14px] font-semibold rounded-[10px] border border-blue-highlight-light py-2 px-4 w-[200px] text-center">
              <p>Following: {selectedUser.following}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            {selectedUser.location && (
              <p>📌 Location: {selectedUser.location}</p>
            )}
            {selectedUser.blog && (
              <Link href={selectedUser.blog} target="_blank">
                🔗 Page:{" "}
                <span className="text-blue-400 hover:text-blue-600">
                  {selectedUser.blog}
                </span>
              </Link>
            )}
            {selectedUser.company && (
              <p>💼 Enterprise: {selectedUser.company}</p>
            )}
          </div>
        </div>
      </div>
      <Repositories repos={selectedUser.repos || []} />
    </div>
  );
};
