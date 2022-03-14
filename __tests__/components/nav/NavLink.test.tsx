import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { NavLink } from 'components/nav';

describe('<NavLink />', () => {
  afterEach(cleanup);

  test('should be render NavLink', () => {
    const { getByTestId } = render(<NavLink data-testid="test-nav-link" />);

    const navLink = getByTestId('test-nav-link');
    expect(navLink).toBeInTheDocument();
  });
});
