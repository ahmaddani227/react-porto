import { Suspense } from "react";
import Content from "../../../components/Layouts/Ide/Content";
import Contributions from "./Contributions";
import Codewars from "./Codewars";

const Dashboard = () => {
  return (
    <Content>
      <div className="px-6 py-5">
        <div className="px-5 py-3.5 border rounded-md border-midnight-slate">
          <h5 className="mb-4 text-xs font-medium">ahmaddani / README.md</h5>
          <h1 className="mb-10 text-3xl font-semibold text-center">
            Hi, I'm Dani
          </h1>
          <Suspense fallback={<div>Loading...</div>}>
            <Contributions />
          </Suspense>
          <Codewars />
        </div>
      </div>
    </Content>
  );
};

export default Dashboard;
