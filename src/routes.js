/**
 * Created by mostofa on 11/12/15.
 */
import React from 'react';
import {Route} from 'react-router';

import App from './components/App';

import {Auth} from './components/Auth';

const routes = <Route component={App}>
    <Route path="login" component={Auth}/>
</Route>;


export default routes;
