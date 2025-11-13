import Content from "../../../../components/Layouts/Ide/Content";
import ReadmeLayout from "../../../../components/Layouts/ReadmeLayout";
import {
  SkillCardType,
  skills,
  softSkills,
} from "../../../../constants/skills";

const SkillCard = ({ Svg, label, style }: SkillCardType) => {
  return (
    <div
      className={`group flex flex-col items-center justify-center transition-all duration-300 border border-slate-300/40 bg-gradient-to-b from-white/5 to-slate-900/10 dark:from-slate-800/40 dark:to-slate-900/30 h-28 rounded-xl hover:shadow-[0_0_15px_-3px_rgba(59,130,246,0.3)] hover:scale-[1.05] hover:border-blue-400/60 ${style.styleParent}`}
    >
      <Svg
        className={`w-10 h-10 mb-1 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1 ${style.styleChild}`}
      />
      <h3 className="mt-1 text-sm font-medium text-center text-slate-700 dark:text-slate-200">
        {label}
      </h3>
    </div>
  );
};

export default function HardSkills() {
  return (
    <Content>
      <ReadmeLayout>
        <h1 className="my-6 text-2xl font-semibold text-center text-slate-800 dark:text-slate-100">
          🧠 Hard Skills
        </h1>

        <div className="grid grid-cols-3 gap-6 mb-10 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>

        <div className="relative flex items-center justify-center my-10">
          <span className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-400/50 to-transparent" />
          <span className="relative px-3 text-xs tracking-wider uppercase bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400">
            and also...
          </span>
        </div>

        <h1 className="my-6 text-2xl font-semibold text-center text-slate-800 dark:text-slate-100">
          💬 Soft Skills
        </h1>

        <div className="grid grid-cols-2 gap-6 mb-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {softSkills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </ReadmeLayout>
    </Content>
  );
}
