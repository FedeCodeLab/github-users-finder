import Link from "next/link";

export const CTA = () => {
  return (
    <div className="flex flex-col gap-[15px]">
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
  );
};
