import React, { useRef } from 'react';
import './DynamicUseRefExample.css'; 

function DynamicUseRefExample() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div className="container">
      <h1>Focus Input Example</h1>
      <div className="input-container">
        <input type="text" ref={inputRef} className="input-field" />
        <button onClick={focusInput} className="focus-button">
          Focus Input
        </button>
      </div>
    </div>
  );
}

export default DynamicUseRefExample;
