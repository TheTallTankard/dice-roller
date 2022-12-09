import React from 'react';
import '../../styles/DiceBlock.css';

class Die extends React.Component {
    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <div className='Die'>
                <input type="button" value={"D" + this.props.sides} onClick={this.handleClick}></input>
            </div>
        )
    }

    roll() {
        let runSum = 0;
        for (let i = 0; i < this.props.numOfDice; i++){
            runSum += Math.floor(Math.random() * parseInt(this.props.sides)) + 1;
        }
        return runSum;
    }

    handleClick(){
        let result = this.roll();
        this.props.onRoll(result);
    }


}

export default Die;