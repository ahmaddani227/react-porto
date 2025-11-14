import { SiLaravel, SiReact } from "react-icons/si";
import { ProjectsType } from "../types/menu";

export const projects: ProjectsType[] = [
  {
    title: "Shoes Thrift",
    subtitle: "_crud-redux",
    Svg: SiReact,
    description: "Project landing page untuk toko sepatu thrift.",
    image: "/projects/shoes-trift.png",
    github: "https://github.com/ahmaddani227/shoes-trift",
    classname: {
      bgIcon: "bg-blue-300",
    },
    techstack: ["React", "Typescript", "TailwindCSS"],
  },
  {
    title: "Simple POS",
    subtitle: "_POS",
    Svg: SiLaravel,
    description: "Project akhir dari matkul Enterprise System.",
    image: "/projects/simple-pos.png",
    github: "https://github.com/",
    classname: {
      bgIcon: "bg-red-500",
    },

    techstack: ["Laravel", "PHP"],
  },
];
