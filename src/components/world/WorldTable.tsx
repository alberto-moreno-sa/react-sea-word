import React from 'react';
import { useDispatch } from 'react-redux';
import { switchCellAction } from 'store/seaWord';
import { useSelector } from 'store/store';
import { generateTableWithCero, getAssetType } from 'utils';
import { AssetType } from './Asset';
import { ColumnWord } from './ColumnWord';

export const WorldTable: React.FC = () => {
  const dispatch = useDispatch();
  const worldSize = useSelector(state => state.seaWorld.world);
  const mapWord = useSelector(state => state.seaWorld.mapWord);
  const colums = generateTableWithCero(worldSize.y);

  const handleOnSwich = (itemCoord: { x: number; y: number }): void => {
    const type = getAssetType<AssetType>(mapWord, [itemCoord.x, itemCoord.y]) ?? AssetType.water;

    dispatch(
      switchCellAction({
        ...itemCoord,
        type: type === AssetType.water ? AssetType.dirt : AssetType.water,
      })
    );
  };

  const grid = colums.map((item, column) => (
    <ColumnWord
      key={column}
      column={column}
      rows={worldSize.x}
      mapCoords={mapWord}
      onSwitch={value => {
        handleOnSwich({ x: value, y: column });
      }}
    />
  ));

  return (
    <table className="w-full h-full" data-testid="sea-word-grid">
      <tbody>{grid}</tbody>
    </table>
  );
};
