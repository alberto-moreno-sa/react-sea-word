import { MapCoords } from 'store/seaWord';
import { mapValues, pickBy, identity } from 'lodash';

export const generateTableWithCero = (quantity: number): number[] => {
  return Array(quantity).fill(0);
};

export function getAssetType<T>(mapCoods: MapCoords, path: number[] | string, value?: string): T {
  const pathArray = Array.isArray(path) ? path : path.split('.').filter(key => key);

  const pathArrayFlat = pathArray.flatMap(part =>
    typeof part === 'string' ? part.split('.') : part
  );

  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  return pathArrayFlat.reduce((obj, key) => obj?.[key], mapCoods) || value;
}

export const prunedInvalidCell = (
  mapCoords: MapCoords,
  coods: { x: number; y: number }
): MapCoords => {
  return pickBy(
    mapValues(mapCoords, (ycoordVal, x) => {
      if (parseInt(x) > coods.x - 1) return undefined;
      return pickBy(
        mapValues(ycoordVal, (type, y) => (parseInt(y) <= coods.y - 1 ? type : undefined)),
        identity
      );
    }),
    identity
  );
};
