import './ItemList.scss';

import React from "react";

import ItemLine from './ItemLine';
import Button from '../../components/Button';

import ItemStore from '../../stores/ItemStore';
import ItemActions from '../../stores/ItemActions';



class ItemList extends React.Component {
    constructor() {
        super();
        this.state = {
            items: ItemStore.getItems(),
            showDeleting: false,
            speech: false
        }
    }

    toggleDeleting() {
        this.setState({
            showDeleting: ! this.state.showDeleting
        });
    }

    toggleSpeech() {
        this.setState({
            speech: ! this.state.speech
        });
    }

    addItem() {
        ItemActions.addItem({
           product: 'product'
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
        return (
            <div className="" key={item.id}>
                <ItemLine item={item} showDeleting={this.state.showDeleting} speech={this.state.speech}/>
            </div>
        );
    }

    render() {
        //console.log("ItemList items", this.state.items);
        var itemLineElements = this.state.items.map(this.getLineElement.bind(this));

        return (
            <div className="item-list">
                <h3>
                    Shopping List
                    <Button type="microphone" handleClick={this.toggleSpeech.bind(this)}/>
                    <Button type="add" handleClick={this.addItem.bind(this)}/>
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
