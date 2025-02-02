import StatsItem from "./StatsItem";

interface Month {
  totalWeeks: number;
}

interface GithubStatsProps {
  data?: {
    totalContributions?: number;
    weeks?: { contributionDays: { contributionCount: number }[] }[];
    months: Month[];
  };
}

const GithubStats = ({ data }: GithubStatsProps) => {
  const totalContributions = data?.totalContributions ?? 0;
  const weeks = data?.weeks ?? [];
  const months = data?.months ?? [];

  // Last week's contribution
  const lastWeek = weeks.length > 0 ? weeks[weeks.length - 1] : undefined;
  const totalThisWeekContributions = lastWeek
    ? lastWeek.contributionDays.reduce(
        (sum, day) => sum + day.contributionCount,
        0
      )
    : 0;

  // last month's contribution
  let totalThisMonthContributions = 0;
  if (months.length > 0 && weeks.length > 0) {
    const indexMonth = months.length - 1;
    const totalWeeks = months[indexMonth]?.totalWeeks ?? 0;
    const indexWeek = weeks.length - totalWeeks;

    if (indexWeek >= 0) {
      totalThisMonthContributions = weeks
        .slice(indexWeek)
        .reduce(
          (sum, week) =>
            sum +
            week.contributionDays.reduce((s, d) => s + d.contributionCount, 0),
          0
        );
    }
  }

  const totalContributionList = weeks.flatMap((week) =>
    week.contributionDays.map((day) => day.contributionCount)
  );

  const bestContribution = totalContributionList.length
    ? Math.max(...totalContributionList)
    : 0;

  // const averageContribution = totalContributionList.length
  //   ? Math.ceil(totalContributions / totalContributionList.length)
  //   : 0;

  return (
    <div className="grid justify-around grid-cols-2 grid-rows-2 gap-3 my-3 md:grid-cols-4 md:grid-rows-1">
      <StatsItem title="Total" data={totalContributions} />
      <StatsItem title="Best Day" data={bestContribution} />
      <StatsItem title="This Month" data={totalThisMonthContributions} />
      <StatsItem title="This Week" data={totalThisWeekContributions} />
    </div>
  );
};

export default GithubStats;
