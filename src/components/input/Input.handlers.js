import validateInput from './InputValidation';

const handleChange = (event, setInput) => {
  setInput((prev) => ({
    ...prev,
    [event.target.name]: {
      ...prev[event.target.name],
      value: event.target.value,
    },
  }));
};

export const handleFocus = (setErrorMessage) => {
  setErrorMessage('');
};

export const handleBlur = (setErrorMessage, inputType) => {
  validateInput(setErrorMessage, inputType);
};

export default handleChange;
