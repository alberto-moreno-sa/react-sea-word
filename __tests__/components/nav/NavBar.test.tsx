import React from 'react';
import { cleanup, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NavBar } from 'components/nav';

describe('<NavBar />', () => {
  afterEach(cleanup);

  test('should be render NavCollapse', () => {
    const { getByTestId } = render(<NavBar />);
    const navBar = getByTestId('nav-bar');
    const navBarLink = getByTestId('nav-bar-link');
    const navToogler = getByTestId('test-nav-toggler');
    const menu = getByTestId('test-menu');

    userEvent.click(navToogler);

    expect(navBar).toBeInTheDocument();
    expect(navBarLink).toBeInTheDocument();
    expect(menu).toBeInTheDocument();
    expect(navToogler).toBeInTheDocument();
    expect(menu.classList.contains('block')).toBeTruthy();
  });
});
