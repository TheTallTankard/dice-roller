import React from 'react';
import '../../styles/App.css';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

class App extends React.Component {
  constructor(){
    super();
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
}

export default App;
