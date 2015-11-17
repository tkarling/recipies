import React from "react";
var classNames = require('classnames');
import ItemActions from '../../stores/ItemActions';
import ItemEdit from './ItemEdit';
import AisleStore from '../../stores/AisleStore';
import Button from '../../components/Button';



class ItemLine extends React.Component {
    constructor() {
        super();
        this.state = {
            editing: false
        }
    }

    toggleEditing() {
        this.setState({
            editing: !this.state.editing
        });
    }

    conditionalSpan(value) {
        return value ? <span className="padding-left">{value}</span> : "";
    }

    getAisleName() {
        var aisleName =  AisleStore.getAisleName(this.props.item.aisle);
        return aisleName;
    }

    deleteItem(item) {
        ItemActions.deleteItem(item);
    }

    nonEditableItem() {
        var lineThroughableGroupClass = classNames({
            'input-group': true,
            'completed': this.props.item.bought
        });
        var aisleColorClass = classNames({
            'text-primary': !this.props.item.bought
        });
        var deleteButtonClass = classNames({
            'input-group-addon': true,
            'hidden': ! this.props.showDeleting
        });
        return (
            <div className="item-line list-group-item">
                <div className={lineThroughableGroupClass}>
                    <span className="input-group-addon">
                        <input type="checkbox"
                               checked={this.props.item.bought}
                               onChange={ItemActions.toggleBought.bind(this, this.props.item)}/>
                    </span>

                    <div className="padding-left line-throughable" onClick={this.toggleEditing.bind(this)}>
                        <h4 className="list-group-item-heading">
                            <span className="badge lighter">{this.props.item.id}</span>
                            <span>{this.conditionalSpan(this.props.item.amount)}</span>
                            <span>{this.conditionalSpan(this.props.item.unit)}</span>
                            <span className="padding-left">{this.props.item.product}</span>
                        </h4>

                        <p className="list-group-item-text">
                            <span className={aisleColorClass}>{this.getAisleName()}</span>
                            <span className="padding-left">{this.props.item.recipe}</span>
                        </p>
                    </div>

                    <span className={deleteButtonClass}>
                        <Button type="delete" handleClick={this.deleteItem.bind(this, this.props.item)}/>
                    </span>
                </div>
            </div>
        );
    }

    render() {
        if (!this.state.editing) {
            return this.nonEditableItem();
        } else {
            return <ItemEdit item={this.props.item} toggleEditing={this.toggleEditing.bind(this)}/>;
        }
    }

}

export default ItemLine;