

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
        <h1 className="ApplicationRender">
          <p className="NameSecretNumber">{this.state.ranNum}</p>
        </h1>

        <h3 className="RecentGuess">Most Recent Guess:
          <DisplayGuess guess={this.state.guess} />
        </h3>
        <input
          placeholder="Guess"
          type="number"
          value={this.state.guess}
          onChange={this.handleInputGuess}
        />
        <h2>Helpful Hint</h2>
        <button onClick={() => this.handleHintDisplay() }>Submit</button>
        <h1 className="DisplayHint">{this.state.hint}</h1>

        <section className="ResetGame">
          <button onClick={() => this.componentWillMount()}>Reset</button>
        </section>
      </section>
    );
  }
}
