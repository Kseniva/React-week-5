import React, { useState, useEffect } from 'react';

export default function Counter () {
    const [count, setCount] = useState(0);
     
  const handleClick = () =>
  setCount(currentCount => currentCount + 1);

  useEffect(() => {
    document.title = `Вы нажали ${count} раз`;
  });
  
  return (
    <div>
      <p>Count: {count}</p>
      <button className='button' onClick={handleClick}>Click</button>
    </div>
  );
  }