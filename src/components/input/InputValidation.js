const validatePassword = (password, setError) => {
  if (!password.length) {
    setError('поле необходимо заполнить');
  } else if (password.length < 8) {
    setError('длинна пароля меньше 8 символов');
  }
};

const validatePhone = (phoneNumber, setError) => {
  const regex = /^\+7-\d{3}-\d{3}-\d{2}-\d{2}$/;
  if (!phoneNumber.length) {
    setError('поле необходимо заполнить');
  } else if (!regex.test(phoneNumber)) {
    setError('формат телефона должен быть "+7-9**-***-**-**"');
  }
};

const validateEmail = (email, setError) => {
  const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  if (!email.length) {
    setError('поле необходимо заполнить');
  } else if (!regex.test(email)) {
    setError('ненадлежащий формат email');
  }
};

const validateOthers = (value, setError) => {
  if (value.length === 0) {
    setError('поле необходимо заполнить');
  }
};

export const validateAll = (error, setButtonDisabled) => {
  if (error.length)setButtonDisabled(false);
};

const validateInput = (setError, inputType) => {
  const { short, value } = inputType;
  if (short === 'password') {
    validatePassword(value, setError);
  } else if (short === 'phoneNumber') {
    validatePhone(value, setError);
  } else if (short === 'email') {
    validateEmail(value, setError);
  } else {
    validateOthers(value, setError);
  }
};

export default validateInput;
