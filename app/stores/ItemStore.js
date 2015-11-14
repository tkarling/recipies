import AppDispatcher from './AppDispatcher';
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var tweet = null;

function addItem(item) {
    console.log("adding item", item);
}

function emitChange() {
    itemStore.emit(CHANGE_EVENT);
}

class ItemStore extends EventEmitter {
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListene(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

    getItems () {
        return [{
            id: 1,
            product: 'milk',
            aisle: 'dairy',
            amount: 2,
            recipe: 'favorites'
        }, {
            id: 2,
            product: 'bread',
            aisle: 'bakery',
            amount: 1,
            recipe: 'favorites'
        }, {
            id: 3,
            product: 'eggs',
            aisle: 'dairy',
            amount: 1,
            recipe: 'favorites'
        }];
    }
};


function handleAction(action) {
    if(action.type === 'add_item') {
        addItem(action.item);
        emitChange();
    }
}

var itemStore = new ItemStore();
ItemStore.dispatchToken = AppDispatcher.register(handleAction);

export default itemStore;