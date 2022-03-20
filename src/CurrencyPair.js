import React, { Component } from 'react';
import './Styles.css';

export default class CurrencyPair extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoaded : false,
      base : props.base.toLowerCase(),
      quote : props.quote.toLowerCase(),
      rate : 0
    };
  }

  componentDidMount(){
    let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${this.state.base}/${this.state.quote}.json` 
    fetch(url)
    .then(res => res.json())
    .then(json => {
      let rate = json[this.state.quote];
      this.setState({
        isLoaded: true,
        rate: rate
      })
    });
  }


  render() {
    let {isLoaded, base, quote, rate} = this.state;

    let pair = `${base.toUpperCase()} / ${quote.toUpperCase()}`;

    return (
      <div className="flex-item">
      <h2>{pair}</h2>
      {isLoaded?rate:'Loading...'}
      </div>   
    );
  }
}