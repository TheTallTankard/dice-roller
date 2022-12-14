import React from 'react';
import Button from 'react-bootstrap/Button';
import '../../styles/DiceBlock.css';

class Die extends React.Component {
    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <div className='Die'>
                <Button onClick={this.handleClick}>{"D" + this.props.sides}</Button>
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