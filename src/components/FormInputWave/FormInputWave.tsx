import React, { useState } from 'react';


interface FormInputWaveProps {
  id: string;
  label: string;
  type: string;
}

const FormInputWave: React.FC<FormInputWaveProps> = ({ id, label, type }) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleFocus = (): void => {
    setIsFocused(true);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>): void => {
    if (e.target.value === '') {
      setIsFocused(false);
    }
  };

  return (
    <div className="form-input-wave-container">
      <label htmlFor={id} className={isFocused ? 'focused' : ''}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default FormInputWave;