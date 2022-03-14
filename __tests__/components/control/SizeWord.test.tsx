import React from 'react';
import { cleanup, render, fireEvent } from 'testUtils';
import { SizeWord } from 'components/control';
import { InitialState } from 'store/store';

describe('<SizeWord />', () => {
  afterEach(cleanup);

  test('should be render sizeWord Control', () => {
    const { getByTestId } = render(<SizeWord />, {
      initialState: InitialState,
    });

    const sizeWordsComponent = getByTestId('test-size-word');
    const inputRangeX = getByTestId('test-size-word-range-x');
    const inputRangeY = getByTestId('test-size-word-range-y');

    expect(sizeWordsComponent).toBeInTheDocument();
    expect(inputRangeX).toBeInTheDocument();
    expect(inputRangeY).toBeInTheDocument();
  });

  test('should be render NavCollapse', () => {
    const { getByTestId, ...rest } = render(<SizeWord />, {
      initialState: InitialState,
    });

    const inputRangeX = getByTestId('test-size-word-range-x-input');
    const inputRangeY = getByTestId('test-size-word-range-y-input');

    fireEvent.change(inputRangeX, { target: { value: 23 } });
    inputRangeX.dispatchEvent(new Event('change', { bubbles: true }));

    fireEvent.change(inputRangeY, { target: { value: 25 } });
    inputRangeY.dispatchEvent(new Event('change', { bubbles: true }));

    expect(inputRangeX.value).toBe('23');
    expect(inputRangeY.value).toBe('25');
  });
});
