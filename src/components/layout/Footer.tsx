import { Icon } from 'components/common';
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer data-tesid="footer" className="relative pt-8 pb-6">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap text-center lg:text-left pt-6">
          <div className="w-full lg:w-6/12 px-4">
            <h1 className="text-2xl font-serif font-bold leading-normal mt-0 mb-2">Sea Word</h1>
            <p className="text-lg font-light leading-relaxed mt-6 mb-4" style={{ marginTop: '0' }}>
              Small Sea word where you cnat create island.
            </p>
            <div className="flex gap-2 mt-6 md:justify-start md:mb-0 mb-8 justify-center">
              <a
                href="https://github.com/alberto-moreno-sa/sea-word-challenge"
                className="grid place-items-center bg-white text-gray-900 shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="fab fa-github" className="text-xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/albert-moreno/"
                className="grid place-items-center bg-white text-gray-900 shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="fab fa-brands fa-linkedin-in text-xl" />
              </a>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-gray-700 font-medium py-1">
              Copyright © {new Date().getFullYear()} by{' '}
              <a
                href="https://github.com/alberto-moreno-sa"
                className="text-gray-700 hover:text-gray-900 transition-all"
              >
                Alberto Moreno
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
