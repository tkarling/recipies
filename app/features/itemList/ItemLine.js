import React from "react";
//import Home from './features/home/home';

class ItemLine extends React.Component {
    conditionalSpan(value) {
        return value ? <span className="padding-left">{value}</span> : "";
    }

    render() {
        console.log("ItemLine", this.props.item);
        return (
            <div className="item-line list-group-item">
                <h4 className="list-group-item-heading">
                    <span className="badge lighter">{this.props.item.id}</span>
                    <span>{this.conditionalSpan(this.props.item.amount)}</span>
                    <span>{this.conditionalSpan(this.props.item.unit)}</span>
                    <span className="padding-left">{this.props.item.product}</span>
                </h4>
                <p className="list-group-item-text">
                    <span className="text-primary">{this.props.item.aisle}</span>
                    <span className="padding-left">{this.props.item.recipe}</span>
                 </p>
            </div>
        );
    }
}

export default ItemLine;