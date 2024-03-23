import React from 'react';
import Logo from '../assets/logo.svg';

const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
      <div className="px-4">
        <div className="flex items-center justify-between">
          <div className="flex shrink-0">
            <a aria-current="page" className="flex items-center" href="/">
              <img className="h-9 w-auto" src={Logo} />
              <p className="sr-only">Website Title</p>
            </a>
          </div>
          <div className="flex items-center justify-end gap-3">
            <a
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              href="https://github.com/IsaacAzimovUA/imageToAscii"
              target="_blank"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
