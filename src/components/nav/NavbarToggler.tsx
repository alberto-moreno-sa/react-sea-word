import React from 'react';
import Ripple from 'material-ripple-effects';

interface INavBarToggler {
  onClick?: () => void;
}

export const NavbarToggler: React.FC<INavBarToggler> = ({
  onClick = () => null,
  ...rest
}: INavBarToggler) => {
  const ripple = new Ripple();

  const onMouseUp = (e: any): void => {
    ripple.create(e, 'light');
  };

  return (
    <button
      data-testid="test-nav-toggler"
      onClick={onClick}
      onMouseUp={onMouseUp}
      className="cursor-pointer text-xl leading-none py-1 px-1.5 rounded-full border border-solid border-transparent bg-transparent block lg:hidden outline-none focus:outline-none hover:bg-white hover:bg-opacity-20 transition-all duration-300"
      {...rest}
    >
      <span className="block relative w-6 h-px rounded-sm bg-white" />
      <span className="block relative w-6 h-px rounded-sm bg-white mt-1" />
      <span className="block relative w-6 h-px rounded-sm bg-white mt-1" />
    </button>
  );
};
