import React from 'react';
import '../../styles/App.css';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

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
      <div className="App">
        <Header></Header>
        <Body></Body>
        <Footer></Footer>
      </div>

    );
  }

  updateResult(rollResult){
    this.setState((prevState) => ({ result: rollResult}))
  }
}

export default App;
