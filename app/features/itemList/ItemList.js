import './ItemList.scss';

import React from "react";
import ItemLine from './ItemLine';
import ItemStore from '../../stores/ItemStore';

class ItemList extends React.Component {
    constructor() {
        super();
        this.state = {
            items: ItemStore.getItems()
        }
    }

    onItemsChange() {
        this.setState({
            items: ItemStore.getItems()
        });
    }

    componentDidMount() {
        ItemStore.addChangeListener(this.onItemsChange.bind(this));
    }

    componentWillUnmount() {
        ItemStore.removeChangeListener(this.onItemsChange.bind(this));
    }

    getLineElement (item) {
        return <div className="" key={item.id}><ItemLine item={item}/></div>
    }

    render() {
        //console.log("ItemList items", this.state.items);
        var itemLineElements = this.state .items.map(this.getLineElement.bind(this));

        return (
            <div className="item-list">
                <h1>Hello from Item List</h1>
                <div className="list-group">
                    {itemLineElements}
                </div>
            </div>
        );
    }
}

export default ItemList;
