import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import logo from '../../logo.svg';
import '../../styles/App.css';
import Die from './Die'
import Result from './Result'

class App extends React.Component {
  constructor(){
    super();
    this.updateResult = this.updateResult.bind(this);
    this.state = {
      result: 0
    }
  }

  render(){
    return (
      <Container fluid className="App">
        <Row>
          <Col>
            <Stack>
              <Die sides="4" onRoll={this.updateResult}></Die>
              <Die sides="6" onRoll={this.updateResult}></Die>
              <Die sides="8" onRoll={this.updateResult}></Die>
              <Die sides="10" onRoll={this.updateResult}></Die>
              <Die sides="12" onRoll={this.updateResult}></Die>
              <Die sides="20" onRoll={this.updateResult}></Die>
              <Die sides="100" onRoll={this.updateResult}></Die>
            </Stack>
          </Col>
          <Col>
            <Stack>
              <Result result={this.state.result}></Result>
            </Stack>
          </Col>
        </Row>
      </Container>
    );
  }

  updateResult(rollResult){
    this.setState((prevState) => ({ result: rollResult}))
  }
}

export default App;
