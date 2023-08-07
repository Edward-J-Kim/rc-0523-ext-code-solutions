import './App.css';
import CustomButton from './CustomButton';

function App() {
  function handleCustomClick(text) {
    alert(text);
  }
  return (
    <div>
      <CustomButton
        text="Hello"
        color="pink"
        onCustomClick={handleCustomClick}
      />
      <CustomButton
        text="React"
        color="lightgreen"
        onCustomClick={handleCustomClick}
      />
      <CustomButton
        text="Props"
        color="brown"
        onCustomClick={handleCustomClick}
      />
    </div>
  );
}

export default App;
