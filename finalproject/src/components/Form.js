import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

class Form extends Component {
    state = {
        title: undefined,
        isValidated: false
    }

    validate = (title) => {
        const errors = [];

        if (title.length === 0){
            errors.push("Search can't be empty")
        }

        return errors


    }
   
    onSubmit = async(e) => {
        //e.preventDefault()
        const title = e.target.movie
        this.setState({
            [title]: e.target.value
        })
        
        this.props.history.push(`/movies/${e.target.elements.movie.value}`)
    }

    render(){
        return(
            <form onSubmit={this.onSubmit} style={{marginBottom:"2rem"}}>
                <input className="form__input" type="text" name='movie' value={this.state.title} placeholder="Movie.."/>
                <button className="form__button" >Find Movies</button>
            </form>
            
        )
    }

}


export default withRouter(Form)