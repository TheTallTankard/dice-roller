import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
            <Container fluid className="DiceBlock">
                <Row>
                    <Col>
                        <div className="num-of-dice">{this.state.numOfDice + " x"}</div>
                    </Col>
                    <Col>
                        <Die sides={this.props.sides} numOfDice={this.state.numOfDice} onRoll={this.props.onRoll}></Die>
                    </Col>
                    <Col className="inc-dec-control">
                        <input type="button" readonly value="+" onClick={this.increase}></input>
                        <input type="button" readonly value="-" onClick={this.decrease}></input>
                    </Col>
                </Row>
            </Container>
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