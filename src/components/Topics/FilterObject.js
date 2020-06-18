import React, {Component} from 'react';

class FilterObject extends Component {
    constructor() {
        super();
        this.state = {
            unFilteredArray: [{
                make: 'Ford',
                model: 'Mustang',
                year: 2016,
                damage: true,
                spoiler: false
            }, {
                make: 'Nissan',
                model: 'Maxima',
                year: 2020,
                color: 'Lightning Blue',
                spoiler: true
            }, {
                make: 'Aston Martin',
                model: 'DB9',
                year: 2016,
                color: 'Gray',
                damage: true
            }],
            userInput: '',
            filteredArray: []
        }
    }

    handleUserInput = (input) => {
        // console.log(input);
        this.setState({
            userInput: input
        })
    }

    solveProblem = (input) => {
        let filter = [];
        for(let x = 0; x < this.state.unFilteredArray.length; x++) {
            for(let key in this.state.unFilteredArray[x]) {
                if (key === input) {
                    filter.push(this.state.unFilteredArray[x]);
                }
            }
        }
        // console.log(filter);
        this.setState({filteredArray: filter});
        
    }

    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Original: {JSON.stringify(this.state.unFilteredArray, null, 10)}</span>
                <input className="inputLine" onChange={(e) => this.handleUserInput(e.target.value)}/>
                <button className="confirmationButton" onClick={() => this.solveProblem(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        )
    }
}

export default FilterObject;