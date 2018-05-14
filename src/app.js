import React, { Component } from "react";
import { Header, Content, Sidebar } from "./portfolio";

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="row">
                    <Sidebar/>
                    <Content/>
                </div>
            </div>
        );
    }
}

export default App;
