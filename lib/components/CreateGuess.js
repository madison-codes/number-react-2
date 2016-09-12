import React, { Component } from 'react';

export default class CreateGuess extends Component {
  constructor(){
    super();
      this.state = {
      guess: '0',
      inputGuessKey: ''
    };
    this.handleInputGuess = this.handleInputGuess.bind(this);
  }

  handleInputGuess(e){
    const guess = e.target.value;
    this.setState({guess:guess, inputGuessKey: guess});
  }

  render() {
    return(
      <section className="CreateGoal">
        <h1>{this.state.guess}</h1>
        <input
          placeholder="Guess"
          value={this.state.guess}
          onChange={this.handleInputGuess}
        />
        <button>Submit</button>
      </section>
    )
  }
}

// onSubmit={this.createGoal.bind(this)}
