import React, {Component} from 'react';

class FilterString extends Component {
    constructor() {
        super();
        this.state = {
            names: ['Link', 'Samus', 'Pikachu', 'Lucario', 'Lucina', 'Ridley', 'Young Link', 'Fox', 'Shulk', 'Hero', 'Donkey Kong', 'Luigi'],
            userInput: '',
            filteredNames: []
        }
    }

    handleUserInput = (input) => {
        // console.log(input);
        this.setState({
            userInput: input
        });
    }

    filterNames = (name) => {
        let filterNames = [];
        for(let x = 0; x < this.state.names.length; x++) {
            if (this.state.names[x].includes(name)) {
                // console.log(this.state.names[x]);
                filterNames.push(this.state.names[x]);               
            }
        }
        // console.log(filterNames);
        this.setState({filteredNames: filterNames});
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
            <h4>Filter String</h4>
            <span className='puzzleText'>Names: { JSON.stringify(this.state.names, null, 10) }</span>
            <input className='inputLine' onChange={(e) => this.handleUserInput(e.target.value)}/>
            <button className='confirmationButton' onClick={() => this.filterNames(this.state.userInput)}>Filter</button>
            <span className='resultsBox filterStringRB'>Filtered Names: {JSON.stringify(this.state.filteredNames, null, 10)}</span>
            </div>
        )
    }
}

export default FilterString;