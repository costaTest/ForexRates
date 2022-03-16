import logo from './logo.png';
import CurrencyPair from './CurrencyPair';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
      </header>
      <CurrencyPair pair='USDGBP'/>
      <CurrencyPair pair='USDEUR'/>
    </div>
  );
}

export default App;
