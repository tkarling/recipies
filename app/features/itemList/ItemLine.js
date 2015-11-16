import React from "react";
var classNames = require('classnames');
import ItemActions from '../../stores/ItemActions';

//import Home from './features/home/home';

class ItemLine extends React.Component {
    conditionalSpan(value) {
        return value ? <span className="padding-left">{value}</span> : "";
    }

    render() {
        var lineThroughableGroupClass = classNames({
            'input-group': true,
            'completed': this.props.item.bought});
        var aisleColorClass = classNames({
            'text-primary': ! this.props.item.bought});
        return (
            <div className="item-line list-group-item">
                <div className={ lineThroughableGroupClass }>
                    <span className="input-group-addon">
                        <input type="checkbox"
                               checked={this.props.item.bought}
                               onChange={ItemActions.toggleBought.bind(this, this.props.item)}/>
                    </span>
                    <div className="padding-left">
                        <h4 className="list-group-item-heading line-throughable">
                            <span className="badge lighter">{this.props.item.id}</span>
                            <span>{this.conditionalSpan(this.props.item.amount)}</span>
                            <span>{this.conditionalSpan(this.props.item.unit)}</span>
                            <span className="padding-left">{this.props.item.product}</span>
                        </h4>
                        <p className="list-group-item-text line-throughable">
                            <span className={aisleColorClass}>{this.props.item.aisle}</span>
                            <span className="padding-left">{this.props.item.recipe}</span>
                         </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ItemLine;