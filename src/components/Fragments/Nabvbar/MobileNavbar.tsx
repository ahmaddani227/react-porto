import React, { useEffect } from "react";
import { RiCloseFill, RiMenuLine } from "react-icons/ri";

function MobileNavbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const hendleOpen = () => setIsOpen(!isOpen);

  useEffect(() => {
    const body = document.body;

    if (isOpen) {
      body.style.overflow = "hidden";
    }
  }, []);

  return (
    <header className="border-b border-midnight-slate lg:hidden">
      <nav className="flex justify-between w-full h-[63px] relative">
        <div className="flex items-center justify-between w-full h-full p-fluid text-slate-muted">
          <a
            href="#"
            className="flex items-center h-full text-sm transition-all "
          >
            ahmad dani
          </a>

          <button className="inline-block" onClick={hendleOpen}>
            {isOpen ? (
              <RiCloseFill className="w-7 h-7" />
            ) : (
              <RiMenuLine className="w-7 h-7" />
            )}
          </button>
        </div>

        {isOpen && (
          <div className="absolute z-50 w-full min-h-screen top-16 bg-midnight-blue">
            <ul className="flex flex-col">
              <li className="py-4 border-b px-fluid border-midnight-slate hover:bg-midnight-slate">
                <a
                  href="#"
                  className="flex items-center h-full text-base text-white "
                >
                  _hello
                </a>
              </li>
              <li className="py-4 border-b px-fluid border-midnight-slate hover:bg-midnight-slate">
                <a
                  href="#"
                  className="flex items-center h-full text-base text-slate-muted "
                >
                  _about-me
                </a>
              </li>
              <li className="py-4 border-b px-fluid border-midnight-slate hover:bg-midnight-slate">
                <a
                  href="#"
                  className="flex items-center h-full text-base text-slate-muted "
                >
                  _projects
                </a>
              </li>
              <li className="py-4 border-b px-fluid border-midnight-slate hover:bg-midnight-slate">
                <a
                  href="#"
                  className="flex items-center h-full text-base text-slate-muted "
                >
                  _contact-me
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

export default MobileNavbar;
