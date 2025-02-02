interface StatsItemProps {
  title: string;
  data?: number;
}

const StatsItem = ({ title, data = 0 }: StatsItemProps) => {
  return (
    <div className="w-full p-3 border rounded-md border-midnight-slate">
      <span>{title}</span>
      <p className="text-2xl font-semibold text-green-600">{data}</p>
    </div>
  );
};

export default StatsItem;
