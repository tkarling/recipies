import React from "react";
import ItemList from './features/itemList/ItemList';

class Application extends React.Component {
    render() {
        return (
            <div className="application">
                Hello, {this.props.name}!
                <ItemList />
            </div>
        );
    }
}

export default Application;
