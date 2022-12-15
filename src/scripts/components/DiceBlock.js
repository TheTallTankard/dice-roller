import React from 'react';
import Button from 'react-bootstrap/Button';
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
                <td className="die-type">{"D" + this.props.sides}</td>
                <td className="inc-dec-control">
                    <Button onClick={this.increase}>+</Button>
                    <Button onClick={this.decrease}>-</Button>
                </td>
            </tr>
        )
    }

    increase(e){
        this.changeNumOfDice(this.state.numOfDice + 1);
    }

    decrease(){
        if (this.state.numOfDice > 0){
            this.changeNumOfDice(this.state.numOfDice - 1);
        }
    }

    changeNumOfDice(newNumOfDice){
        this.setState((prevState) => ({numOfDice: newNumOfDice}))
        this.props.onNumOfDiceChange(this.props.sides, newNumOfDice)
    }
    
}

export default DiceBlock;