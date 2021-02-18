import React , { useState } from 'react';
import './Input.css';
// import 'bootstrap/dist/css/bootstrap.css';


function Input() {
  const initialString = '';
  const [str, setStr] = useState(initialString);
  const handleChange = e => setStr(e.target.value);

  return (
    <input type="text" id="somestr" name="String"
     minLength="0" maxLength="20"
     size="20" value={str}
     onChange={ handleChange } />
  );
}

export default Input;
