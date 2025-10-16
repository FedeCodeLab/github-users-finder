import Image from "next/image";
import { CTA } from "./CTA";

export const Sidebar = () => {
  return (
    <div className="px-[2vw] py-10 bg-blue-highlight border-r border-r-blue-highlight-light flex flex-col gap-6">
      <Image
        src={"/github-light.webp"}
        width={350}
        height={350}
        alt="avatar"
        className="rounded-full mx-auto"
        unoptimized
      />
      <div className="flex flex-col gap-6">
        <div>
          <h4 className="text-[24px] font-semibold text-light leading-6">
            Application developed by:
          </h4>
          <h4 className="text-[20px] font-light text-default">
            Federico Guzmán · Frontend Developer
          </h4>
        </div>

        <div>
          <p className="text-[15px] text-light">
            Frontend Developer | Typescript | Javascript | Next.js/React |
            Zustand/Redux | TailwindCSS/SaSS | i18n | Firebase | Postgres |
            Express | Sequelize | MCP
          </p>
        </div>

        <CTA />
      </div>
    </div>
  );
};
