import Card from "../../components/Fragments/Card";
import Content from "../../components/Fragments/Ide/Content";
import { projects } from "../../constants/projects";

const Projects = () => {
  return (
    <Content>
      <div className="ps-2 pe-8 md:p-16">
        <div className="projects-container">
          {projects.map((project, index) => (
            <Card key={index} data={project} />
          ))}
        </div>
      </div>
    </Content>
  );
};

export default Projects;
