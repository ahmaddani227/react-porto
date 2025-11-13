import Content from "../../../components/Layouts/Ide/Content";
import Contributions from "./Contributions";
import Codewars from "./Codewars";
import ReadmeLayout from "../../../components/Layouts/ReadmeLayout";

const Dashboard = () => {
  return (
    <Content>
      <ReadmeLayout>
        <h1 className="mb-10 text-3xl font-semibold text-center">
          Hi, I'm Dani
        </h1>
        <Contributions />
        <Codewars />
      </ReadmeLayout>
    </Content>
  );
};

export default Dashboard;
