import React, { Component, Fragment } from 'react';
class posts extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            posts : [],
         };
    }

    componentDidMount(){

        window.fetch('https://jsonplaceholder.typicode.com/posts')
        .then((data) => {
            data.json()
            .then((res) =>{
               this.setState({posts: res.posts});
            })
            .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
    }
    render() {
        return ( 
            <Fragment>
                
            </Fragment>
         );
    }
}
 
export default posts;