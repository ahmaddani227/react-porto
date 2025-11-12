const CalendarSkeleton = () => {
  return (
    <div className="p-3.5 border rounded-md lg:p-5 border-midnight-slate animate-pulse">
      <div
        id="contributions-skeleton"
        className="w-full h-full mb-2 overflow-x-auto xl:overflow-hidden"
      >
        <div className="min-w-[640px] w-max sm:w-auto">
          {/* Month header */}
          <div className="flex mb-2 text-xs md:text-sm">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="h-3 mr-3 rounded bg-slate-700"
                style={{ width: `${Math.random() * 40 + 30}px` }}
              />
            ))}
          </div>

          <div className="flex gap-px md:gap-[3px]">
            {[...Array(50)].map((_, i) => (
              <div key={i} className="flex flex-col w-full gap-px md:gap-1">
                {[...Array(7)].map((_, j) => (
                  <span
                    key={j}
                    className="aspect-square bg-slate-700 rounded-[3.5px]"
                    style={{ opacity: Math.random() * 0.5 + 0.3 }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 mt-3">
        <div className="flex items-center gap-2 text-sm">
          <span className="w-8 h-3 rounded bg-slate-700" />
          <ul className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <li
                key={i}
                className="w-3 h-3 rounded-sm bg-slate-700"
                style={{ opacity: 0.3 + i * 0.15 }}
              />
            ))}
          </ul>
          <span className="w-8 h-3 rounded bg-slate-700" />
        </div>

        <div className="w-40 md:h-3.5 h-2.5 rounded bg-slate-700" />
      </div>
    </div>
  );
};

export default CalendarSkeleton;
