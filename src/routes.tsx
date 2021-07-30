import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
import TasksForm from './Pages/TasksForm';
import Tasks from './Pages/Tasks';
import CurrentUserTasks from './Pages/CurrentUserTasks';
import UserForm from './Pages/UserForm';
import EditUserForm from './Pages/EditUserForm';
import Users from './controllers/Users';


function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Users}/>
            <Route path="/users" component={Users}/>
            <Route path="/user-form" component={UserForm}/>
            <Route path="/edit-user-form" component={EditUserForm}/>
            <Route path="/tasks" component={Tasks}/>
            <Route path="/tasks-form" component={TasksForm}/>
            <Route path="/current-user-tasks" component={CurrentUserTasks}/>
            <Route path="*" component={() => <h1>Page not found</h1>} />
        </Switch>
    )
}

export default Routes;