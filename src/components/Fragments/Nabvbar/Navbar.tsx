function Navbar() {
  return (
    <header className="hidden border-b border-midnight-slate lg:block">
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
  );
}

export default Navbar;
