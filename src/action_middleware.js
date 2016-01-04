/**
 * Created by mostofa on 11/12/15.
 */
import {setModels, setModel} from './actions/application'
import $ from 'jquery';
import _ from 'underscore';

var ajaxConfig = {
    method: 'GET',
    dataType: 'json',
    cache: false,
}

export default store => next => action => {
    if(action.meta && action.meta.remote){
        switch (action.type){
            case "GET_MODEL_LIST":
                $.ajax(_.extend({success: function(data){
                    next(setModels(action.name, data))
                },error: function(xhr, status, err){
                    console.log(err);
                }
                }, ajaxConfig, action.meta))
                break;
            case "GET_MODEL_ITEM":
                $.ajax(_.extend({success: function(data){
                    next(setModel(action.name, data))
                },error: function(xhr, status, err){
                    console.log(err);
                }
                }, ajaxConfig, action.meta))
                break;

        }
    }
}