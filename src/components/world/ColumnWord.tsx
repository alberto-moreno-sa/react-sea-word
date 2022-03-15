import React from 'react';
import { MapCoords } from 'store/seaWord';
import { generateTableWithCero, getAssetType } from 'utils';
import { Asset, AssetType } from './Asset';

interface IColumn {
  onSwitch: (row: number) => void;
  mapCoords: MapCoords;
  column: number;
  rows: number;
}

export const ColumnWord: React.FC<IColumn> = ({
  column = 0,
  rows = 0,
  mapCoords = {},
  onSwitch = () => null,
}: IColumn) => {
  const rowsList = generateTableWithCero(rows);

  return (
    <tr data-testid={`sea-word-grid-colum-${column}`}>
      {rowsList.map((elem, row) => {
        const type = getAssetType<AssetType>(mapCoords, [row, column]);

        return (
          <td role="row" key={row} className="p-px" data-testid={`sea-word-grid-row-${row}`}>
            <Asset
              type={type}
              onClick={() => {
                onSwitch(row);
              }}
            />
          </td>
        );
      })}
    </tr>
  );
};
