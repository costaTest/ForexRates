import logo from './logo.png';
import CurrencyPair from './CurrencyPair';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
      </header>
      <CurrencyPair base='USD' quote="GBP"/>
      <CurrencyPair base='USD' quote="EUR"/>
      <CurrencyPair base='USD' quote="CAD"/>
      <CurrencyPair base='EUR' quote="GBP"/>
      <CurrencyPair base='EUR' quote="CHF"/>
      <CurrencyPair base='USD' quote="JPY"/>
      <CurrencyPair base='GBP' quote="JPY"/>
      <CurrencyPair base='GBP' quote="EUR"/>
    </div>
  );
}

export default App;
