import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { SortableDashboard } from './sortable-dashboard/SortableDashboard';
import { User } from './User';

export const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={SortableDashboard}/>
      <Route path='/user' component={User}/>
    </Switch>
  </main>
)