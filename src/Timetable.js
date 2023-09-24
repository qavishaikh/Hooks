import React, { useState } from 'react';

function Timetable() {
  // Initialize state for the user input
  const [userInput, setUserInput] = useState("");
  const [message, setMessage] = useState("");

  // Update the userInput state when the input changes
  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  // Define a function to handle the submission
  const handleSubmit = () => {
    let newMessage;

    if (userInput === "8:00 AM") {
      newMessage = `At ${userInput}, Operating System Class Till "8:60 AM"`;
    } else if (userInput === "9:00 AM") {
      newMessage = `At ${userInput}, Database System Management Class Till "9:60 AM"`;
    } else if (userInput === "10:00 AM") {
      newMessage = `At ${userInput}, IT Project Management Class Till "10:60 AM"`;
    } else if (userInput === "11:00 AM") {
      newMessage = `At ${userInput}, Probability Statistics Class Till "11:60 AM"`;
    } else if (userInput === "12:00 PM") {
      newMessage = `At ${userInput}, Break Time Till "12:30 PM"`;
    } else if (userInput === "12:30 PM") {
      newMessage = `At ${userInput}, Python Programming Class Till "1:30 PM"`;
    } else if (userInput === "1:30 PM") {
      newMessage = `At ${userInput}, It's time to go home!`;
    } else if (userInput === "") {
        newMessage = ` ${userInput} Khna kia chaty ho ?`;
    }else {
      newMessage = `Bhai, time to sahi se dekho: ${userInput}.`;
    }

    setMessage(newMessage);
  };

  return (
    <div>
      <label>
        Enter a time (e.g., 8:00 AM):
        <input type="text" value={userInput} onChange={handleInputChange} />
      </label>
      <button onClick={handleSubmit}>Submit</button>

      {message && <h1>{message}</h1>}
    </div>
  );
}

export default Timetable;
