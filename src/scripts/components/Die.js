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
        var rolls = [];
        for (let i = 0; i < this.props.numOfDice; i++){
            rolls.push(Math.floor(Math.random() * parseInt(this.props.sides)) + 1);
        }
        return rolls;
    }

    handleClick(){
        let results = this.roll();
        this.props.onRoll(results);
    }


}

export default Die;