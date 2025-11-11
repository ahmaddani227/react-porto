import Profile from "./Profile";
import Snake from "./Snake";

const CircleBlur = ({ classname }: { classname: string }) => {
  return <div className={classname} />;
};

function Home() {
  return (
    <section
      id="home"
      className="lg:pl-[16rem] h-full flex flex-1 items-center"
    >
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
