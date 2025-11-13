import {
  SiBootstrap,
  SiCss3,
  SiFramer,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import {
  RiUserStarFill,
  RiTeamFill,
  RiChat3Fill,
  RiLightbulbFlashFill,
  RiTimerFill,
  RiRefreshFill,
} from "react-icons/ri";

export type SkillCardType = {
  Svg: React.ElementType;
  label: string;
  style: {
    styleParent: string;
    styleChild: string;
  };
};

export const skills: SkillCardType[] = [
  {
    label: "HTML5",
    Svg: SiHtml5,
    style: {
      styleParent: "border-orange-500/50 hover:bg-orange-100/20",
      styleChild: "fill-orange-500",
    },
  },
  {
    label: "CSS",
    Svg: SiCss3,
    style: {
      styleParent: "border-blue-500/50 hover:bg-blue-100/20",
      styleChild: "fill-blue-500",
    },
  },
  {
    label: "JavaScript",
    Svg: SiJavascript,
    style: {
      styleParent: "border-yellow-500/50 hover:bg-yellow-100/20",
      styleChild: "fill-yellow-500",
    },
  },
  {
    label: "TypeScript",
    Svg: SiTypescript,
    style: {
      styleParent: "border-blue-700/50 hover:bg-blue-100/20",
      styleChild: "fill-blue-700",
    },
  },
  {
    label: "Bootstrap",
    Svg: SiBootstrap,
    style: {
      styleParent: "border-purple-700/50 hover:bg-purple-100/20",
      styleChild: "fill-purple-700",
    },
  },
  {
    label: "Tailwind CSS",
    Svg: SiTailwindcss,
    style: {
      styleParent: "border-blue-400/50 hover:bg-blue-100/20",
      styleChild: "fill-blue-400",
    },
  },
  {
    label: "NodeJS",
    Svg: SiNodedotjs,
    style: {
      styleParent: "border-green-700/50 hover:bg-green-100/20",
      styleChild: "fill-green-700",
    },
  },
  {
    label: "ReactJS",
    Svg: SiReact,
    style: {
      styleParent: "border-blue-500/50 hover:bg-blue-100/20",
      styleChild: "fill-blue-500",
    },
  },
  {
    label: "NextJS",
    Svg: SiNextdotjs,
    style: {
      styleParent: "border-white/50 hover:bg-white/20",
      styleChild: "fill-white",
    },
  },
  {
    label: "Shadcn UI",
    Svg: SiShadcnui,
    style: {
      styleParent: "border-black/50 hover:bg-black/20",
      styleChild: "fill-black",
    },
  },
  {
    label: "Motion",
    Svg: SiFramer,
    style: {
      styleParent: "border-white/50 hover:bg-white/20",
      styleChild: "fill-white",
    },
  },
  {
    label: "MySQL",
    Svg: SiMysql,
    style: {
      styleParent: "border-blue-800/50 hover:bg-blue-100/20",
      styleChild: "fill-blue-800",
    },
  },
  {
    label: "Git",
    Svg: SiGit,
    style: {
      styleParent: "border-red-600/50 hover:bg-blue-100/20",
      styleChild: "fill-red-600",
    },
  },
];

// SOFT SKILLS
export const softSkills: SkillCardType[] = [
  {
    label: "Leadership",
    Svg: RiUserStarFill,
    style: {
      styleParent: "border-pink-500/50 hover:bg-pink-100/20",
      styleChild: "fill-pink-500",
    },
  },
  {
    label: "Communication",
    Svg: RiChat3Fill,
    style: {
      styleParent: "border-blue-500/50 hover:bg-blue-100/20",
      styleChild: "fill-blue-500",
    },
  },
  {
    label: "Teamwork",
    Svg: RiTeamFill,
    style: {
      styleParent: "border-green-500/50 hover:bg-green-100/20",
      styleChild: "fill-green-500",
    },
  },
  {
    label: "Problem Solving",
    Svg: RiLightbulbFlashFill,
    style: {
      styleParent: "border-yellow-500/50 hover:bg-yellow-100/20",
      styleChild: "fill-yellow-500",
    },
  },
  {
    label: "Time Management",
    Svg: RiTimerFill,
    style: {
      styleParent: "border-red-500/50 hover:bg-red-100/20",
      styleChild: "fill-red-500",
    },
  },
  {
    label: "Adaptability",
    Svg: RiRefreshFill,
    style: {
      styleParent: "border-purple-500/50 hover:bg-purple-100/20",
      styleChild: "fill-purple-500",
    },
  },
];
