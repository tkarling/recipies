import './ItemList.scss';

import React from "react";
import ItemLine from './ItemLine';
import ItemStore from '../../stores/ItemStore';

class ItemList extends React.Component {
    getLineElement (item) {
        //var tweet = this.props.tweets[tweetId];
        //var handleRemoveTweetFromCollection = this.removeTweetFromCollection;
        var tweetElement;

        //if (handleRemoveTweetFromCollection) {
        //    tweetElement = (
        //        <Tweet
        //            tweet={tweet}
        //            onImageClick={handleRemoveTweetFromCollection}/>
        //    );
        //} else {
        //    tweetElement = <Tweet tweet={tweet}/>
        //}
        return <div className="" key={item.id}><ItemLine item={item}/></div>
    }

    render() {
        var items = ItemStore.getItems();
        console.log("ItemList items", items);
        var itemLineElements = items.map(this.getLineElement.bind(this));

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
