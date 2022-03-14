import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';
import { InputRange } from 'components/common';

describe('<InputRange />', () => {
  afterEach(cleanup);

  test('should be render NavCollapse', () => {
    const mockOnChange = jest.fn(data => {
      return data;
    });

    const { getByTestId } = render(
      <InputRange
        id="rangeX"
        name="Range X"
        data-testid="test-size-word-range-x"
        onChange={mockOnChange}
        max={50}
      />
    );

    const rangeComponent = getByTestId('test-size-word-range-x');
    const rangeComponentInput = getByTestId('test-size-word-range-x-input');
    fireEvent.change(rangeComponentInput, { target: { value: 23 } });
    rangeComponentInput.dispatchEvent(new Event('change', { bubbles: true }));

    expect(rangeComponent).toBeInTheDocument();
    expect(rangeComponentInput).toBeInTheDocument();
    expect(rangeComponentInput.value).toBe('23');
    expect(mockOnChange).toBeCalledWith(23);
  });
});
