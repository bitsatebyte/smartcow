import React, { useContext } from 'react';
import './Box.css';
import { CardContext } from '../BoxContainer/CardContext';

const mapStringToBoxes = str => {
  const ret = str.map((el, index) => {
    console.log(el);
    return (
      <li className="box" key={index}>
        {el}
      </li>
    );
  });
  return ret;
}

function Box() {
  const { str } = useContext(CardContext);
  const boxes = mapStringToBoxes(str.replace(/\s/g, "").split(''));
  return (
    <div>
      <ul className="boxMain">
        {str.length ? boxes : ''}
      </ul>
    </div>
  );
}

export default Box;
