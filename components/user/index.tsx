import Image from "next/image";
import { Repositories } from "./Repositories";

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
      <div className="border border-blue-highlight-light rounded-lg p-4 text-center bg-blue-highlight">
        <Image
          src={selectedUser.avatar_url || "/avatar-default.jpg"}
          alt={selectedUser.login}
          width={300}
          height={300}
          className="w-[300px] h-[300px] rounded-full mx-auto mb-3"
          unoptimized
        />

        <h3 className="font-semibold text-light text-2xl">
          {selectedUser.login}
        </h3>

        {selectedUser.name && (
          <p className="text-default">{selectedUser.name}</p>
        )}
        {selectedUser.bio && <p className="text-default">{selectedUser.bio}</p>}

        <p className="text-default mt-2">
          Followers: {selectedUser.followers} | Following:{" "}
          {selectedUser.following}
        </p>

        {selectedUser.location && <p>{selectedUser.location}</p>}
        {selectedUser.blog && <p>{selectedUser.blog}</p>}
        {selectedUser.company && <p>{selectedUser.company}</p>}
      </div>
      <Repositories repos={selectedUser.repos || []} />
    </div>
  );
};
