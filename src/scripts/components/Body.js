import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import logo from '../../logo.svg';
import '../../styles/Body.css';
import DiceBlock from './DiceBlock'
import Result from './Result'

class Body extends React.Component {
  constructor(){
    super();
    this.updateResult = this.updateResult.bind(this);
    this.rollAll = this.rollAll.bind(this);
    this.state = {
      result: 0,
      breakdown: ""
    }
  }

  render(){
    return (
      <Container fluid className="Body">
        <Row>
          <Col md={4}>
            <Table>
              <DiceBlock sides="4" onRoll={this.updateResult}></DiceBlock>
              <DiceBlock sides="6" onRoll={this.updateResult}></DiceBlock>
              <DiceBlock sides="8" onRoll={this.updateResult}></DiceBlock>
              <DiceBlock sides="10" onRoll={this.updateResult}></DiceBlock>
              <DiceBlock sides="12" onRoll={this.updateResult}></DiceBlock>
              <DiceBlock sides="20" onRoll={this.updateResult}></DiceBlock>
              <DiceBlock sides="100" onRoll={this.updateResult}></DiceBlock>
            </Table>
          </Col>
          <Col md={8}>
            <div>
              <Button onClick={this.rollAll}>Roll all</Button>
            </div>
            <div>
              <Result result={this.state.result} breakdown={this.state.breakdown}></Result>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }

  updateResult(rollResult){
    let breakdownString = "";
    let sum = 0;
    for (let i = 0; i < rollResult.length; i++){
      breakdownString += rollResult[i] + " + ";
      sum += rollResult[i];
    }
    breakdownString = breakdownString.slice(0, -3);

    this.setState((prevState) => ({ breakdown: breakdownString}))
    this.setState((prevState) => ({ result: sum}))
  }

  rollAll(){

  }
}

export default Body;
