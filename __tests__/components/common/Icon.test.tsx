import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { Icon } from 'components/common';

describe('<Icon />', () => {
  afterEach(cleanup);

  test('should be render Icon', () => {
    const { getByTestId } = render(
      <Icon name="fab fa-brands fa-linkedin-in" data-testid="test-icon" />
    );

    const actionToast = getByTestId('test-icon');
    expect(actionToast).toBeInTheDocument();
  });
});
