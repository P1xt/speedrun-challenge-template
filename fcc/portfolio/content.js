import React from "react";
import { Switch, Route } from "react-router-dom";
import { TributePage } from "../frontend/tribute-page";
import { Home } from "./home";


export default function Content() {
    return (
        <div className="container-fluid col-sm-10">
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/tribute-page" component={TributePage}/>
            </Switch>
        </div>


    );
}
