import { useEffect, useState } from "react";
import { getGithubData } from "../../../../services/github";
import { RiGithubFill } from "react-icons/ri";
import Calender from "./Calender";
import { GITHUB_ACCOUNTS } from "../../../../constants/github";
import GithubStats from "./GithubStats";
import { ContributionCalendar } from "../../../../types/github";
import StatsItemSkeleton from "../skeletons/StatsItemSkeleton";

const Contributions = () => {
  const [data, setData] = useState<ContributionCalendar | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await getGithubData();
        setData(res);
      } catch (err) {
        console.error("Failed to fetch Github data:", err);
      }
    }
    fetchData();
  }, []);

  const statsData = data
    ? {
        totalContributions: data.totalContributions,
        weeks: data.weeks,
        months: data.months ?? [],
      }
    : undefined;

  const calendarData: ContributionCalendar | undefined = data
    ? {
        weeks: data.weeks.map((week) => ({
          firstDay: week.contributionDays[0]?.date ?? "",
          contributionDays: week.contributionDays.map((d) => ({
            date: d.date,
            contributionCount: d.contributionCount,
            color: d.color,
          })),
        })),
        months: data.months ?? [],
        colors: data.colors ?? [],
        totalContributions: data.totalContributions,
      }
    : undefined;

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

      {!data ? (
        <div className="grid grid-cols-2 grid-rows-2 gap-3 my-3 md:grid-cols-4 md:grid-rows-1">
          {[...Array(4)].map((_, i) => (
            <StatsItemSkeleton key={i} />
          ))}
        </div>
      ) : (
        <>
          <GithubStats data={statsData} />
        </>
      )}

      <Calender data={calendarData} />
    </div>
  );
};

export default Contributions;
