import AppDispatcher from './AppDispatcher';
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var aisles = [{id: 0, name: 'unknown'},
    {
        id: 1,
        name: 'produce'
    }, {
        id: 2,
        name: 'dairy'
    }, {
        id: 3,
        name: 'protein'
    }, {
        id: 4,
        name: 'bakery'
    }];

function addAisle(aisle) {
    console.log("adding aisle", aisle);
}

function emitChange() {
    aisleStore.emit(CHANGE_EVENT);
}


class AisleStore extends EventEmitter {
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

    getAisles() {
        return aisles;
    }

    getAisleName(id) {
        var result = aisles.reduce((acc, cur, index, arr) => {
            return (cur.id == id) ? cur.name : acc;
        }, aisles[0].name);
        return result;
    }
}



function handleAction(action) {
    if (action.type === 'add_aisle') {
        addAisle(action.aisle);
        emitChange();
    }
}

var aisleStore = new AisleStore();
AisleStore.dispatchToken = AppDispatcher.register(handleAction);

export default aisleStore;