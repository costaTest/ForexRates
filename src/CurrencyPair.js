import React, { Component } from 'react';

export default class CurrencyPair extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoaded : false,
      pair : props.pair,
      rate : 0
    };
  }

  componentDidMount(){
    /*fetch('http://api.currencylayer.com/live?access_key=a1a6f8b7f8f9f8a488cb575bfed862b9&currencies=EUR,GBP')
    .then(res => res.json())
    .then(json => {
      let rate = JSON.parse(json).quotes[this.props.pair];
      console.log(json);
      this.setState({
        isLoaded: true,
        rate: rate
      })
    });*/
    let j = JSON.parse('{"success":true,"terms":"https://currencylayer.com/terms","privacy":"https://currencylayer.com/privacy","timestamp":1647418263,"source":"USD","quotes":{"USDEUR":0.911785,"USDGBP":0.766635}}');
    let rate = j.quotes[this.props.pair];
    this.setState({
      isLoaded: true,
      rate: rate
    });
  }


  render() {
    let {isLoaded, pair, rate} = this.state;

    return (
      <div className="panel panel-default">
      <h1>{pair}</h1>
      {isLoaded?rate:'Loading...'}
      </div>   
    );
  }
}