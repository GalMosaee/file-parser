import React, { Component } from 'react';
const strip = require('strip-comments');

class OutputPage extends Component{
    fileReaderHandler(){
        if (!this.props.location.state.fileName||!this.props.location.state.fileContent) return null
        console.log(strip(this.props.location.state.fileContent));
        return (<div>
                <h3>{this.props.location.state.fileName}</h3>
                <textarea>{strip(this.props.location.state.fileContent)}</textarea>
            </div>
        )
    }

    render(){
        return(
            <div>
                <h1>Output File:</h1>
                {this.fileReaderHandler()}
            </div>
        );
    }
};

export default OutputPage;