import React from 'react';
import PrivacyCheckbox from './PrivacyCheckbox';
import TermsCheckbox from './TermsCheckbox';

interface ConsentCheckboxesProps {
  onPrivacyChange: (checked: boolean) => void;
  onTermsChange: (checked: boolean) => void;
  required?: boolean;
}

function ConsentCheckboxes({ onPrivacyChange, onTermsChange, required = true }: ConsentCheckboxesProps) {
  return (
    <div className="space-y-3">
      <PrivacyCheckbox onChange={onPrivacyChange} required={required} />
      <TermsCheckbox onChange={onTermsChange} required={required} />
    </div>
  );
}

export default ConsentCheckboxes;