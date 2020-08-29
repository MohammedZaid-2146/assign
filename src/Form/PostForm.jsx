/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-duplicate-props */
import React, { Component, Fragment } from 'react';
class postform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title : "",
            details : "",
        };
        this.SearchhandleChange = this.SearchhandleChange.bind(this);
        this.SearchhandleSubmit = this.SearchhandleSubmit.bind(this);
    }

    SearchhandleChange(e) {
        this.setState = ({[e.target.name]:e.target.value});
    }

    SearchhandleSubmit(e){
        e.preventDefault();
        let posts ={
            title : this.state.title,
            details : this.state.details,
        };
        
        window.fetch('https://jsonplaceholder.typicode.com/posts',{
            method : 'POST',
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify(Posts),
        })
        .then((data) => {
            data.json().then(res =>{})
            
            .catch(err => console.log(err))   
        })
        .catch((err) => console.log(err));
    }
    render() { 
        return ( 
            <Fragment>
                <h4>Post Form</h4>
                <form onSubmit={this.SearchhandleSubmit}>
                    <div>
                        <input type="Text" placeholder="Title" 

                        name = "title"
                        value = {this.state.title.value}
                        onChange = {this.SearchhandleChange}
                        required/>
                    </div>

                    <div>
                        <textarea 
                           id="details" 
                           cols="30" 
                           rows="10"

                           name = "details"
                           value = {this.state.details.value}
                           onChange = {this.SearchhandleChange}
                           required>

                        </textarea>
                    </div>

                    <div>
                        <button>Add post</button>
                    </div>
                </form>
            </Fragment>
         );
    }
}
 
export default postform;

