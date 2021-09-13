import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Github from './Components/Github';
import Linkedin from './Components/LinkedIn';

const MainRouter = () => (
    <div>
        <Switch>
            <Route exact path="/github" component = {Github}></Route>
            <Route exact path="/linkedin" component = {Linkedin}></Route>
        </Switch>
    </div>
)

export default MainRouter;