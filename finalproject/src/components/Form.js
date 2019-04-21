import React from 'react';

const Form = props => (
    <form onSubmit={props.getData}>
        <input type="text" name="movie" placeholder="Movie.."/>
        <button>Find Movie</button>
    </form>
)

export default Form