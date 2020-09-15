import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Toolbar from '../components/Toolbar/Toolbar';
import 'bootstrap/dist/css/bootstrap.min.css';
const strip = require('strip-comments');


class OutputPage extends Component {
    fileReaderHandler() {
        if (!this.props.location.state.fileName || !this.props.location.state.fileContent) return null
        console.log(strip(this.props.location.state.fileContent));
        const lines = strip(this.props.location.state.fileContent)
            .replace(/( |\t)*(\r\n|\r|\n)/g, '\n')
            .split(/(\r\n|\r|\n)+/)
            .map((line, index) => {
                if(line==='\n'||line==='\r'||line==='\r\n') {return null;}
                return <Card.Body key={index}>{line}</Card.Body>
            })
        return (
            <Card>
                <Card.Header>{this.props.location.state.fileName}</Card.Header>
                {lines}
            </Card>
        )
    }

    render() {
        return (
            <div>
                <Toolbar />
                {this.fileReaderHandler()}
            </div>
        );
    }
};

export default OutputPage;