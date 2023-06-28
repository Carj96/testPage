const otherPage = (setFirstPage) => {
  setFirstPage((prev) => !prev);
};

const registration = (inputState, setFirstPage, setInputState, initialState) => {
  const transformedInputState = Object.entries(inputState).reduce((acc, [key, value]) => {
    acc[value.name] = value.value;
    return acc;
  }, {});
  console.log(transformedInputState);
  setInputState(initialState);
  setFirstPage(true);
};

const handleClick = (type, setFirstPage, inputState, setInputState, initialState) => {
  if (type === 'other') {
    otherPage(setFirstPage);
  } else {
    registration(inputState, setFirstPage, setInputState, initialState);
  }
};

export default handleClick;
