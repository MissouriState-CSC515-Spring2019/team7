import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

class Form extends Component {
    state = {
        query: undefined
    }
    onSubmit = async (e) => {
        e.preventDefault()
        this.props.history.push(`/movies/${e.target.elements.movie.value}`)
    }
    render(){
        return(
            <form onSubmit={this.onSubmit} style={{marginBottom:"2rem"}}>
                <input 
                className="form__input" 
                type="text" 
                name='movie'
                required 
                value={this.state.query} 
                placeholder="Movie.."
                />
                <button className="form__button" >Find Movies</button>
            </form>
            
        )
    }

}


export default withRouter(Form)