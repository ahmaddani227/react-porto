import { useState } from "react";
import { CalendarProps, ContributionMonth } from "../../../../types/github";
import CalendarSkeleton from "../skeletons/CalenderSkeleton";

const Calender = ({ data }: CalendarProps) => {
  const [selectContribution, setSelectContribution] = useState<{
    count: number | null;
    date: string | null;
  }>({
    count: null,
    date: null,
  });

  const weeks = data?.weeks ?? [];
  const months: ContributionMonth[] =
    data?.months?.map((month) => {
      const filterContributionDay = weeks
        .filter(
          (week) => week.firstDay.slice(0, 7) === month.firstDay.slice(0, 7)
        )
        .map((item) => item.contributionDays)
        .flat(1);
      const getContributionsByMonth = filterContributionDay.reduce(
        (previousValue, currentValue) =>
          previousValue + currentValue.contributionCount,
        0
      );

      return {
        ...month,
        contributionsCount: getContributionsByMonth,
      };
    }) ?? [];
  const contributionColors = data?.colors ?? [];

  if (!data) {
    return <CalendarSkeleton />;
  }

  return (
    <div className="p-3.5 border rounded-md lg:p-5 border-midnight-slate">
      <div
        id="contributions"
        className="w-full h-full mb-2 overflow-x-auto xl:overflow-hidden"
      >
        <div className="min-w-[640px] w-max sm:w-auto">
          {/* Month */}
          <div className="flex text-xs md:text-sm">
            {months.map((month) => (
              <span
                key={month.firstDay}
                style={{ minWidth: `${month.totalWeeks * 1.9}%` }}
              >
                {month.totalWeeks > 2 && month.name}
              </span>
            ))}
          </div>

          {/* Contribution Day */}
          <div className="flex gap-px md:gap-[3px]">
            {weeks.map((week) => (
              <div
                key={week.firstDay}
                className="flex flex-col w-full gap-px md:gap-1"
              >
                {week.contributionDays.map((contribution) => {
                  const backgroundColor =
                    contribution.contributionCount > 0 && contribution.color;
                  return (
                    <span
                      key={contribution.date}
                      style={backgroundColor ? { backgroundColor } : undefined}
                      className="aspect-square bg-midnight-slate rounded-[3.5px]"
                      onMouseEnter={() =>
                        setSelectContribution({
                          count: contribution.contributionCount,
                          date: contribution.date,
                        })
                      }
                      onMouseLeave={() =>
                        setSelectContribution({ count: null, date: null })
                      }
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-sm">
          <span>Less</span>
          <ul className="flex gap-1">
            <li className="w-3 h-3 rounded-sm bg-neutral-300" />
            {contributionColors.map((item) => (
              <li
                key={item}
                className="w-3 h-3 rounded-sm"
                style={{ backgroundColor: item }}
              />
            ))}
          </ul>
          <span>More</span>
        </div>

        <div
          className={`${
            selectContribution?.date ? "opacity-100" : "opacity-0"
          } rounded bg-midnight-slate px-2 text-sm dark:bg-neutral-700`}
        >
          {selectContribution?.count} contributions on{" "}
          {selectContribution?.date}
        </div>
      </div>
    </div>
  );
};

export default Calender;
