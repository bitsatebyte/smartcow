import React, { useState } from 'react';
import './BoxContainer.css';
import { CardContext } from './CardContext';
import Box from '../Box/Box';
import Input from '../Input/Input';


function BoxContainer() {
  const initialString = '';
  const [str, setStr] = useState(initialString);
  return (
    <CardContext.Provider value={{ str, setStr }}>
      <div className="main">
        <Input />
        <Box />
      </div>
    </CardContext.Provider>
  );
}

export default BoxContainer;
