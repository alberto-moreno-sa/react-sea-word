import React from 'react';
import { cleanup, prettyDOM, render } from '@testing-library/react';
import { ColumnWord, AssetType } from 'components/world';

describe('<ColumnWord />', () => {
  afterEach(cleanup);

  test('should be render ColumnWord', () => {
    const onClick = jest.fn(data => data);

    const { getByTestId } = render(
      <ColumnWord column={1} rows={2} mapCoords={{}} onSwitch={onClick} />
    );

    const rowComponents = getByTestId('sea-word-grid-colum-1');
    const tdComponents = rowComponents.getElementsByTagName('td');
    expect(tdComponents.length).toBe(2);
    expect(rowComponents).toBeInTheDocument();
  });

  test('should be render ColumnWord and set dir asset', () => {
    const onClick = jest.fn(data => data);

    const { queryAllByTestId } = render(
      <ColumnWord
        column={1}
        rows={2}
        mapCoords={{
          1: { '1': AssetType.dirt },
        }}
        onSwitch={onClick}
      />
    );

    const rowComponents = queryAllByTestId('test-asset-bg-dirt-texture');
    expect(rowComponents.length).toBe(1);
  });

  test('should be render ColumnWord and set a dir asset', () => {
    const onClick = jest.fn(data => data);

    const { queryAllByTestId, debug } = render(
      <ColumnWord
        column={1}
        rows={2}
        mapCoords={{
          1: { '0': AssetType.dirt, '1': AssetType.dirt },
        }}
        onSwitch={onClick}
      />
    );

    const rowComponents = queryAllByTestId('test-asset-bg-dirt-texture');
    expect(rowComponents.length).toBe(1);
  });
});
