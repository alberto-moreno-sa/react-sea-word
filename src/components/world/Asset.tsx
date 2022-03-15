import React from 'react';
import styled from 'styles/components/world/Asset.module.css';

export enum AssetType {
  dirt = 'dirt',
  water = 'water',
}

interface IAsset {
  type: AssetType.dirt | AssetType.water;
  onClick?: () => void;
}

export const Asset: React.FC<IAsset> = ({
  type = AssetType.water,
  onClick = () => null,
}: IAsset) => {
  const texture = type === AssetType.dirt ? 'bg-dirt-texture' : 'bg-water-texture';

  const handleOnClick = (e): void => {
    e.preventDefault();

    if (typeof onClick === 'function') {
      onClick();
    }
  };

  return (
    <div
      data-testid={`test-asset-${texture}`}
      className={`${texture} bg-repeat rounded-sm h-full w-full cursor-pointer bg-[length:200px_200px] transition ease-in-out duration-[0.2s] z-[1] shadow-[2px_2px_2px_1px_rgba(0,0,0,0.3)] min-w-[50px] min-h-[50px] ${styled.asset}`}
      onClick={handleOnClick}
    ></div>
  );
};
