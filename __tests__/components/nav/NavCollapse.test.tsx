import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { NavCollapse } from 'components/nav';

describe('<NavCollapse />', () => {
  afterEach(cleanup);

  test('should be render NavCollapse', () => {
    const { getByTestId } = render(<NavCollapse data-testid="test-nav-collapse" />);

    const navCollapse = getByTestId('test-nav-collapse');
    expect(navCollapse).toBeInTheDocument();
  });

  test('should be apply hidden style when open is false or missing', () => {
    const { getByTestId } = render(<NavCollapse data-testid="test-nav-collapse" />);

    const navCollapse = getByTestId('test-nav-collapse');
    expect(navCollapse).toBeInTheDocument();
    expect(navCollapse.classList.contains('hidden')).toBeTruthy();
  });

  test('should be apply block style when open true', () => {
    const { getByTestId } = render(<NavCollapse open={true} data-testid="test-nav-collapse" />);

    const navCollapse = getByTestId('test-nav-collapse');
    expect(navCollapse).toBeInTheDocument();
    expect(navCollapse.classList.contains('block')).toBeTruthy();
  });
});
