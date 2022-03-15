import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { Asset, AssetType } from 'components/world';

describe('<Asset />', () => {
  afterEach(cleanup);

  test('should be render Asset with watter asset', () => {
    const onClick = jest.fn();

    const { getByTestId } = render(<Asset onClick={onClick} type={AssetType.water} />);

    const assetComponent = getByTestId('test-asset-bg-water-texture');
    expect(assetComponent).toBeInTheDocument();
    expect(assetComponent.classList.contains('bg-water-texture')).toBeTruthy();
  });

  test('should be render Asset with dir asset', () => {
    const onClick = jest.fn();

    const { getByTestId } = render(<Asset onClick={onClick} type={AssetType.dirt} />);

    const assetComponent = getByTestId('test-asset-bg-dirt-texture');
    expect(assetComponent).toBeInTheDocument();
    expect(assetComponent.classList.contains('bg-dirt-texture')).toBeTruthy();
  });
});
