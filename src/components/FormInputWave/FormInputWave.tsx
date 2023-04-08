import React, { RefObject, useState } from 'react';


interface FormInputWaveProps {
  
  label: string;
  type: string;
  reference:any;
  
}

const FormInputWave: React.FC<FormInputWaveProps> = ({  label, type, reference}) => {
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
      <label  className={isFocused ? 'focused' : ''}>
        {label}
      </label>
      <input
        type={type}
        onFocus={handleFocus}
        onBlur={handleBlur}
        ref={reference}
      />
    </div>
  );
};

export default FormInputWave;