import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            renderBall: false,
            posi : 0,
            ballPosition: { left: "0px" }
        };
        this.renderChoice = this.renderBallOrButton.bind(this)
        this.buttonClickHandler = this.buttonClickHandler.bind(this)
	this.handleKeyDown = this.handleKeyDown.bind(this);
    };

    buttonClickHandler() {
	    this.setState({ renderBall: true });
   }
    renderBallOrButton() {
		if (this.state.renderBall) {
		    return <div className="ball" style={this.state.ballPosition}></div>
		} else {
		    return <button onClick={this.buttonClickHandler} >Start</button>
		}
    }
 handleKeyDown(event) {
    if (event.key === "ArrowRight" || event.keyCode === 39) {
      this.setState((prevState) => ({
        posi: prevState.posi + 5,
        ballPosition: { left: `${prevState.posi + 5}px` },
      }));
    }
  }

    // bind ArrowRight keydown event
    componentDidMount() {
      document.addEventListener("keydown", this.handleKeyDown);
    }
 componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

    render() {
        return (
            <div className="playground">
                {!this.state.renderBall && (
          <button className="start" onClick={this.buttonClickHandler}>
            Start
          </button>
        )}
		 {this.state.renderBall && (
          <div className="ball" style={this.state.ballPosition}></div>
        )}
            </div>
        )
    }
}


export default App;
