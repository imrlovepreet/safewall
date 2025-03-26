import React, { useState } from 'react';
import PrivacyModal from './PrivacyModal';

interface PrivacyCheckboxProps {
  onChange: (checked: boolean) => void;
  required?: boolean;
}

function PrivacyCheckbox({ onChange, required = true }: PrivacyCheckboxProps) {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  return (
    <>
      <div className="flex items-start">
        <input
          type="checkbox"
          id="privacy-consent"
          className="mt-1 h-4 w-4 text-brand-blue border-brand-grey dark:border-white/20 rounded"
          onChange={(e) => onChange(e.target.checked)}
          required={required}
        />
        <label htmlFor="privacy-consent" className="ml-2 text-sm text-brand-dark/70 dark:text-white/70">
          I agree to the{' '}
          <button
            type="button"
            onClick={() => setIsPrivacyModalOpen(true)}
            className="text-brand-blue hover:text-brand-dark dark:hover:text-white underline transition"
          >
            Privacy Policy
          </button>
        </label>
      </div>

      <PrivacyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
      />
    </>
  );
}

export default PrivacyCheckbox;