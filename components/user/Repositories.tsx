import Link from "next/link";

export interface GithubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  language: string | null;
}

interface RepositoriesProps {
  repos: GithubRepo[];
}

export const Repositories = ({ repos }: RepositoriesProps) => {
  return (
    <div className="col-span-full mt-6 flex flex-col gap-4">
      <h4 className="text-light text-lg font-semibold mb-2">Repositories:</h4>
      {repos.length > 0 ? (
        <ul className="grid gap-3 md:grid-cols-2">
          {repos.map((repo) => (
            <Link href={repo.html_url} key={repo.id} target="_blank">
              <li className="border border-blue-highlight-light hover:bg-blue-highlight rounded-lg p-6  flex flex-col gap-4">
                <div>
                  <p className="text-blue-400 font-semibold">{repo.name}</p>
                  {repo.description && (
                    <p className="text-default text-sm">{repo.description}</p>
                  )}
                </div>
                <p className="text-xs text-gray-400">
                  ⭐ {repo.stargazers_count} | {repo.language || "N/A"}
                </p>
              </li>
            </Link>
          ))}
        </ul>
      ) : (
        <p className="text-default">No repositories found.</p>
      )}
    </div>
  );
};
