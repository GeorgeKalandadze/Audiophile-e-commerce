import React, { RefObject, useState } from 'react';


interface FormInputWaveProps {
  
  label: string;
  type: string;
  reference:any;
  errorMessage: string | string[];
}

const FormInputWave: React.FC<FormInputWaveProps> = ({  label, type, reference,errorMessage }) => {
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
      <p className='auth-error'>{errorMessage}</p>
    </div>
  );
};

export default FormInputWave;