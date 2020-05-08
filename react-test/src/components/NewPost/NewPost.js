import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';
import Input from '../UI/Input/Input';

const initialState = {
        title: '',
        body: '',
        author: '',
        titleError:'',
        autorError:'',
        bodyError: '',
        showSpinner:false
}
class NewPost extends Component {
    state = initialState;

    validateForErrors = ()=>{

        if(this.state.title === ''){
            this.setState({titleError: 'Title is required'});
            return false;
        }

        return true;

    }

    postDataHandler = (event) => {
        event.preventDefault(); // to prevent form refresh
        const isValid = this.validateForErrors();
        if(isValid){
            const dataToPost = {
                title: this.state.title,
                body: this.state.body,
                author: this.state.author
            }
            
            this.setState({showSpinner: true});
            axios.post("/posts", dataToPost)
                .then(response => {
                    console.log(response);
                    //not required since set state is returned to initial state
                    //this.setState({showSpinner: false});
                    // clear the form on sucess validation and post
                this.setState(initialState);
                })
                .catch(error=>{
                    alert(error);
                });
            }
    }    

    render() {
        let spinnerDiv=null;
        if(this.state.showSpinner){
            spinnerDiv = (<Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>);
        }
        return (
            <div>
                <Alert variant="primary">Add a new post</Alert>
                {spinnerDiv}
                <form onSubmit={this.postDataHandler}>
                <Input inputtype="input" type="text" placeolder="Enter input"  label="Enter title" value={this.state.title} onChange={(event)=>this.setState({title: event.target.value})}/>
                <div style={{color: 'red'}}>
                    {this.state.titleError}
                </div>
                <Input inputtype="input" type="text" placeolder="Enter input" label="Enter author" value={this.state.author} onChange={(event)=>this.setState({author: event.target.value})}/>
                <Input inputtype="textarea" type="textarea" placeolder="Enter input" label="Enter body" value={this.state.body} onChange={(event)=>this.setState({body: event.target.value})}/>
                <Button type="submit">Post</Button>
                </form>
            </div>
        );
    }
}

export default NewPost;