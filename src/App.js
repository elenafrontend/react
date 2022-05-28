import React, { useState } from 'react';

function App() {
  const [likes, setLikes] = useState(5);
  const [value, setValue] = useState('Text');

  function increment() {
    setLikes(likes + 1);
  }

  function decrement() {
    setLikes(likes - 1);
  }

  return (
    <div className="App">
      <h1>{value}</h1>
      <input
        type="text"
        value={value}
        onChange={event => setValue(event.target.value)}
      />

      <h1>{likes}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

    </div>
  );
}

export default App;
