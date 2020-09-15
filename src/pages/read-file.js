import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Toolbar from '../components/Toolbar/Toolbar';
import FileSelector from '../components/FileSelector/FileSelector'


class ReadFilePage extends Component {
    state = {
        redirect: false,
        fileContent: null,
        fileName: null
    }

    deleteCommentsHandler = () => {
        this.setState({
            redirect: true,
        });
    }

    onChange = (e) => {
        let file = e.target.files[0];
        if (file.name.toString().endsWith('.txt')) {
            let reader = new FileReader();
            reader.readAsText(file);
            reader.onload = (e) => {
                this.setState({
                    fileContent: e.target.result,
                    fileName: file.name
                });
                console.log(this.state.fileName)
                console.log(this.state.fileContent)
            }
        }
        else {
            alert('File extention does not supported!\nChoose .txt file.')
        }
    }

    pageContent = () => {
        if (this.state.redirect) {
            return (<Redirect to={{
                pathname: '/output',
                state: {
                    fileName: this.state.fileName,
                    fileContent: this.state.fileContent
                }
            }} />)
        }
        else {
            return (
                <div>
                    <Toolbar />
                    <FileSelector deleteCommentsHandler={this.deleteCommentsHandler}
                    onChange={this.onChange}
                    fileContent={this.state.fileContent}
                    fileName={this.state.fileName}
                    />
                    
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                {this.pageContent()}
            </div>
        );
    };
};

export default ReadFilePage;