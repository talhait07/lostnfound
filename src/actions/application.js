/**
 * Created by mostofa on 11/12/15.
 */
import {Map} from 'immutable';
import _ from 'underscore';

export function setState(state) {
    return {
        type: 'SET_STATE',
        state: state
    };
}

export function setModels(modelName, items){
    return {
        type: 'SET_MODEL_LIST',
        name: modelName,
        items: items
    }
}

export function getModels(action){
    var action = _.extend({type:"GET_MODEL_LIST"},action);
    action.meta.remote = true;
    return action
}

export function setModel(modelName, item){
    return {
        type: 'SET_MODEL_ITEM',
        name: modelName,
        item: item
    }
}

export function getModel(action){
    var action = _.extend({type:"GET_MODEL_ITEM"},action);
    action.meta.remote = true;
    return action;
}