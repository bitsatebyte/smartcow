import './BoxContainer.css';
import Box from '../Box/Box';

function BoxContainer(props) {
  return (
    <div>
      <Input />
      { props.str.replace(/\s/g, "").split().map((el, index) => <Box val={el} key={index}/>) }
    </div>
  );
}

export default BoxContainer;
