import './ItemList.scss';

import React from "react";
import ItemLine from './ItemLine';
import ItemStore from '../../stores/ItemStore';
import Button from '../../components/Button';


class ItemList extends React.Component {
    constructor() {
        super();
        this.state = {
            items: ItemStore.getItems(),
            showDeleting: false
        }
    }

    toggleDeleting() {
        this.setState({
            showDeleting: ! this.state.showDeleting
        });
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
        return <div className="" key={item.id}><ItemLine item={item} showDeleting={this.state.showDeleting}/></div>
    }

    render() {
        //console.log("ItemList items", this.state.items);
        var itemLineElements = this.state.items.map(this.getLineElement.bind(this));

        return (
            <div className="item-list">
                <h3>
                    Shopping List
                    <Button type="delete" handleClick={this.toggleDeleting.bind(this)}/>
                </h3>
                <div className="list-group">
                    {itemLineElements}
                </div>
            </div>
        );
    }
}

export default ItemList;
