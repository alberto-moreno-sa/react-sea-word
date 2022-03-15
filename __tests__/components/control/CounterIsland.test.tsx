import React from 'react';
import { cleanup, render } from 'testUtils';
import { CounterIsland } from 'components/control';

describe('<CounterIsland />', () => {
  afterEach(cleanup);

  const seaWord = {
    world: {
      x: 8,
      y: 8,
    },
    mapWord: {
      '1': {
        '4': 'dirt',
        '5': 'dirt',
        '6': 'water',
      },
      '2': {
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
        '4': 'dirt',
        '5': 'dirt',
      },
      '6': {
        '4': 'dirt',
        '5': 'dirt',
      },
    },
  };

  test('should be render counter with a value of 4', () => {
    const { getByTestId } = render(<CounterIsland />, {
      initialState: {
        seaWorld: seaWord,
      },
    });

    const columComponent = getByTestId('test-size-word-counter');
    const numIsland = getByTestId('test-size-word-island-count');
    expect(numIsland.innerHTML).toBe('4');
    expect(columComponent).toBeInTheDocument();
  });

  test('should be render counter with a value of 5 when theare incloplete island', () => {
    const { getByTestId } = render(<CounterIsland />, {
      initialState: {
        seaWorld: {
          ...seaWord,
          mapWord: {
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
          },
        },
      },
    });

    const columComponent = getByTestId('test-size-word-counter');
    const numIsland = getByTestId('test-size-word-island-count');
    expect(numIsland.innerHTML).toBe('5');
    expect(columComponent).toBeInTheDocument();
  });
});
