interface StatsItemProps {
  title: string;
  value: number;
}

const StatsItem = ({ title, value }: StatsItemProps) => {
  return (
    <div className="w-full p-3 border rounded-md border-midnight-slate">
      <span className="text-sm">{title}</span>
      <p className="text-2xl font-semibold text-green-600">{value}</p>
    </div>
  );
};

export default StatsItem;
