import { MapCoords } from 'store/seaWord';
import {
  findAdjacentTiles,
  generateTableWithCero,
  getCoords,
  getIslandCount,
  getNode,
} from 'utils/WorldHelper';

const map = {
  '1': {
    '4': 'dirt',
    '5': 'dirt',
    '6': 'water',
  },
  '2': {
    '4': 'dirt',
    '5': 'water',
    '6': 'water',
  },
  '3': {
    '1': 'dirt',
    '2': 'dirt',
    '4': 'dirt',
    '5': 'dirt',
    '6': 'water',
  },
  '4': {
    '1': 'dirt',
    '2': 'dirt',
  },
  '5': {
    '4': 'water',
    '5': 'dirt',
  },
  '6': {
    '1': 'dirt',
    '2': 'dirt',
    '4': 'dirt',
    '5': 'dirt',
  },
  '7': {
    '2': 'dirt',
  },
};

describe('WorldHelper', () => {
  describe('generateTableWithCero', () => {
    it('should be generate array of 0', () => {
      const arrayWithCero = generateTableWithCero(5);

      expect(arrayWithCero.length).toBe(5);
    });
  });

  describe('getNode', () => {
    it('should be return null when coodMaps is empty', () => {
      const result = getNode({});

      expect(result).toBeNull();
    });

    it('should be return null when coodMaps when coordX is empty', () => {
      const result = getNode({
        0: {},
      });

      expect(result).toBeNull();
    });

    it('should be return node coords that is no empty or null', () => {
      const result = getNode({
        0: {},
        1: { 1: 'dirt', 2: 'water' },
        2: { 1: 'dirt', 2: 'water' },
      });

      expect(result).toEqual({
        x: 1,
        y: 1,
      });
    });
  });

  describe('getIslandCount', () => {
    it('should be return num island', () => {
      const result = getIslandCount(map as MapCoords);

      expect(result).toBe(5);
    });

    it('should be return 0 when map is empty', () => {
      const result = getIslandCount({} as MapCoords);

      expect(result).toBe(0);
    });

    it('should be return 0 when map has 1 dir', () => {
      const result = getIslandCount({
        '1': {
          '2': 'dirt',
        },
      } as MapCoords);

      expect(result).toBe(0);
    });
  });

  describe('getCoords', () => {
    it('should be return null when there are not adjacentCount dirt', () => {
      const currentMap = {
        '1': {
          '2': 'dirt',
        },
      } as MapCoords;
      const coord = {
        x: 1,
        y: 2,
      };

      const resultDown = getCoords('down', coord, currentMap);
      const resultLeft = getCoords('left', coord, currentMap);
      const resultRight = getCoords('right', coord, currentMap);
      const resultUp = getCoords('up', coord, currentMap);

      expect(resultDown).toBeNull();
      expect(resultLeft).toBeNull();
      expect(resultRight).toBeNull();
      expect(resultUp).toBeNull();
    });

    it('should be return result when there are in the up an adjacentCount dirt', () => {
      const currentMap = {
        '1': {
          '2': 'dirt',
        },
        '2': {
          '2': 'dirt',
        },
      } as MapCoords;
      const coord = {
        x: 1,
        y: 2,
      };

      const resultUp = getCoords('up', coord, currentMap);
      expect(resultUp).toBeDefined();
    });

    it('should be return result when there are in the up an adjacentCount dirt', () => {
      const currentMap = {
        '1': {
          '2': 'dirt',
          '3': 'dirt',
        },
        '2': {
          '2': 'dirt',
        },
      } as MapCoords;
      const coord = {
        x: 1,
        y: 2,
      };

      const resultDown = getCoords('down', coord, currentMap);
      const resultUp = getCoords('up', coord, currentMap);

      expect(resultDown).toBeDefined();
      expect(resultUp).toBeDefined();
    });
  });

  describe('findAdjacentTiles', () => {
    it('should be return 0 when there are not adjacentCount dirt', () => {
      const currentMap = {
        '1': {
          '2': 'dirt',
        },
      } as MapCoords;
      const coord = {
        x: 1,
        y: 2,
      };

      const result = findAdjacentTiles(coord, currentMap);
      expect(result).toBe(0);
    });

    it('should be return result when there are 1 adjacent dirt', () => {
      const currentMap = {
        '1': {
          '2': 'dirt',
        },
        '2': {
          '2': 'dirt',
        },
      } as MapCoords;
      const coord = {
        x: 1,
        y: 2,
      };

      const result = findAdjacentTiles(coord, currentMap);
      expect(result).toBe(1);
    });

    it('should be return result when there are 2 adjacent dirt', () => {
      const currentMap = {
        '1': {
          '2': 'dirt',
          '3': 'dirt',
        },
        '2': {
          '2': 'dirt',
        },
      } as MapCoords;
      const coord = {
        x: 1,
        y: 2,
      };

      const result = findAdjacentTiles(coord, currentMap);
      expect(result).toBe(2);
    });

    it('should be return result when there are 3 adjacent dirt', () => {
      const currentMap = {
        '0': {
          '2': 'dirt',
        },
        '1': {
          '2': 'dirt',
          '3': 'dirt',
        },
        '2': {
          '2': 'dirt',
        },
      } as MapCoords;
      const coord = {
        x: 1,
        y: 2,
      };

      const result = findAdjacentTiles(coord, currentMap);
      expect(result).toBe(3);
    });

    it('should be return result when there are 4 adjacent dirt', () => {
      const currentMap = {
        '0': {
          '2': 'dirt',
        },
        '1': {
          '1': 'dirt',
          '2': 'dirt',
          '3': 'dirt',
        },
        '2': {
          '2': 'dirt',
        },
      } as MapCoords;
      const coord = {
        x: 1,
        y: 2,
      };

      const result = findAdjacentTiles(coord, currentMap);
      expect(result).toBe(4);
    });
  });
});
