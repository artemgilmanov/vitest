import { useState } from 'react';
import './App.css';
import { replaceCamelWithSpaces } from './helpers';

function App() {
  const [disabled, setDisabled] = useState(false);
  const [buttonColor, setButtonColor] = useState('medium-violet-red');
  const newButtonColorClassName =
    buttonColor === 'medium-violet-red' ? 'midnight-blue' : 'medium-violet-red';
  const nextColorTitleCase = replaceCamelWithSpaces(newButtonColorClassName);
  const className = disabled ? 'grey' : buttonColor;

  return (
    <div>
      <button
        className={className}
        onClick={() => setButtonColor(newButtonColorClassName)}
        disabled={disabled}
      >
        Change to {nextColorTitleCase}
      </button>
      <br />
      <input
        type='checkbox'
        id='disable-button-checkbox'
        defaultChecked={false}
        onChange={(e) => setDisabled(e.target.checked)}
      />
      <label htmlFor='disable-button-checkbox'>Disable button</label>
    </div>
  );
}

export default App;
