import React from 'react';
import { cleanup, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NavbarToggler } from 'components/nav';

describe('<NavbarToggler />', () => {
  afterEach(cleanup);

  test('should be render NavCollapse', () => {
    const onClick = jest.fn();

    const { getByTestId } = render(
      <NavbarToggler onClick={onClick} data-testid="test-nav-toggler" />
    );

    const navCollapse = getByTestId('test-nav-toggler');
    userEvent.click(navCollapse);
    expect(navCollapse).toBeInTheDocument();
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
