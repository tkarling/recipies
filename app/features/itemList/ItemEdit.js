import React from "react";
var classNames = require('classnames');
import ItemActions from '../../stores/ItemActions';
import AisleDropdown from './AisleDropdown';
import Button from '../../components/Button';

var ESCAPE_KEY = 27;
var ENTER_KEY = 13;

function copyItem(itemFrom) {
    var itemTo = {};
    for(var prop in itemFrom) {
        itemTo[prop] = itemFrom[prop];
    }
    return itemTo;
}


class ItemEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: copyItem(props.item.item)
        }
    }

    handleSubmit(event) {
        ItemActions.saveItem(this.props.item, this.state.item);
        this.props.toggleEditing();
    }

    handleKeyDown(event) {
        if (event.which === ESCAPE_KEY) {
            this.props.toggleEditing();
        } else if (event.which === ENTER_KEY) {
            this.handleSubmit(event);
        }
    }

    handleAmountChange(event) {
        var item = this.state.item;
        item.amount = event.target.value;
        this.setState({
            item: item
        });
    }

    handleUnitChange(event) {
        var item = this.state.item;
        item.unit = event.target.value;
        this.setState({
            item: item
        });
    }

    handleProductChange(event) {
        var item = this.state.item;
        item.product = event.target.value;
        this.setState({
            item: item
        });

    }

    handleAisleChange(value) {
        var item = this.state.item;
        item.aisle = value;
        this.setState({
            item: item
        });

    }

    render() {
        return (
            <div className="item-line panel panel-default list-group-item">
                <span className="input-group">
                    <div className="form-inline">
                        <div className="align-left">
                            <div className="form-group">
                                <input type="text" className="form-conrol width-10" placeholder="Amount"
                                       value={this.state.item.amount}
                                       onChange={this.handleAmountChange.bind(this)}
                                       onKeyDown={this.handleKeyDown.bind(this)}/>
                                <input type="text" className="form-conrol width-20 margin-left" placeholder="Unit"
                                       value={this.state.item.unit}
                                       onChange={this.handleUnitChange.bind(this)}
                                       onKeyDown={this.handleKeyDown.bind(this)}/>
                                <input type="text" className="form-conrol width-60 margin-left" placeholder="Name"
                                       value={this.state.item.product}
                                       onChange={this.handleProductChange.bind(this)}
                                       onKeyDown={this.handleKeyDown.bind(this)}/>
                            </div>
                            <div className="form-group">
                                <span className="form-conrol width-40">
                                    <AisleDropdown value={this.state.item.aisle}
                                                   handleAisleChange={this.handleAisleChange.bind(this)}/>
                                </span>
                                <span className="width-40">{this.state.item.recipe}</span>
                            </div>
                        </div>
                    </div>
                </span>
                <span className="input-group-addon">
                    <Button type="ok" handleClick={this.handleSubmit.bind(this)}/>
                </span>
            </div>
        );
    }

}

export default ItemEdit;