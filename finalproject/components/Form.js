import React from 'react';

const Form = props => (
    <form onSubmit={props.getMovie}>
        <input type="text" name="movie" placeholder="Movie.."/>
        <button>Find Movies</button>
    </form>
)

export default Form