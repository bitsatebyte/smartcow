import './Input.css';
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

const handleChange = e => {
  //use lodash and debounce this function so it doesn't fire so often
  
};

function Input() {
  return (
    <input type="text" id="somestr" name="String"
     minlength="0" maxlength="20"
     size="20"
     onChange={ handleChange } />
  );
}

export default Input;
