import AppDispatcher from './AppDispatcher';
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var items = [{
    id: 1,
    product: 'milk',
    aisle: 1,
    amount: 2,
    recipe: 'favorites',
    unit: 'gallons',
    bought: true
}, {
    id: 2,
    product: 'very long name of a product this is',
    aisle: 2,
    amount: 1,
    recipe: 'favorites',
    bought: false
}, {
    id: 3,
    product: 'eggs',
    aisle: 1,
    amount: 1,
    recipe: 'favorites',
    unit: 'dozen',
    bought: false
}];

function toggleBought(item) {
    item.bought = ! item.bought;
}

var nextIndex = items.length + 1;
function addItem(item) {
    item.id = nextIndex++;
    items.unshift(item);
}

function deleteItem(item) {
    for(var i = 0; i < items.length; i++) {
        if(item.id === items[i].id) {
            items.splice(i, 1);
            return;
        }
    }
}

function saveItem(item, newValues) {
    for(var prop in newValues) {
        item[prop] = newValues[prop];
    }
}

function emitChange() {
    itemStore.emit(CHANGE_EVENT);
}


class ItemStore extends EventEmitter {
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

    getItems () {
        return items;
    }
};


function handleAction(action) {
    //console.log("handleAction", action.type);
    if(action.type === 'add_item') {
        addItem(action.item);
        emitChange();
    } else if(action.type === 'delete_item') {
        deleteItem(action.item);
        emitChange();
    } else if(action.type === 'save_item') {
            saveItem(action.item, action.newValues);
            emitChange();
    } else if(action.type === 'toggle_bought') {
        toggleBought(action.item);
        emitChange();
    }
}

var itemStore = new ItemStore();
ItemStore.dispatchToken = AppDispatcher.register(handleAction);


export default itemStore;

 //following for testing
//function logItems() {
//    items.forEach((item) => {
//       console.log(item.product);
//    });
//}
//
//console.log("itemStore before");
//logItems();
//addItem({product:"apples", amount: 1});
//console.log("itemStore after");
//logItems();
