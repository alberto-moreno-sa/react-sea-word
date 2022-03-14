import React, { useRef } from 'react';

interface IInputRange {
  id: string;
  max: number;
  value?: number;
  name: string;
  onChange: (value: number) => void;
}

export const InputRange: React.FC<IInputRange> = ({
  id = '',
  max = 50,
  name = '',
  value,
  onChange = null,
  ...rest
}: IInputRange) => {
  const maxValRef = useRef(max);
  const hasDataTestId = Boolean(rest['data-testid']);
  let dataTestId = 'input-range-compoment';

  if (hasDataTestId) {
    dataTestId = rest['data-testid'];
  }

  return (
    <div data-testid={dataTestId} className="flex items-baseline p-3 w-full">
      <label className="cursor-pointer mr-3 " htmlFor={id}>
        {name}
      </label>
      <div className="grow">
        <input
          type="range"
          id={id}
          name={id}
          min={0}
          max={max}
          value={value}
          data-testid={`${dataTestId}-input`}
          onChange={event => {
            const value = Math.max(Number(event.target.value), 0);
            onChange(value);
            maxValRef.current = value;
          }}
          className="cursor-pointer w-full"
        />
        <div className="w-full flex justify-end text-xs px-2 max-w-xs">
          <p
            className="text-gray-900 text-sm font-bold leading-normal"
            data-testid={`${dataTestId}-input-value`}
          >
            {value}
          </p>
        </div>
      </div>
    </div>
  );
};
