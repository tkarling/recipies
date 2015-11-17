import React from "react";
import AisleStore from '../../stores/AisleStore';


class AisleDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state =  {
            aisles: AisleStore.getAisles(),
            currentValue: this.props.value
        }
    }

    onAislesChange() {
        this.setState({
            items: AisleStore.getAisles()
        });
    }

    componentDidMount() {
        AisleStore.addChangeListener(this.onAislesChange.bind(this));
    }

    componentWillUnmount() {
        AisleStore.removeChangeListener(this.onAislesChange.bind(this));
    }

    handleChange(event) {
        this.setState({
            currentValue: event.target.value
        });
        this.props.handleAisleChange(event.target.value);
    }

    getAisleElement(aisle) {
            return <option value={aisle.id} key={aisle.id}>{aisle.name}</option>;
    }

    render() {
        var aisleLineElements = this.state.aisles.map(this.getAisleElement.bind(this));

        return (<span className="aisle-dropdown">
                <select value={this.state.currentValue} onChange={this.handleChange.bind(this)}>
                    {aisleLineElements}
                </select>
            </span>
        );
    }
}

export default AisleDropdown;