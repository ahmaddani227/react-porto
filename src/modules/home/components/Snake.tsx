import BoltUpLeft from "../../../assets/Icons/bolt-up-left.svg";
import BoltUpRight from "../../../assets/Icons/bolt-up-right.svg";
import BoltDownLeft from "../../../assets/Icons/bolt-down-left.svg";
import BoltDownRight from "../../../assets/Icons/bolt-down-right.svg";

type BoltsSvg = {
  image: string;
  classname: string;
};

const boltsSvg: BoltsSvg[] = [
  { image: BoltUpLeft, classname: "top-2 left-2" },
  { image: BoltUpRight, classname: "top-2 right-2" },
  { image: BoltDownLeft, classname: "bottom-2 left-2" },
  { image: BoltDownRight, classname: "bottom-2 right-2" },
];

interface BoltProps {
  image: string;
  classname: string;
}

const Bolt = ({ image, classname }: BoltProps) => {
  return (
    <img src={image} alt="Icon Bolt" className={`absolute ${classname}`} />
  );
};

function Snake() {
  return (
    <div className="items-end hidden w-1/2 lg:flex">
      <div className="card-game">
        {boltsSvg.map((item, index) => (
          <Bolt key={index} image={item.image} classname={item.classname} />
        ))}
        <h1 className="text-3xl font-semibold text-slate-muted">Coming Soon</h1>
      </div>
    </div>
  );
}

export default Snake;
