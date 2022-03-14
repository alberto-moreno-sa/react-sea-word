import React from 'react';
import { NavBar } from 'components/nav';
import { Footer } from './Footer';

interface ILayout {
  className?: string;
  children?: React.ReactNode;
}

export const Layout: React.FC<ILayout> = ({ className, children, ...rest }: ILayout) => {
  const hasDataTestId = Boolean(rest['data-testid']);
  let dataTestId = 'layout-compoment';

  if (hasDataTestId) {
    dataTestId = rest['data-testid'];
  }

  return (
    <div data-testid={dataTestId}>
      <NavBar />
      <main data-testid="main-content">{children}</main>
      <Footer />
    </div>
  );
};
