

import React, { Component } from 'react';
import DisplayGuess from './DisplayGuess';

export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      guess: '0',
      inputGuessKey: '',
      ranNum: '',
      hint: ''
    };
    this.handleInputGuess = this.handleInputGuess.bind(this);
    this.handleGeneratedRanNum = this.handleGeneratedRanNum.bind(this);
    this.handleHintDisplay = this.handleHintDisplay.bind(this);
  }

  componentWillMount(){
    this.setState({ranNum: this.handleGeneratedRanNum()});
  }

  componentWillReceiveProps() {
    this.setState({hint: this.handleHintDisplay()});
  }

  handleGeneratedRanNum() {
    const ranNum = this.handleGetRandomNum(1, 100);
    return ranNum;
  }

  handleGetRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  handleInputGuess(e){
    const guess = e.target.value;
    this.setState({guess:guess, inputGuessKey: guess});
  }

  handleHintDisplay(){
    const guess = +this.state.guess;
    const winning = this.state.ranNum;
    if(guess > winning) { this.setState({hint: 'Too High'}); }
    if(guess < winning) { this.setState({hint: 'Too Low'}); }
    if(guess === winning) { this.setState({hint: 'You Won'}); }
  }

  render(){
    return (
      <section className="Container">
        <section className="ApplicationRender">
          <article className="NameSecretNumber">{this.state.ranNum}</article>
        </section>

        <section className="CreateGuess">
          <DisplayGuess guess={this.state.guess} />
          <input
            placeholder="Guess"
            value={this.state.guess}
            onChange={this.handleInputGuess}
          />
          <button onClick={this.handleHintDisplay}>Submit</button>
        </section>

        <section className="DisplayHint">
          {this.state.hint}
        </section>

      </section>
    );
  }
}
