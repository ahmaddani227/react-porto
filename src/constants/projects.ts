import { SiFlutter, SiGatsby, SiReact } from "react-icons/si";

type Projects = {
  title: string;
  subtitle: string;
  Svg: React.ElementType;
  description: string;
  image: string;
  github: string;
  classname: {
    bgIcon: string;
  };
  techstack: string[];
};

export const projects: Projects[] = [
  {
    title: "Projects 1",
    subtitle: "_ui-animations",
    Svg: SiFlutter,
    description: "Duis aute irure dolor in velit esse cillum dolore.",
    image:
      "https://images.unsplash.com/photo-1632425422799-286dc4325dbb?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    github: "https://github.com/",
    classname: {
      bgIcon: "bg-blue-300",
    },
    techstack: ["Flutter", "HTML"],
  },
  {
    title: "Projects 2",
    subtitle: "_api-resources",
    Svg: SiGatsby,
    description: "Duis aute irure dolor in velit esse cillum dolore.",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    github: "https://github.com/",
    classname: {
      bgIcon: "bg-purple-500",
    },

    techstack: ["Gatsby", "HTML"],
  },
  {
    title: "Projects 3",
    subtitle: "_worldmap",
    Svg: SiReact,
    description: "Duis aute irure dolor in velit esse cillum dolore.",
    image:
      "https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    github: "https://github.com/",
    classname: {
      bgIcon: "bg-mint-green",
    },

    techstack: ["React"],
  },
  {
    title: "Projects 4",
    subtitle: "_worldmap",
    Svg: SiReact,
    description: "Duis aute irure dolor in velit esse cillum dolore.",
    image:
      "https://images.unsplash.com/photo-1625014618427-fbc980b974f5?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    github: "https://github.com/",
    classname: {
      bgIcon: "bg-mint-green",
    },

    techstack: ["React"],
  },
  {
    title: "Projects 5",
    subtitle: "_worldmap",
    Svg: SiReact,
    description: "Duis aute irure dolor in velit esse cillum dolore.",
    image:
      "https://images.unsplash.com/photo-1617791160530-fb48acfc1658?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    github: "https://github.com/",
    classname: {
      bgIcon: "bg-mint-green",
    },
    techstack: ["React"],
  },
];
