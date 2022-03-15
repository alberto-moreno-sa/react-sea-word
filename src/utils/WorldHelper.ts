/* eslint-disable @typescript-eslint/no-dynamic-delete */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { Coords, MapCoords } from 'store/seaWord';
import { mapValues, pickBy, identity, get, isEmpty, cloneDeep } from 'lodash';

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

export const findAdjacentTiles = (coords: Coords, map: MapCoords): number => {
  let adjacentCount = 0;

  const up = getCoords('up', coords, map);
  if (up) {
    adjacentCount++;
    adjacentCount += findAdjacentTiles(up, map);
  }

  const down = getCoords('down', coords, map);
  if (down) {
    adjacentCount++;
    adjacentCount += findAdjacentTiles(down, map);
  }

  const letf = getCoords('left', coords, map);
  if (letf) {
    adjacentCount++;
    adjacentCount += findAdjacentTiles(letf, map);
  }

  const right = getCoords('right', coords, map);
  if (right) {
    adjacentCount++;
    adjacentCount += findAdjacentTiles(right, map);
  }

  return adjacentCount;
};

export const getNode = (coordMap: MapCoords): { x: number; y: number } => {
  if (isEmpty(coordMap)) {
    return null;
  }

  let coordX: string | undefined;
  let isNodeEmpty = false;
  do {
    coordX = Object.keys(coordMap)[0];
    if (!coordX) {
      return null;
    }

    if ((isNodeEmpty = isEmpty(coordMap[coordX]))) {
      delete coordMap[coordX];
    }
  } while (isNodeEmpty);

  const coordY = Object.keys(coordMap[coordX])[0];

  delete coordMap[coordX][coordY];

  return {
    x: parseInt(coordX),
    y: parseInt(coordY),
  };
};

export const getCoords = (
  dir: 'up' | 'down' | 'left' | 'right',
  coord: Coords,
  map: MapCoords
): Coords => {
  const projectedXinDir = coord.x + (dir === 'up' ? -1 : dir === 'down' ? 1 : 0);
  const projectedYinDir = coord.y + (dir === 'left' ? -1 : dir === 'right' ? 1 : 0);

  const data = get(map, [String(projectedXinDir), String(projectedYinDir)]);
  const exists = data !== null && data !== undefined && data === 'dirt';

  if (exists) {
    delete map[coord.x][coord.y];

    return {
      x: projectedXinDir,
      y: projectedYinDir,
    };
  } else return null;
};

export const getIslandCount = (coordMap: MapCoords): number => {
  const map: MapCoords = cloneDeep(coordMap);
  let islandCount = 0;
  let node: { x: number; y: number } | null;
  // eslint-disable-next-line no-unmodified-loop-condition
  while ((node = getNode(map))) {
    const nodeCount = findAdjacentTiles(node, map);

    if (nodeCount > 0) {
      islandCount++;
    }
  }
  return islandCount;
};
