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
    <main className="lg:pl-[16rem]">
      <section className="p-fluid">
        <CircleBlur classname="circle-blur-green" />
        <CircleBlur classname="circle-blur-blue" />
        <div className="flex min-h-screen lg:min-h-[calc(100vh-197px)] items-center justify-between">
          <Profile />
          <Snake />
        </div>
      </section>
    </main>
  );
}

export default Home;
