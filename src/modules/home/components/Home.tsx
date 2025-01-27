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
    <section className="lg:pl-[16rem]">
      <div className="p-fluid ">
        <CircleBlur classname="circle-blur-green" />
        <CircleBlur classname="circle-blur-blue" />
        <div className="flex items-center justify-between h-full">
          <Profile />
          <Snake />
        </div>
      </div>
    </section>
  );
}

export default Home;
