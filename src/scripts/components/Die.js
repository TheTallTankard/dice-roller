import React from 'react';
import '../../styles/Die.css';

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
        return Math.floor(Math.random() * parseInt(this.props.sides)) + 1;
    }

    handleClick(){
        let result = this.roll();
        this.props.onRoll(result);
    }


}

export default Die;