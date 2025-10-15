"use client";

import { useGithubStore } from "@/store/useGithubStore";
import Image from "next/image";

export default function Home() {
  const { users, selectedUser, selectUser } = useGithubStore();

  console.log(selectedUser);

  return (
    <div className="font-sans min-h-screen bg-[#0D1117]">
      <div className="grid grid-cols-[350px_1fr] min-h-[inherit]">
        {/* Columna izquierda - Perfil estático / seleccionado */}
        <div className="px-[2vw] pt-10 bg-blue-highlight border-r border-r-blue-highlight-light flex flex-col gap-6">
          <Image
            src={selectedUser?.avatar_url || "/avatar-default.jpg"}
            width={350}
            height={350}
            alt="avatar"
            className="rounded-full mx-auto"
            unoptimized
          />
          <div className="flex flex-col gap-4">
            <div>
              <h4 className="text-[24px] font-semibold text-light leading-6">
                {selectedUser ? selectedUser.login : "Jon Snow"}
              </h4>
              <h5 className="text-[20px] font-light text-default">
                LordCommander.Dev · he/him
              </h5>
            </div>
            <div>
              <p className="text-[15px] text-light">
                {selectedUser
                  ? selectedUser.bio
                  : "Fullstack Developer | Building scalable solutions beyond the Wall. Passionate about clean code, strong typing, and protecting the realm of production."}
              </p>
            </div>
          </div>
        </div>

        {/* Columna derecha */}
        <div className="flex flex-col gap-6 px-[2vw] pt-10">
          {/* Título */}
          <h3 className="text-xl text-light">
            {selectedUser ? selectedUser.login : "GitHub Users"}
          </h3>

          {/* Contenido */}
          <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {selectedUser ? (
              // Detalle del usuario seleccionado
              <div className="border border-blue-highlight-light rounded-lg p-4 text-center bg-blue-highlight col-span-full">
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
                {selectedUser.bio && (
                  <p className="text-default">{selectedUser.bio}</p>
                )}
                <p className="text-default mt-2">
                  Followers: {selectedUser.followers} | Following:{" "}
                  {selectedUser.following}
                </p>
              </div>
            ) : users.length === 0 ? (
              <p className="text-default">
                No users found. Try searching above.
              </p>
            ) : (
              // Lista de usuarios
              users.map((user) => (
                <div
                  key={user.id}
                  className="border border-blue-highlight-light rounded-lg p-4 text-center bg-blue-highlight cursor-pointer"
                  onClick={() => selectUser(user.login)}
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
                  <button
                    className="text-blue-400 text-sm mt-2 inline-block"
                    onClick={() => selectUser(user.login)}
                  >
                    View Profile
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
