import React from 'react';
import Ripple from 'material-ripple-effects';
interface INavLink
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  children?: React.ReactNode;
}

export const NavLink: React.FC<INavLink> = ({ children = null, ...rest }: INavLink) => {
  const ripple = new Ripple();

  const onMouseUp = (e: any): void => {
    ripple.create(e, 'light');
  };

  return (
    <a
      onMouseUp={onMouseUp}
      className="px-5 py-4 flex gap-1 items-center text-xs uppercase font-medium leading text-white rounded-lg"
      {...rest}
    >
      {children}
    </a>
  );
};
