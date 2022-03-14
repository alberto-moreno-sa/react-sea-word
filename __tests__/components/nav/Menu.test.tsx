import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { Menu } from 'components/nav';

describe('<Menu />', () => {
  afterEach(cleanup);

  test('should be render Menu', () => {
    const { getByTestId, getAllByTestId } = render(<Menu open data-testid="test-menu" />);

    const navCollapse = getByTestId('test-menu');
    const links = getAllByTestId('test-nav-menu-link');
    expect(navCollapse).toBeInTheDocument();
    expect(links.length).toBe(2);
  });
});
