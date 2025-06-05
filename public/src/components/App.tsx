import React, { useState } from 'react';

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => setCount(prev => prev + 1);

  return (
    <div className="App">
      <h1>Hello, React + TypeScript!</h1>
      <p>Click count: {count}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default App;
