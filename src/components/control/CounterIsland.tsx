import React from 'react';
import { useSelector } from 'store/store';
import { getIslandCount } from 'utils/WorldHelper';

export const CounterIsland: React.FC = () => {
  const mapWord = useSelector(state => state.seaWorld.mapWord);
  const islandCount = getIslandCount(mapWord);

  return (
    <div data-testid="test-size-word-counter" className="mr-4 p-3 text-center">
      <span
        data-testid="test-size-word-island-count"
        className="text-xl font-bold block uppercase tracking-wide text-gray-900"
      >
        {islandCount}
      </span>
      <span className="text-sm text-gray-700">No. Island</span>
    </div>
  );
};
