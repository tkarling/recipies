import AppDispatcher from './AppDispatcher';
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var items = [{
    id: 1,
    product: 'milk',
    aisle: 'dairy',
    amount: 2,
    recipe: 'favorites',
    unit: 'gallons',
    bought: true
}, {
    id: 2,
    product: 'bread',
    aisle: 'bakery',
    amount: 1,
    recipe: 'favorites',
    bought: false
}, {
    id: 3,
    product: 'eggs',
    aisle: 'dairy',
    amount: 1,
    recipe: 'favorites',
    unit: 'dozen',
    bought: false
}];

function toggleBought(item) {
    item.bought = ! item.bought;
}

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
        return items;
    }
};


function handleAction(action) {
    if(action.type === 'add_item') {
        addItem(action.item);
        emitChange();
    } else if(action.type === 'toggle_bought') {
        toggleBought(action.item);
        emitChange();
    }
}

var itemStore = new ItemStore();
ItemStore.dispatchToken = AppDispatcher.register(handleAction);

export default itemStore;