import React, { useEffect, useState } from 'react';
import './App.css';
import Modal from './components/modal/Modal';
import Input from './components/input/Input';
import Button from './components/button/Button';

function App() {
  const inputInitialState = {
    login: {
      short: 'login',
      name: 'Логин',
      type: 'text',
      helper: '',
      value: '',
    },
    password: {
      short: 'password',
      name: 'Пароль',
      type: 'password',
      helper: '',
      value: '',
    },
    phoneNumber: {
      short: 'phoneNumber',
      name: 'Номер телефона',
      type: 'text',
      helper: 'на случай, если вы забудете свой пароль',
      value: '',
    },
    firstName: {
      short: 'firstName',
      name: 'Имя',
      type: 'text',
      helper: '',
      value: '',
    },
    lastName: {
      short: 'lastName',
      name: 'Фамилия',
      type: 'text',
      helper: '',
      value: '',
    },
    email: {
      short: 'email',
      name: 'E-mail',
      type: 'email',
      helper: 'будем присылать крутые открытки по праздникам',
      value: '',
    },
  };
  const [inputState, setInputState] = useState(inputInitialState);
  const [pageOne, setPageOne] = useState(true);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [validCount, setValidCount] = useState(0);
  useEffect(() => {
    if (validCount >= 3) {
      setButtonDisabled(false);
    } else (setButtonDisabled(true));
  }, [validCount]);
  useEffect(() => () => setValidCount(0), [pageOne]);

  return (
    <div className="App">
      <Modal header="Регистрация">
        <div>
          <Input
            inputType={pageOne ? inputState.login : inputState.firstName}
            setInputState={setInputState}
            setValidCount={setValidCount}
          />
          <Input
            inputType={pageOne ? inputState.password : inputState.lastName}
            setInputState={setInputState}
            setValidCount={setValidCount}
          />
          <Input
            inputType={pageOne ? inputState.phoneNumber : inputState.email}
            setInputState={setInputState}
            setValidCount={setValidCount}
          />
        </div>
        <Button head={pageOne ? 'Продолжить' : 'Зарегистрировать'} firstPage={pageOne} setFirstPage={setPageOne} isDisabled={buttonDisabled} inputState={inputState} setInputState={setInputState} initialState={inputInitialState} />
      </Modal>
    </div>
  );
}

export default App;
