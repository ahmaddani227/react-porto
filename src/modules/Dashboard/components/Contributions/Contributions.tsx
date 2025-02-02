import { useEffect, useState } from "react";
import { getGithubData } from "../../../../services/github";
import { RiGithubFill } from "react-icons/ri";
import Calender from "./Calender";
import { GITHUB_ACCOUNTS } from "../../../../constants/github";
import GithubStats from "./GithubStats";

const Contributions = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getGithubData();
      setData(data);
    }
    fetchData();
  }, []);

  return (
    <div className="my-4">
      <div className="flex items-center gap-2 mb-2">
        <RiGithubFill className="w-6 h-6" />
        <h2 className="text-lg font-medium ">Contributions</h2>
      </div>
      <div className="flex flex-col justify-between gap-2 text-sm md:items-center md:flex-row">
        <p>My contributions from last year on github.</p>
        <a
          href={`https://github.com/${GITHUB_ACCOUNTS.username}`}
          target="_blank"
          aria-label="View On Github"
          className="duration-100 hover:opacity-70"
        >
          @{GITHUB_ACCOUNTS.username}
        </a>
      </div>
      <GithubStats data={data} />
      <Calender data={data} />
    </div>
  );
};

export default Contributions;
