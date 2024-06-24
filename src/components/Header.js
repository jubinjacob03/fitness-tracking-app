import React, { useState, useEffect, useRef } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <header class="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-amber-600 text-sm py-3 sm:py-0">
        <nav class="relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <div class="flex items-center justify-between">
            <a class="flex-none text-xl font-semibold text-white" href="/">
              Fit-Help
            </a>
            <div class="sm:hidden">
              <button
                type="button"
                class="size-9 flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-white/20 text-white hover:border-white/40 disabled:opacity-50 disabled:pointer-events-none"
                aria-controls="navbar-collapse-with-animation"
                onClick={toggleMenu}
              >
                <svg
                  class="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
                <svg
                  class="hidden flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div class="hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-end py-2 md:py-0 sm:ps-7">
              <a
                class="py-3 ps-px sm:px-3 font-medium text-white"
                href="/"
                aria-current="page"
              >
                Home
              </a>
              <a
                class="py-3 ps-px sm:px-3 font-medium text-white/80 hover:text-white"
                href="/workout"
              >
                Workout Log
              </a>
              <a
                class="py-3 ps-px sm:px-3 font-medium text-white/80 hover:text-white"
                href="/progress"
              >
                Progress
              </a>
            </div>
          </div>
          {isOpen && (
            <div
              ref={navRef}
              class="md:hidden absolute top-0 right-0 w-1/2 h-full mt-8"
            >
              <div class="flex flex-col sm:flex-row sm:items-center sm:justify-end py-2 px-3 md:py-0 sm:ps-7 bg-amber-600 rounded">
                <a
                  class="py-3 ps-px sm:px-3 font-medium text-white"
                  href="/"
                  aria-current="page"
                >
                  Home
                </a>
                <a
                  class="py-3 ps-px sm:px-3 font-medium text-white/80 hover:text-white"
                  href="/workout"
                >
                  Workout Log
                </a>
                <a
                  class="py-3 ps-px sm:px-3 font-medium text-white/80 hover:text-white"
                  href="/progress"
                >
                  Progress
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>
    </div>
  );
};

export default Header;
