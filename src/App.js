import CurrencyPair from './CurrencyPair';
import './Styles.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Forex Rates
      </header>
      <div className="flex-container">
        <CurrencyPair base='USD' quote="GBP"/>
        <CurrencyPair base='USD' quote="EUR"/>
        <CurrencyPair base='USD' quote="CAD"/>
        <CurrencyPair base='USD' quote="JPY"/>
        <CurrencyPair base='EUR' quote="GBP"/>
        <CurrencyPair base='EUR' quote="CHF"/>
        <CurrencyPair base='EUR' quote="USD"/>
        <CurrencyPair base='EUR' quote="PLN"/>
        <CurrencyPair base='GBP' quote="USD"/>
        <CurrencyPair base='GBP' quote="EUR"/>
        <CurrencyPair base='GBP' quote="AUD"/>
        <CurrencyPair base='GBP' quote="JPY"/>
      </div>
    </div>
  );
}

export default App;
