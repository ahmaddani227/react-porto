import Content from "../../../../components/Layouts/Ide/Content";
import ReadmeLayout from "../../../../components/Layouts/ReadmeLayout";
import { SkillCardType, softSkills } from "../../../../constants/skills";

const SkillCard = ({ Svg, label, style }: SkillCardType) => {
  return (
    <div
      className={`flex flex-col items-center justify-center transition-all duration-300 border h-28 rounded-xl hover:shadow-md ${style.styleParent}`}
    >
      <Svg className={`w-10 h-10 ${style.styleChild}`} />
      <h3 className="mt-3 text-sm font-medium">{label}</h3>
    </div>
  );
};

export default function SoftSkills() {
  return (
    <Content>
      <ReadmeLayout>
        <h1 className="my-5 text-xl font-semibold text-center">Soft Skills</h1>

        <div className="grid grid-cols-2 gap-6 mb-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {softSkills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </ReadmeLayout>
    </Content>
  );
}
