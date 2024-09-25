import { useState } from 'react';
import './App.css';

function App() {
  const [buttonColor, setButtonColor] = useState('medium-violet-red');
  const newButtonColor =
    buttonColor === 'medium-violet-red' ? 'midnight-blue' : 'medium-violet-red';
  const [disabled, setDisabled] = useState(false);

  return (
    <div>
      <button
        className={disabled ? 'grey' : buttonColor}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={disabled}
      >
        Change to {newButtonColor}
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
