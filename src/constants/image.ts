import BoltUpLeft from "../assets/Icons/bolt-up-left.svg";
import BoltUpRight from "../assets/Icons/bolt-up-right.svg";
import BoltDownLeft from "../assets/Icons/bolt-down-left.svg";
import BoltDownRight from "../assets/Icons/bolt-down-right.svg";

type BoltSvg = {
  image: any;
  classname: string;
};

export const boltSvg: Array<BoltSvg> = [
  {
    image: BoltUpLeft,
    classname: "top-2 left-2",
  },
  {
    image: BoltUpRight,
    classname: "top-2 right-2",
  },
  {
    image: BoltDownLeft,
    classname: "bottom-2 left-2",
  },
  {
    image: BoltDownRight,
    classname: "bottom-2 right-2",
  },
];
