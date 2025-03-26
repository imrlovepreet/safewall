import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { X } from 'lucide-react';
import PrivacyContent from './PrivacyContent';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog onClose={onClose} className="relative z-50">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30 dark:bg-black/50" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white dark:bg-brand-dark p-6 text-left align-middle shadow-xl transition-all">
                <div className="flex justify-between items-center mb-4">
                  <Dialog.Title className="text-2xl font-bold text-brand-dark dark:text-white font-montserrat">
                    Privacy Policy
                  </Dialog.Title>
                  <button
                    onClick={onClose}
                    className="text-brand-dark/60 dark:text-white/60 hover:text-brand-dark dark:hover:text-white transition"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
                <div className="max-h-[70vh] overflow-y-auto pr-4">
                  <PrivacyContent />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default PrivacyModal;