import React, { Component } from 'react'
import "./App.css";
import Timer from './components/Timer.js';


class App extends Component {

  state = {
    counter1: 0,
    counter2: 0,
    currentTeamName1: '',
    updatedTeamName1: [],
    currentTeamName2: '',
    updatedTeamName2: [],
  }
// Points and Penalty fuctions for team 1
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

  // Points and Penalty fuctions for team 2
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

// Changing team names for teams 1 & 2
  onClickTeamName1 = () => {
    this.setState({
      updatedTeamName1: [this.state.currentTeamName1]
    })
  }
  onClickTeamName2 = () => {
    this.setState({
      updatedTeamName2: [this.state.currentTeamName2]
    })
  }
  getValuesTeamName1 = (e) => {
    console.log(e.target.value);
    this.setState({
      currentTeamName1: e.target.value
    })
  }
  getValuesTeamName2 = (e) => {
    console.log(e.target.value);
    this.setState({
      currentTeamName2: e.target.value
    })
  }
  handleChangeTeamName1 = (e) => {
    e.preventDefault();
  }
  handleChangeTeamName2 = (e) => {
    e.preventDefault();
  }

  render() {
    const teamNames1 = this.state.updatedTeamName1.map((text, index) => {
      return <h1>{text}</h1>
    })

    const teamNames2 = this.state.updatedTeamName2.map((text, index) => {
      return <h1>{text}</h1>
    })

    return (
      <div>
        <div className="container">
          {/* Timer Function section*/}
          <div className="timeDisplay">
            <Timer time={Timer} text={"Time"} />
          </div>

          {/* Score Display */}
          <div className="Scores">
            <p>Score {this.state.counter1}</p>
            <p>Score {this.state.counter2}</p>
          </div>

          {/* Team Name input */}
          <div className="teamNames">
            {/* Team 1 change name input section */}
            <label>
              <input type="text" value={this.state.value} onChange={this.getValuesTeamName1} />
              <button onClick={this.onClickTeamName1}>Change Team Name 1</button>
              {teamNames1}
              {/*TeamSheet shows points next to each player on what they have scored */}
              <button onClick={this.props.closePopup}>Close</button>
            </label>

              {/* Team 2 change name input section */}
            <label>
              <input type="text" value={this.state.value} onChange={this.getValuesTeamName2} />
              <button onClick={this.onClickTeamName2}>Change Team Name 2</button>
              {teamNames2}
             {/*TeamSheet shows points next to each player on what they have scored */}
              <button onClick={this.props.closePopup}>Close</button>
            </label>
          </div>

          {/* Team 1 score and penalty buttons */}
          <div className="Buttons">
            <div className="team1Buttons">
              <button onClick={this.try1}>Try</button>
              <button onClick={this.conversion1}>Conversion</button>
              <button onClick={this.dropGoal1}>Drop Goal</button>
              <button onClick={this.penalty1}>Penalty</button>
            </div>

            {/* Team 2 score and penalty buttons */}
            <div className="team2Buttons">
              <button onClick={this.try2}>Try</button>
              <button onClick={this.conversion2}>Conversion</button>
              <button onClick={this.dropGoal2}>Drop Goal</button>
              <button onClick={this.penalty2}>Penalty</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
