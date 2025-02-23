import Profile from "./Profile";
import Snake from "./Snake";

interface CircleBlurProps {
  classname: string;
}

const CircleBlur = ({ classname }: CircleBlurProps) => {
  return <div className={classname} />;
};

function Home() {
  return (
    <section id="home" className="lg:pl-[16rem] h-full flex items-center">
      <CircleBlur classname="circle-blur-green" />
      <CircleBlur classname="circle-blur-blue" />
      <div className="w-full h-auto p-fluid lg:px-fluid">
        <div className="flex items-center justify-between h-full">
          <Profile />
          <Snake />
        </div>
      </div>
    </section>
  );
}

export default Home;
