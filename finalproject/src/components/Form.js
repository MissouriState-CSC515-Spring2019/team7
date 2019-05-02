import React from 'react';

const Form = props => (
    <form onSubmit={props.getMovies} style={{marginBottom:"2rem"}}>
        <input className="form__input" type="text" name="movie" placeholder="Movie.."/>
        <button className="form__button">Find Movies</button>
    </form>
)

export default Form