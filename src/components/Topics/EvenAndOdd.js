import React, {Component} from 'react';

class EvenAndOdd extends Component {
    constructor() {
        super();
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }

    handleUserInput = (event) => {
        this.setState({
            userInput: event.target.value
        })
    }

    solveProblem = () => {
        let numArray = this.state.userInput.split(',');
        let evens = [];
        let odds = [];
        // console.log(numArray);
        for (let x = 0; x < numArray.length; x++) {
            if (numArray[x] % 2 === 0) {
                console.log(numArray[x]);
                evens.push(numArray[x]);
            }
            else {
                console.log(numArray[x]);
                odds.push(numArray[x]);
            }
        }
        this.setState({evenArray: evens, oddArray: odds});
        // console.log(evens);
        // console.log(odds);

    }

    render() {
        // console.log('userinput: ' + this.state.userInput);
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLine" onChange={(event) => this.handleUserInput(event)} value={this.state.userInput}/>
                <button className="confirmationButton" onClick={this.solveProblem}>Split</button>
                <span className="resultsBox">Evens: { JSON.stringify(this.state.evenArray)}</span>
                <span className="resultsBox">Odds: { JSON.stringify(this.state.oddArray)}</span>
            </div>
        )        
    }
}

export default EvenAndOdd;