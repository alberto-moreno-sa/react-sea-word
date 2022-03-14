import React, { useEffect, useRef, useState } from 'react';
import { InputRange } from 'components/common';
import { debounce } from 'lodash';
import { useDispatch } from 'react-redux';
import { WordSize, updateSizeWordAction } from 'store/seaWord';
import { useSelector } from 'store/store';

export const SizeWord: React.FC = () => {
  const dispatch = useDispatch();
  const firstDebounce = useRef(true);
  const worldSize = useSelector(state => state.seaWorld.world);
  const [size, setWorldSize] = useState(worldSize);

  const onChange = (coor: string, val: number): void => {
    setWorldSize(old => ({
      ...old,
      [coor]: val,
    }));
  };

  const debounced = useRef(
    debounce((size: WordSize) => {
      dispatch(updateSizeWordAction(size));
    }, 1000)
  );

  useEffect(() => {
    if (!firstDebounce.current) {
      debounced.current(size);
    }
    firstDebounce.current = false;
  }, [size.x, size.y]);

  return (
    <div
      data-testid="test-size-word"
      className="flex flex-wrap border-solid border-2 rounded-md border-gray-200 w-full p-4"
    >
      <InputRange
        id="rangeX"
        value={size.x}
        name="Range X"
        data-testid="test-size-word-range-x"
        onChange={value => onChange('x', value)}
        max={50}
      />
      <InputRange
        id="rangeY"
        value={size.y}
        name="Range Y"
        data-testid="test-size-word-range-y"
        onChange={value => onChange('y', value)}
        max={50}
      />
    </div>
  );
};
