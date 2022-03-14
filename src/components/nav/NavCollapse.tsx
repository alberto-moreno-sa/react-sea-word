import React from 'react';

interface INavCollapse {
  open?: boolean;
  children?: React.ReactNode;
}

export const NavCollapse: React.FC<INavCollapse> = ({
  open = false,
  children = null,
  ...rest
}: INavCollapse) => (
  <div className={`lg:flex flex-grow items-center ${open ? 'block' : 'hidden'}`} {...rest}>
    {children}
  </div>
);
