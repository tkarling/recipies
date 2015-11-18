import AppDispatcher from './AppDispatcher';
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var items = [];
var myFirebaseRef = new Firebase("https://blinding-heat-8535.firebaseio.com/ShoppingList");

function getItemIndex(key) {
    for(var i = 0; i < items.length; i++) {
        if(key === items[i].key) {
            return i;
        }
    }
}

var nextIndex = 0;
myFirebaseRef.on("child_added", function(childSnapshot) {
    items.unshift({
        key: childSnapshot.key(),
        item: childSnapshot.val()
    });
    items[0].id = nextIndex++;
    emitChange();
});

myFirebaseRef.on('child_changed', function(childSnapshot, prevChildKey) {
    var changedItemIndex = getItemIndex(childSnapshot.key());
    items[changedItemIndex].item = childSnapshot.val();
    emitChange();
});

myFirebaseRef.on("child_removed", function(childSnapshot) {
    var changedItemIndex = getItemIndex(childSnapshot.key());
    items.splice(changedItemIndex, 1);
    emitChange();
});


function toggleBought(item) {
    saveItem(item, {
       bought: ! item.item.bought
    });
}

function addItem(item) {
    myFirebaseRef.push().set(item);
}

function deleteItem(item) {
    myFirebaseRef.child(item.key).remove();
}

function saveItem(item, newValues) {
    myFirebaseRef.child(item.key).update(newValues);
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
    if(action.type === 'add_item') {
        addItem(action.item);
    } else if(action.type === 'delete_item') {
        deleteItem(action.item);
    } else if(action.type === 'save_item') {
        saveItem(action.item, action.newValues);
    } else if(action.type === 'toggle_bought') {
        toggleBought(action.item);
    }
}

var itemStore = new ItemStore();
ItemStore.dispatchToken = AppDispatcher.register(handleAction);


export default itemStore;

