import BoltDownLeft from "/Icons/bolt-down-left.svg";
import BoltDownRight from "/Icons/bolt-down-right.svg";
import BoltUpLeft from "/Icons/bolt-up-left.svg";
import BoltUpRight from "/Icons/bolt-up-right.svg";
import Navbar from "./components/Fragments/Nabvbar/index.tsx";
import Footer from "./components/Fragments/Footer/index.tsx";

function App() {
  return (
    <div className="border lg:rounded-lg border-midnight-slate bg-midnight-blue">
      <Navbar />

      <main className="lg:pl-[16rem]">
        <section className="p-fluid">
          <div className=" circle-blur-green" />
          <div className=" circle-blur-blue" />
          <div className="flex min-h-screen lg:min-h-[calc(100vh-197px)] items-center justify-between">
            <div className="w-full lg:w-1/2">
              <h3 className="mb-4 text-lg">Hi all, I am</h3>
              <h1 className="mb-3 text-6xl font-normal">Ahmad Dani</h1>
              <h2 className="text-3xl text-mint-green lg:text-periwinkle-blue">
                &gt; Frontend Developer
              </h2>

              <div className="pt-16">
                <p className="mb-2 text-sm text-slate-muted">
                  // complete the game to continue
                </p>
                <p className="mb-2 text-sm text-slate-muted">
                  // you can also see it my Github page
                </p>
                <p className="text-sm font-medium">
                  <span className="text-periwinkle-blue">const</span>{" "}
                  <span className="text-mint-green">githubLink</span> ={" "}
                  <a
                    href="#"
                    target="_blank"
                    className="underline underline-offset-4 text-peach"
                  >
                    &quot;https://github.com/ahmaddani227&quot;
                  </a>
                </p>
              </div>
            </div>
            <div className="items-end hidden w-1/2 lg:flex">
              <div className="card-game">
                <img
                  src={BoltUpLeft}
                  alt="Icon Bolt"
                  className="absolute top-2 left-2"
                />
                <img
                  src={BoltUpRight}
                  alt="Icon Bolt"
                  className="absolute top-2 right-2"
                />
                <img
                  src={BoltDownLeft}
                  alt="Icon Bolt"
                  className="absolute bottom-2 left-2"
                />
                <img
                  src={BoltDownRight}
                  alt="Icon Bolt"
                  className="absolute bottom-2 right-2"
                />
                <h1 className="text-3xl font-semibold text-slate-muted">
                  Coming Soon
                </h1>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
