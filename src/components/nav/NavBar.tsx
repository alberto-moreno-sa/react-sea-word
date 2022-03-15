import React, { useState } from 'react';
import Link from 'next/link';
import { NavbarToggler } from '.';
import { Menu } from './Menu';
import { useTranslation } from 'services/TranslationService';
import { Modal } from 'components/common';

export const NavBar: React.FC = () => {
  const { t } = useTranslation('common');
  const [openNavbar, setOpenNavbar] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = (): void => {
    setIsOpen(false);
  };

  const openModal = (): void => {
    setIsOpen(true);
  };

  return (
    <nav
      data-testid="nav-bar"
      className="flex flex-wrap items-center justify-between py-2.5 px-3 bg-light-blue-500"
    >
      <div className="container max-w-7xl px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link href="/">
            <a data-testid="nav-bar-link">
              <span className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white">
                {t('title')}
              </span>
            </a>
          </Link>
          <button
            type="button"
            onClick={openModal}
            className="px-4 py-2 text-sm font-medium text-white bg-light-blue-500 rounded-md hover:bg-opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            {t('instructions.modal')}
          </button>
          <Modal isOpen={isOpen} closeModal={closeModal} />
          <NavbarToggler
            data-testid="test-nav-toggler"
            onClick={() => setOpenNavbar(!openNavbar)}
          />
        </div>
        <Menu open={openNavbar} />
      </div>
    </nav>
  );
};
