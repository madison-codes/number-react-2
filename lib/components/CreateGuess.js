// import React, { Component } from 'react';
// import DisplayGuess from './DisplayGuess';
// import DisplayHint from './DisplayHint';
//
// export default class CreateGuess extends Component {
//   constructor(){
//     super();
//       this.state = {
//       guess: '0',
//       inputGuessKey: '',
//     };
//     this.handleInputGuess = this.handleInputGuess.bind(this);
//   }
//
//   handleInputGuess(e){
//     const guess = e.target.value;
//     this.setState({guess:guess, inputGuessKey: guess});
//   }
//
//   render() {
//     return(
//       <section className="CreateGoal">
//         <DisplayGuess guess={this.state.guess} />
//         <input
//           placeholder="Guess"
//           value={this.state.guess}
//           onChange={this.handleInputGuess}
//         />
//         <button>Submit</button>
//         <DisplayHint guess={this.state.guess} />
//       </section>
//     )
//   }
// }

// onSubmit={this.createGoal.bind(this)}
