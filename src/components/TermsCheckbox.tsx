import React, { useState } from 'react';
import TermsModal from './TermsModal';

interface TermsCheckboxProps {
  onChange: (checked: boolean) => void;
  required?: boolean;
}

function TermsCheckbox({ onChange, required = true }: TermsCheckboxProps) {
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

  return (
    <>
      <div className="flex items-start">
        <input
          type="checkbox"
          id="terms-consent"
          className="mt-1 h-4 w-4 text-brand-blue border-brand-grey dark:border-white/20 rounded"
          onChange={(e) => onChange(e.target.checked)}
          required={required}
        />
        <label htmlFor="terms-consent" className="ml-2 text-sm text-brand-dark/70 dark:text-white/70">
          I agree to the{' '}
          <button
            type="button"
            onClick={() => setIsTermsModalOpen(true)}
            className="text-brand-blue hover:text-brand-dark dark:hover:text-white underline transition"
          >
            Terms of Service
          </button>
        </label>
      </div>

      <TermsModal
        isOpen={isTermsModalOpen}
        onClose={() => setIsTermsModalOpen(false)}
      />
    </>
  );
}

export default TermsCheckbox;