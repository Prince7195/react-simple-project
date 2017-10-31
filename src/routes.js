import React from 'react';

import { Route, Redirect, IndexRoute } from 'react-route';

import c from './components';

const routes = 
<Route>
    <Redirect from="/" to="/contacts" />
    <Route path="contacts" component={c.App}>
        <IndexRoute component={c.Collection} />
        <Route path=":contactId" component={c.Show} />
    </Route>
</Route>    

export default routes;