/**
 * Created by mostofa on 11/12/15.
 */
import {Map, List} from 'immutable';

function setState(state, newState){
    return state.merge(newState)
}

function setModels(state, name, items){
    return state.setIn(['models', name], items);
}

function setModel(state, name, item){
    return state.setIn(['models', name], item);
}

export default function reducer(state = Map(), action){
    switch (action.type){
        case 'SET_STATE':
            return setState(state, action.state);
        case 'SET_MODEL_ITEM':
            return setModel(state, action.name, action.item)
        case 'SET_MODEL_LIST':
            return setModels(state, action.name, action.items);

    }
    return state;
}


