import React from "react";

class Button extends React.Component {

    buttonOK() {
        return (
            <button type="button" className="btn btn-success btn-sm" onClick={this.props.handleClick}>
                <span className="glyphicon glyphicon-ok" aria-hidden="true"></span>
            </button>
        );
    }

    buttonDelete() {
        return (
            <button type="button" className="btn btn-danger btn-xs" onClick={this.props.handleClick}>
                <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
            </button>
        );
    }

    buttonAdd() {
        return (
            <button type="button" className="btn btn-primary btn-xs" onClick={this.props.handleClick}>
                <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
            </button>
        );
    }

    render() {
        if(this.props.type === 'ok') {
            return this.buttonOK();
        } else if(this.props.type === 'delete') {
                return this.buttonDelete();

        } else if(this.props.type === 'add') {
            return this.buttonAdd();
        }
    }
}

export default Button;
