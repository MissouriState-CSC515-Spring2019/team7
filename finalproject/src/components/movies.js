import React, { Component } from 'react';

class Movies extends Component{
    render(){
        return(
            <div className="movieData">
                <p className="movie_value">Title: {this.props.title}</p>
                <p className="movie_value">Release Date: {this.props.releaseDate}</p>
                <p className="movie_value">Description: {this.props.description}</p>

            </div>
        )

    }
   
}
export default Movies
