import Image from "next/image";
import Link from "next/link";

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

        <div className="flex flex-col gap-4">
          <h5>Links:</h5>
          <ul className="flex flex-col gap-4">
            <Link href="https://github.com/FedeCodeLab" target="_blank">
              <li className="bg-[#3B8640] hover:bg-[#2e7433] py-3 px-6 rounded-[10px] text-center">
                Github
              </li>
            </Link>

            <Link
              href="https://www.linkedin.com/in/federico-guzman/"
              target="_blank"
            >
              <li className="bg-[#0A66C2] hover:bg-[#0a5caf] py-3 px-6 rounded-[10px] text-center">
                Linkedin
              </li>
            </Link>

            <Link href="https://fedecodelab.vercel.app/" target="_blank">
              <li className="border-2 border-[#0A66C2] hover:border-[#0a5caf] hover:bg-[#0a5caf] py-3 px-6 rounded-[10px] text-center">
                Portfolio
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};
