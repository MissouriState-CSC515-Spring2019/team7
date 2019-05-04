import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "../App";
import Movie from "./Movie";
import Movies from "./movies"


const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/' component={App} exact/>
            <Route path='/movie/:title' render={(props)=> <Movie {...props} />}/>
            <Route path='/movies/:title' component={Movies} />}/>
        </Switch>
    </BrowserRouter>
)
export default Router