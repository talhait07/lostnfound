/**
 * Created by mostofa on 11/12/15.
 */
import {Map} from 'immutable';
import {combineReducers} from 'redux';
import app from './reducers/application'
import createNew from './reducers/createNew'

export default combineReducers({app, createNew})