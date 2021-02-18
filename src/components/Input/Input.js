import React, { useContext } from 'react';
import './Input.css';
import { CardContext } from '../BoxContainer/CardContext';

function Input() {
  const { str } = useContext(CardContext);
  const { setStr } = useContext(CardContext);
  const handleChange = e => setStr(e.target.value);

  return (
    <input type="text" id="somestr" name="String"
      minLength="0" maxLength="20"
      size="20" value={str}
      onChange={handleChange} />
  );
}

export default Input;
