import React from "react";
import Home from './features/home/home';

class Application extends React.Component {
    render() {
        return (
            <div className="application">
                Hello, {this.props.name}!
                <Home />
            </div>
        );
    }
}

export default Application;
