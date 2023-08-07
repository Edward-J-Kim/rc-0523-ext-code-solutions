import { useState } from 'react';
export default function HotButton({ text }) {
  // const [color, setColor] = useState('hot-button');
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  let color = 'cold';

  if (count < 4) {
    color = 'cold';
  } else if (count < 7) {
    color = 'cool';
  } else if (count < 10) {
    color = 'tepid';
  } else if (count < 13) {
    color = 'warm';
  } else if (count < 16) {
    color = ' hot';
  } else {
    color = 'nuclear';
  }

  return (
    <button onClick={handleClick} className={`hot-button ${color}`}>
      {text}
    </button>
  );
}
