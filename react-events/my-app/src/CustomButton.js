export default function CustomButton({ text, color }) {
  function handleClick() {
    alert(`Clicked ${color} ${text}`);
  }
  return (
    <button onClick={handleClick} style={{ backgroundColor: color }}>
      {text}
    </button>
  );
}
