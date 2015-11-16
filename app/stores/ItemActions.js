import AppDispatcher from './AppDispatcher';

export default class ItemActions {
    static toggleBought(item) {
        var action = {
            type: 'toggle_bought',
            item: item
        };

        AppDispatcher.dispatch(action);
    }

    static addItem(item) {
        var action = {
            type: 'add_item',
            item: item
        };

        AppDispatcher.dispatch(action);
    }

};