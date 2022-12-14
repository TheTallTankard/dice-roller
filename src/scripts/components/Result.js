import React from 'react';
import '../../styles/Result.css';

class Result extends React.Component {
    constructor(){
        super();
    }
    
    render(){
        let resultBoxText = this.props.breakdown + " = " + this.props.result;
        return (
            <div id="result-box" className='Result'>
                <textarea readOnly rows="10"
                 value={resultBoxText} ></textarea>
            </div>
        )
    }
}

export default Result;