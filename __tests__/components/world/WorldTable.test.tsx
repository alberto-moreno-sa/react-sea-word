import React from 'react';
import { cleanup, fireEvent, render } from 'testUtils';
import { AssetType, WorldTable } from 'components/world';
import { InitialState } from 'store/store';

describe('<WorldTable />', () => {
  afterEach(cleanup);

  test('should be render WorldTable', () => {
    const { getByTestId, debug } = render(<WorldTable />, {
      initialState: {
        seaWorld: {
          ...InitialState.seaWorld,
          world: {
            x: 10,
            y: 10,
          },
        },
      },
    });

    const tableComponent = getByTestId('sea-word-grid');
    const trComponents = tableComponent.getElementsByTagName('tr');
    const tdComponents = tableComponent.getElementsByTagName('td');
    expect(tableComponent).toBeInTheDocument();
    expect(tdComponents.length).toBe(100);
    expect(trComponents.length).toBe(10);
  });

  test('should be switch to dir asstet when user click', () => {
    const { getByTestId } = render(<WorldTable />, {
      initialState: {
        seaWorld: {
          ...InitialState.seaWorld,
          world: {
            x: 10,
            y: 10,
          },
        },
      },
    });

    const columComponent = getByTestId('sea-word-grid-colum-5');
    const cell = columComponent.querySelector('td[data-testid="sea-word-grid-row-7"]');
    const result = cell.querySelector('div');
    fireEvent.click(result);

    expect(result.classList.contains('bg-dirt-texture')).toBeTruthy();
  });

  test('should be switch to dir asstet when user click', () => {
    const { queryAllByTestId } = render(<WorldTable />, {
      initialState: {
        seaWorld: {
          mapWord: {
            '0': {
              '0': 'dirt',
              '1': 'dirt',
              '2': 'water',
              '3': 'water',
            },
            '1': {
              '0': 'dirt',
              '1': 'dirt',
              '2': 'water',
              '3': 'water',
            },
            '2': {
              '0': 'water',
              '1': 'water',
              '3': 'dirt',
              '4': 'dirt',
            },
            '3': {
              '0': 'water',
              '1': 'water',
              '3': 'dirt',
              '4': 'dirt',
            },
            '6': {
              '3': 'dirt',
              '4': 'dirt',
            },
            '7': {
              '3': 'dirt',
              '4': 'dirt',
            },
          },
          world: {
            x: 10,
            y: 10,
          },
        },
      },
    });

    const columComponent = queryAllByTestId('test-asset-bg-dirt-texture');
    expect(columComponent.length).toBe(12);
  });
});
