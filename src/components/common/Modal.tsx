import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import { useTranslation } from 'services/TranslationService';

interface IModal {
  isOpen: boolean;
  closeModal: () => void;
}
export const Modal: React.FC<IModal> = ({ isOpen, closeModal }: IModal) => {
  const { t } = useTranslation();

  const items: string[] = t('instructions.items', {
    returnObjects: true,
    defaultValue: [],
  });

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={closeModal}>
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
        <div className="min-h-screen px-4 text-center">
          <span className="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-lg p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                {t('instructions.title')}
              </Dialog.Title>
              <div className="p-5">
                <ol className="list-decimal">
                  {items.map(i => (
                    <li className="mt-2" key={i}>
                      <p className="text-sm">{i}</p>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mt-4">
                <button
                  type="button"
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};
