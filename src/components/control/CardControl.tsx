import React from 'react';
import { useTranslation } from 'services/TranslationService';
import { CounterIsland, SizeWord } from 'components/control';

export const CardControl: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div
      data-testid="test-card-control"
      className="w-full bg-white rounded-xl overflow-hdden shadow-md p-4"
    >
      <div className="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 -mt-10 mb-4 rounded-xl text-white grid items-center w-full py-4 px-8 justify-center shadow-lg-light-blue undefined">
        <h1
          data-testid="test-card-control-tile"
          className="text-white text-2xl font-serif font-bold leading-normal mt-0 mb-22"
        >
          {t('controls.title')}
        </h1>
      </div>
      <CounterIsland />
      <SizeWord />
    </div>
  );
};
