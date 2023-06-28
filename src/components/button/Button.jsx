import React from 'react';
import './Button.style.css';
import handleClick from './Button.handlers';

function Button({
  head, firstPage, setFirstPage, isDisabled, inputState, setInputState, initialState,
}) {
  return (
    <div className="ButtonContainer">
      {firstPage ? (
        <button className={!isDisabled ? 'continueButton' : 'continueButton disabledButton'} disabled={isDisabled} type="submit" onClick={() => handleClick('other', setFirstPage, inputState)}>{head}</button>
      ) : (
        <>
          <button className={!isDisabled ? 'continueButton second' : 'disabledButton'} type="button" disabled={isDisabled} onClick={() => handleClick('reg', setFirstPage, inputState, setInputState, initialState)}>
            {head}
            {' '}
          </button>
          <button className="backButton" type="button" onClick={() => handleClick('other', setFirstPage, inputState)}> &lt; Назад </button>
        </>
      ) }

    </div>
  );
}

export default Button;
