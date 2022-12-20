import React from 'react';
import '../../styles/App.css';
import Header from '../../common/js/Header';
import Footer from '../../common/js/Footer';
import Body from './Body';
import Container from 'react-bootstrap/Container';

class App extends React.Component {
  constructor(){
    super();
  }

  render(){
    return (
      <Container fluid className="App">
        <Header href="https://thetalltankard.github.io/dice-roller" text="Dice Roller"></Header>
        <Body></Body>
        <Footer></Footer>
      </Container>

    );
  }
}

export default App;
