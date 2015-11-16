import React from "react";
var classNames = require('classnames');
import ItemActions from '../../stores/ItemActions';

var ESCAPE_KEY = 27;
var ENTER_KEY = 13;

class ItemEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state =  {
                editAmount: props.item.amount,
                editUnit: props.item.unit,
                editProduct: props.item.product,
                editAisle: props.item.aisle,
        }
    }

    handleSubmit(event) {
        ItemActions.saveItem(this.props.item, {
            amount: this.state.editAmount,
            unit: this.state.editUnit,
            product: this.state.editProduct,
            aisle: this.state.editAisle
        });
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
        this.setState({
            editAmount: event.target.value
        });
    }

    handleUnitChange(event) {
        this.setState({
            editUnit: event.target.value
        });
    }

    handleProductChange(event) {
        this.setState({
            editProduct: event.target.value
        });
    }

    handleAisleChange(event) {
        this.setState({
            editAisle: event.target.value
        });
    }

    render() {
        return (<div className="item-line">
                <form className="form-inline panel panel-default">
                    <div className="align-left">
                        <div className="form-group">
                            <input type="text" className="form-conrol width-10" placeholder="Amount"
                                   value={this.state.editAmount}
                                   onChange={this.handleAmountChange.bind(this)} onKeyDown={this.handleKeyDown.bind(this)}/>
                            <input type="text" className="form-conrol width-20 margin-left" placeholder="Unit"
                                   value={this.state.editUnit}
                                   onChange={this.handleUnitChange.bind(this)} onKeyDown={this.handleKeyDown.bind(this)}/>
                            <input type="text" className="form-conrol width-60 margin-left" placeholder="Name"
                                   value={this.state.editProduct}
                                   onChange={this.handleProductChange.bind(this)} onKeyDown={this.handleKeyDown.bind(this)}/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-conrol width-40" placeholder="Aisle"
                                   value={this.state.editAisle}
                                   onChange={this.handleAisleChange.bind(this)} onKeyDown={this.handleKeyDown.bind(this)}/>
                            <span className="padding-left width-40">{this.props.item.recipe}</span>
                            <button type="button" className="btn btn-success" onClick={this.handleSubmit.bind(this)}>
                                <span className="glyphicon glyphicon-ok" aria-hidden="true"></span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }

}

export default ItemEdit;