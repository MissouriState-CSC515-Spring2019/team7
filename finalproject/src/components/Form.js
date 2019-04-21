import React, { Component } from 'react';

class Form extends Component{
    render(){
        return(
            <form onSubmit={this.props.getData}>
                <input type="text" name="movie" placeholder="Movie.."/>
                <button>Find Movie</button>
            </form>
        )
    }

}

export default Form