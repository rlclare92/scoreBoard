import React, { Component } from "react";


class Timer extends Component {
  state = {
    timerOn: false,
    timerStart: 0,
    timerTime: 0
  };

  startTimer = () => {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: Date.now() - this.state.timerTime
    });
    this.timer = setInterval(() => {
      this.setState({
        timerTime: Date.now() - this.state.timerStart
      });
    }, 10);
    // clearInterval = () => {
      if(this.state.timerTime >= 80){
          this.stopTimer()
      }
    // }
  };

  stopTimer = () => {
    this.setState({ timerOn: false });
    clearInterval(this.timer);
  };
  resetTimer = () => {
    this.setState({
      timerStart: 0,
      timerTime: 0
    });
  };

  adjustTimer = input => {
    const { timerTime, timerOn } = this.state;
    const max = 216000000;
    if (!timerOn) {
      if (input === "incHours" && timerTime + 3600000 < max) {
        this.setState({ timerTime: timerTime + 3600000 });
      } else if (input === "decHours" && timerTime - 3600000 >= 0) {
        this.setState({ timerTime: timerTime - 3600000 });
      } else if (input === "incMinutes" && timerTime + 60000 < max) {
        this.setState({ timerTime: timerTime + 60000 });
      } else if (input === "decMinutes" && timerTime - 60000 >= 0) {
        this.setState({ timerTime: timerTime - 60000 });
      } else if (input === "incSeconds" && timerTime + 1000 < max) {
        this.setState({ timerTime: timerTime + 1000 });
      } else if (input === "decSeconds" && timerTime - 1000 >= 0) {
        this.setState({ timerTime: timerTime - 1000 });
      }
    }
  };
  render() {
    const { timerTime } = this.state;
    let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
    let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);

    let start = (this.state.timerStart === 0) ?
      <button onClick={this.startTimer}>start</button> :
      null

    let stop = (this.state.timeTimer === 0 || !this.state.timerOn) ?
      null :
      <button onClick={this.stopTimer}>stop</button>

    let resume = (this.state.timeTimer === 0 || this.state.timerOn) ?
      null :
      <button onClick={this.startTimer}>resume</button>

    let reset = (this.state.timeTimer === 0 || this.state.timerOn) ?
      null :
      <button onClick={this.resetTimer}>reset</button>

    return (
      <div className="Stopwatch">
        <div className="Stopwatch-display">
          {minutes} : {seconds} : {centiseconds}
        </div>
        <div className="TimerButtons">
          {start}
          {stop}
          {resume}
          {reset}
        </div>
      </div>
    );
  }
}
export default Timer;