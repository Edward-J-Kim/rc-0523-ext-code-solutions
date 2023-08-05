import logo from './logo.svg';
import './App.css';
import CustomButton from './CustomButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <CustomButton text="Hello" color="pink" />
          <CustomButton text="React" color="lightgreen" />
          <CustomButton text="Props" color="brown" />
        </div>
      </header>
    </div>
  );
}

export default App;
