import React, {Component} from 'react';

class Palindrome extends Component {
    constructor() {
        super();
        this.state = {
            userInput: '',
            palindrome: ''
        }
    }

    handleUserInput = (input) => {
        this.setState({
            userInput: input
        });
    }

    isPalindrome = (string) => {
        let strArray = string.split('');
        // console.log(strArray);
        let reverseArray = strArray.reverse();
        // console.log(reverseArray);
        let reversedStr = reverseArray.join('');
        // console.log(reversedStr);
        if (reversedStr === string) {
            this.setState({palindrome: 'True'})
        }
        else {
            this.setState({palindrome: 'False'})
        }
    }

    render() {
        return (
            <div className='puzzleBox palindromePB'>
                <h4>Palindrome</h4>
                <input className='inputLine' onChange={(e) => this.handleUserInput(e.target.value)}/>
                <button className='confirmationButton' onClick={() => this.isPalindrome(this.state.userInput)}>Check</button>
                <span className='resultsBox'>Palindrome: {this.state.palindrome}</span>
            </div>
        )
    }
}

export default Palindrome;