import React from 'react';
import { NavCollapse } from '.';
import { NavLink } from './NavLink';
import { Icon } from 'components/common';

interface IMenu {
  open: boolean;
}

export const Menu: React.FC<IMenu> = ({ open, ...rest }: IMenu) => (
  <NavCollapse data-testid="test-menu" open={open} {...rest}>
    <ul className="flex lg:items-center flex-col lg:flex-row list-none ml-auto">
      <NavLink
        data-testid="test-nav-menu-link"
        href="https://www.linkedin.com/in/albert-moreno/"
        target="_blank"
        rel="noreferrer"
      >
        <Icon name="fab fa-brands fa-linkedin-in" className="text-xl leading-none" />
        &nbsp;My Profile
      </NavLink>
      <NavLink
        data-testid="test-nav-menu-link"
        href="https://github.com/alberto-moreno-sa/sea-word-challenge"
        target="_blank"
        rel="noreferrer"
      >
        <Icon name="fab fa-github" className="text-xl leading-none" />
        &nbsp;Github
      </NavLink>
    </ul>
  </NavCollapse>
);
