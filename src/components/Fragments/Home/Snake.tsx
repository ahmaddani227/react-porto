import { boltImage } from "../../../constants/menu";

interface BoltProps {
  image: any;
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
        {boltImage.map((item: any, index: number) => (
          <Bolt key={index} image={item.image} classname={item.classname} />
        ))}
        <h1 className="text-3xl font-semibold text-slate-muted">Coming Soon</h1>
      </div>
    </div>
  );
}

export default Snake;
