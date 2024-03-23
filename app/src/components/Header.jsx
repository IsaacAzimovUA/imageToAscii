import React from 'react';
import Logo from '../assets/logo.svg';
import { Button } from '../components';
const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
      <div className="px-4">
        <div className="flex items-center justify-between">
          <div className="flex shrink-0">
            <a aria-current="page" className="flex items-center" href="/">
              <img
                className="h-9 w-auto"
                src={Logo}
                no-referrer="true"
                alt="asciify"
                width="100"
                height="50"
              />
            </a>
          </div>
          <div className="flex items-center justify-end gap-3">
            <Button
              style={
                'bg-blue-600 text-white hover:bg-blue-500 focus-visible:outline-blue-600'
              }
              role="link"
              href="https://github.com/IsaacAzimovUA/imageToAscii"
              target="_blank"
              type="link"
            >
              GitHub
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
