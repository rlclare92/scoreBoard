import React, { Component } from 'react'
import './App.css';
import Timer from './components/timer.js';


class App extends Component {

  state = {
    counter1: 0,
    counter2: 0
  }

  try1 = () => {
    this.setState({
      counter1: this.state.counter1 + 5
    })
  }

  conversion1 = () => {
    this.setState({
      counter1: this.state.counter1 + 2
    })
  }

  dropGoal1 = () => {
    this.setState({
      counter1: this.state.counter1 + 3
    })
  }

  penalty1 = () => {
    this.setState({
      counter1: this.state.counter1 - 3
    })
  }
  try2 = () => {
    this.setState({
      counter2: this.state.counter2 + 5
    })
  }

  conversion2 = () => {
    this.setState({
      counter2: this.state.counter2 + 2
    })
  }

  dropGoal2 = () => {
    this.setState({
      counter2: this.state.counter2 + 3
    })
  }

  penalty2 = () => {
    this.setState({
      counter2: this.state.counter2 - 3
    })
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="timeScoreDisplay">
            <Timer time={Timer} text={"Time"} />
          </div>
          <div className="Scores">
            <div className="score1">
              <p>Score {this.state.counter1}</p>
            </div>
            <div className="score2">
              <p>Score {this.state.counter2}</p>
            </div>
          </div>
          <div className="team1Buttons">
            <button onClick={this.try1}>Try</button>
            <button onClick={this.conversion1}>Conversion</button>
            <button onClick={this.dropGoal1}>Drop Goal</button>
            <button onClick={this.penalty1}>Penalty</button>
          </div>
          <div className="team2Buttons">
            <button onClick={this.try2}>Try</button>
            <button onClick={this.conversion2}>Conversion</button>
            <button onClick={this.dropGoal2}>Drop Goal</button>
            <button onClick={this.penalty2}>Penalty</button>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
