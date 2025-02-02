import Square from "./Square";

interface Contribution {
  date: string;
  contributionCount: number;
  color: string;
}

interface Month {
  name: string;
  firstDay: string;
  totalWeeks: number;
  contributionsCount: number;
}

interface CalendarProps {
  data?: {
    weeks: {
      firstDay: string;
      contributionDays: Contribution[];
    }[];
    months: Month[];
    colors: string[];
  };
}

const Calender = ({ data }: CalendarProps) => {
  return (
    <div className="p-3.5 border rounded-md lg:p-5 border-midnight-slate">
      <div
        id="contributions"
        className="w-full h-full overflow-x-auto xl:overflow-hidden"
      >
        <div className="min-w-[640px] w-max sm:w-auto">
          {!data && <p>Invalid Gthub Token!</p>}
          <div className="flex text-xs md:text-sm">
            {data &&
              data.months.map((month: any, index: number) => {
                return (
                  <span
                    key={index}
                    style={{ minWidth: `${month.totalWeeks * 1.9}%` }}
                  >
                    {month.totalWeeks > 2 && month.name}
                  </span>
                );
              })}
          </div>
          <div className="flex gap-px md:gap-[3px]">
            {data &&
              data.weeks.slice(1).map((week: any, index: number) => (
                <ul
                  key={index}
                  className="flex flex-col w-full gap-px md:gap-1"
                >
                  {week.contributionDays.map(
                    (contributionDay: any, index: number) => {
                      const color =
                        contributionDay.contributionCount == 0
                          ? ""
                          : contributionDay.color;
                      return <Square color={color} key={index} />;
                    }
                  )}
                </ul>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calender;
