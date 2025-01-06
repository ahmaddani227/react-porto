import {
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiTiktokFill,
} from "react-icons/ri";

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
            className="flex items-center h-full px-6 text-sm border-l text-slate-muted border-midnight-slate"
          >
            _contact-me
          </a>
        </nav>
      </header>

      <main className="min-h-[calc(100vh-154px)]">
        <section className="container">
          <h1>home section</h1>
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
