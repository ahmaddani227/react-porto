import { useEffect, useState } from "react";
import { getCodewarsData } from "../../../../services/codewars";
import StatsItem from "../Contributions/StatsItem";
import { SiCodewars } from "react-icons/si";

interface CodewarsData {
  honor: number;
  skills: string[];
  ranks: {
    overall: {
      rank: number;
      score: number;
    };
  };
  codeChallenges: {
    totalCompleted: number;
  };
}

const Codewars = () => {
  const [codewarsData, setCodewarsData] = useState<CodewarsData | 0>(0);

  useEffect(() => {
    async function fetchData() {
      const data = await getCodewarsData();
      setCodewarsData(data);
    }
    fetchData();
  }, []);

  if (!codewarsData) return 0;

  return (
    <>
      <div className="my-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-5 h-5 overflow-hidden rounded-full">
            <SiCodewars className="w-full h-full" />
          </div>
          <h2 className="text-lg font-medium ">Codewars Statistic</h2>
        </div>
        <div className="flex flex-col justify-between gap-2 mb-2 text-sm md:items-center md:flex-row">
          <p>My statistic score on codewars.</p>
          <a
            href={`https://codewars.com/`}
            target="_blank"
            aria-label="View On Codewars"
            className="duration-100 hover:opacity-70"
          >
            @codewars
          </a>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          <StatsItem title="Honor" value={codewarsData?.honor} />
          <StatsItem
            title="Rank"
            value={Math.abs(codewarsData?.ranks.overall.rank)}
          />
          <StatsItem
            title="Total Completed Kata"
            value={codewarsData?.codeChallenges.totalCompleted}
          />
          <StatsItem title="Score" value={codewarsData?.ranks.overall.score} />
        </div>
      </div>
    </>
  );
};

export default Codewars;
