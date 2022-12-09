import React from 'react';
import '../../styles/Result.css';

class Result extends React.Component {
    constructor(){
        super();
    }
    
    render(){
        return (
            <div id="result-box" className='Result'>
                <input type="text" value={this.props.result} readOnly></input>
            </div>
        )
    }
}

export default Result;