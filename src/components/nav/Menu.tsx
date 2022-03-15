import React from 'react';
import { NavCollapse } from '.';
import { NavLink } from './NavLink';
import { Icon } from 'components/common';
import { useTranslation } from 'services/TranslationService';
interface IMenu {
  open: boolean;
}

export const Menu: React.FC<IMenu> = ({ open, ...rest }: IMenu) => {
  const { t } = useTranslation('common');

  return (
    <NavCollapse data-testid="test-menu" open={open} {...rest}>
      <ul className="flex lg:items-center flex-col lg:flex-row list-none ml-auto">
        <NavLink
          data-testid="test-nav-menu-link"
          href="https://www.linkedin.com/in/albert-moreno/"
          target="_blank"
          rel="noreferrer"
        >
          <Icon name="fab fa-brands fa-linkedin-in" className="text-xl leading-none" />
          &nbsp;{t('menu.profile')}
        </NavLink>
        <NavLink
          data-testid="test-nav-menu-link"
          href="https://github.com/alberto-moreno-sa/sea-word-challenge"
          target="_blank"
          rel="noreferrer"
        >
          <Icon name="fab fa-github" className="text-xl leading-none" />
          &nbsp;{t('menu.github')}
        </NavLink>
      </ul>
    </NavCollapse>
  );
};
