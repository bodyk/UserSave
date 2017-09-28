import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Dashboard } from './Dashboard';
import { User } from './User';

export const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Dashboard}/>
      <Route path='/user' component={User}/>
    </Switch>
  </main>
)