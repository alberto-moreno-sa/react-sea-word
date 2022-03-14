import React from 'react';

interface IIcon {
  className?: string;
  name: string;
}

export const Icon: React.FC<IIcon> = ({ className = '', name = '', ...rest }: IIcon) => {
  return <i data-testid="icon" className={`${name} ${className}`} {...rest} />;
};
