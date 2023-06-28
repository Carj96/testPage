import React, { useEffect, useState } from 'react';
import './Input.style.css';
import handleChange, { handleBlur, handleFocus } from './Input.handlers';

function Input({
  inputType, setInputState, setValidCount,
}) {
  const [errorMessage, setErrorMessage] = useState(null);
  useEffect(() => {
    setErrorMessage(null);
  }, [inputType]);
  useEffect(() => {
    if (errorMessage !== null && !errorMessage.length) {
      setValidCount((prev) => prev + 1);
    }
    if (errorMessage?.length) {
      setValidCount((prev) => prev - 1);
    }
  }, [errorMessage]);

  return (
    <div className="InputContainer">
      <p>{inputType.name}</p>
      <input
        required
        name={inputType.short}
        type={inputType.type}
        onChange={(e) => handleChange(e, setInputState)}
        value={inputType.value}
        onFocus={() => handleFocus(setErrorMessage)}
        onBlur={() => handleBlur(setErrorMessage, inputType)}
      />
      {errorMessage ? <p className="Error">{errorMessage}</p> : <p>{inputType.helper}</p>}
    </div>
  );
}

export default Input;
