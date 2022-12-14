import React from 'react';
import Button from 'react-bootstrap/Button';
import Die from './Die'
import '../../styles/DiceBlock.css'


class DiceBlock extends React.Component {
    constructor(){
        super();
        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
        this.state = {
            numOfDice: 0
        }
    }

    render(){
        return(
            <tr className="DiceBlock">
                <td className="num-of-dice">{this.state.numOfDice + " x"}</td>
                <td><Die sides={this.props.sides} numOfDice={this.state.numOfDice} onRoll={this.props.onRoll}></Die></td>
                <td className="inc-dec-control">
                    <Button onClick={this.increase}>+</Button>
                    <Button onClick={this.decrease}>-</Button>
                </td>
            </tr>
        )
    }

    increase(){
        this.setState((prevState) => ({numOfDice: this.state.numOfDice + 1}))
    }

    decrease(){
        if (this.state.numOfDice > 0){
            this.setState((prevState) => ({numOfDice: this.state.numOfDice - 1}))
        }
    }
    
}

export default DiceBlock;