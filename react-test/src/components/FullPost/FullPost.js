import React, { Component } from 'react';
import axios from 'axios';

class FullPost extends Component {
state={
    fullPost: null,
    error: false
}
    componentDidUpdate(){
        if(this.props.id){
            if(!this.state.fullPost || (this.state.fullPost && this.state.fullPost.id !== this.props.id)){
                //debugger;
                //console.log("Fullpost id: "+this.state.fullPost.id);
            //console.log("Props id: "+this.props.id);
                axios.get("/posts/"+this.props.id)
                .then(response=>{
                    console.log(response.data);
                    this.setState({fullPost: response.data});
                })
                .catch(error=>{
                    this.setState({error: true});
                })
            }
        }
        
    }

    render(){
        let post = <p>Something went wrong</p>
        if (!this.state.error){
            post =<p>Please select one post from the grid</p>;
        
        if (this.props.id && this.state.fullPost){
            post = (
<div>
                <label>
                     {this.state.fullPost.title} 
                </label>
                
            </div>
            );
        }
    }
        return(
            <div>
 {post}
            </div>
           
        );
    }
    
}

export default FullPost;