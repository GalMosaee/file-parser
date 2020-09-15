import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

class ReadFilePage extends Component {
    state = {
        redirect: false,
        fileContent: null,
        fileName: null
    }
    
    deleteCommentsHandler =()=>{
        this.setState({
            redirect: true,
        });
    }

    onChange=(e)=>{
        let file=e.target.files[0];
        if(file.name.toString().endsWith('.txt')){
            let reader = new FileReader();
            reader.readAsText(file);
            reader.onload=(e)=>{
                this.setState({
                    fileContent: e.target.result,
                    fileName: file.name
                });
                console.log(this.state.fileName)
                console.log(this.state.fileContent)
            }
        }
        else{
            alert('File extention does not supported!\nChoose .txt file.')
        }
    }

    isFileLoaded=()=>{
        if(!this.state.fileName||!this.state.fileContent){
            return (<input type="file" name="file" onChange={(e)=>this.onChange(e)}/>)
        }
        else{
            return (
            <div>
                <button onClick={()=>this.deleteCommentsHandler()}>Delete Comments</button>
            </div>    
            )
        }
    }

    pageContent=()=>{
        if(this.state.redirect){
            return (<Redirect to={{
                pathname: '/output',
                state: {
                    fileName: this.state.fileName,
                    fileContent: this.state.fileContent
                }
            }}/>)
        }
        else{
            return(
                <div>
                    <h1>Welcom to Remove Comments App</h1>
                    <h1>Please choose file</h1>
                    {this.isFileLoaded()}
                </div>
            )
        }
    }

    render(){
        return(
            <div>
                {this.pageContent()}
            </div>
        );
    };
};

export default ReadFilePage;