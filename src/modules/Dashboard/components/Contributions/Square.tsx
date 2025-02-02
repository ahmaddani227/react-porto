interface squareProps {
  color?: string;
}

const Square = ({ color }: squareProps) => (
  <li
    style={{ backgroundColor: color }}
    className={`aspect-square bg-midnight-slate rounded-[3.5px]`}
  ></li>
);

export default Square;
