import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';

class NewPost extends Component {
    state = {
        title: '',
        body: '',
        author: 'Anurag'
    }

    postDataHandler = () => {
        const dataToPost = {
            title: this.state.title,
            body: this.state.body,
            author: this.state.author
        }

        axios.post("/posts", dataToPost)
            .then(response => {
                console.log(response);
            })
    }

    

    render() {
        return (
            <div>
                <Alert variant="primary">Add a new post</Alert>
                <input type="text" value={this.state.title} onChange={(event)=>this.setState({title: event.target.value})}/>
                <input type="text" value={this.state.author} onChange={(event)=>this.setState({author: event.target.value})}/>
                <input type="text" value={this.state.body} onChange={(event)=>this.setState({body: event.target.value})}/>
                <Button onClick={this.postDataHandler}>Post</Button>
            </div>
        );
    }
}

export default NewPost;