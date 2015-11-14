import React from "react";
//import Home from './features/home/home';

class ItemLine extends React.Component {
    render() {
        console.log("ItemLine", this.props.item);
        return (
            <div className="item-line">
                <div>
                    {this.props.item.amount} {this.props.item.product}
                </div>
                <div>
                    {this.props.item.aisle} {this.props.item.recipe}
                </div>

            </div>
        );
    }
}

export default ItemLine;