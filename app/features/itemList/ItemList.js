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
        return <li key={item.id}><ItemLine item={item}/></li>
    }

    render() {
        var items = ItemStore.getItems();
        console.log("ItemList items", items);
        var itemLineElements = items.map(this.getLineElement.bind(this));

        return (
            <div className="item-list">
                Hello from Item List
                <ul>
                    {itemLineElements}
                </ul>
            </div>
        );
    }
}

export default ItemList;
