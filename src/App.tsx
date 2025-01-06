import {
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiTiktokFill,
} from "react-icons/ri";
import BoltDownLeft from "/Icons/bolt-down-left.svg";
import BoltDownRight from "/Icons/bolt-down-right.svg";
import BoltUpLeft from "/Icons/bolt-up-left.svg";
import BoltUpRight from "/Icons/bolt-up-right.svg";

function App() {
  return (
    <div className="border rounded-lg border-midnight-slate bg-midnight-blue">
      <header className="border-b border-midnight-slate">
        <nav className="flex justify-between w-full h-[45px]">
          <div className="flex h-full text-slate-muted">
            <a href="#" className="nav-link min-w-[275px]">
              ahmad dani
            </a>
            <a href="#" className="nav-link nav-active">
              _hello
            </a>
            <a href="#" className="nav-link">
              _about-me
            </a>
            <a href="#" className="nav-link">
              _projects
            </a>
          </div>
          <a
            href="#"
            className="flex items-center h-full px-6 text-sm transition-all border-l text-slate-muted border-midnight-slate hover:bg-midnight-slate hover:text-white"
          >
            _contact-me
          </a>
        </nav>
      </header>

      <main className="lg:pl-[14.5rem]">
        <section className="container">
          <div className="flex min-h-[calc(100vh-154px)] items-center justify-between">
            <div className="w-1/2">
              <h3 className="mb-4 text-lg">Hi all, I am</h3>
              <h1 className="mb-3 text-6xl font-normal">Ahmad Dani</h1>
              <h2 className="text-3xl text-periwinkle-blue">
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
            <div className="flex items-end w-1/2 ">
              <div className=" circle-blur-green" />
              <div className="circle-blur-blue" />
              <div className=" card-game">
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

      <footer className="border-t border-midnight-slate">
        <div className="flex justify-between w-full h-[40px]">
          <div className="flex h-full text-slate-muted">
            <h1 className="flex items-center h-full px-6 text-sm border-r text-slate-muted border-midnight-slate">
              find me in:
            </h1>
            <a
              href="#"
              className="flex items-center h-full px-3 text-sm transition border-r border-midnight-slate group hover:bg-midnight-slate"
            >
              <RiInstagramFill className="w-6 h-6 fill-midnight-slate group-hover:fill-slate-muted" />
            </a>
            <a
              href="#"
              className="flex items-center h-full px-3 text-sm transition border-r border-midnight-slate group hover:bg-midnight-slate"
            >
              <RiTiktokFill className="w-6 h-6 fill-midnight-slate group-hover:fill-slate-muted" />
            </a>
            <a
              href="#"
              className="flex items-center h-full px-3 text-sm transition border-r border-midnight-slate group hover:bg-midnight-slate"
            >
              <RiLinkedinFill className="w-6 h-6 fill-midnight-slate group-hover:fill-slate-muted" />
            </a>
          </div>
          <a
            href="#"
            target="_blank"
            className="flex items-center h-full px-6 text-sm transition-all border-l hover:bg-midnight-slate text-slate-muted border-midnight-slate"
          >
            @ahmaddani227
            <span className="ml-1">
              <RiGithubFill className="w-6 h-6 fill-slate-muted" />
            </span>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
