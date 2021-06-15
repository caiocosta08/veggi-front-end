import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
import Transactions from './Pages/Transactions';
import ConsultationForm from './Pages/ConsultationForm';
import Consultations from './Pages/Consultations';
import LessonForm from './Pages/LessonForm';
import Lessons from './Pages/Lessons';
import Notices from './Pages/Notices';
import NoticesForm from './Pages/NoticesForm';
import Cancellations from './Pages/Cancellations';
import UserForm from './Pages/UserForm';

import Users from './Pages/Users';


function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Users}/>
            <Route path="/users" component={Users}/>
            <Route path="/user-form" component={UserForm}/>
            <Route path="/consultations" component={Consultations}/>
            <Route path="/consultation-form" component={ConsultationForm}/>
            <Route path="/lessons" component={Lessons}/>
            <Route path="/lesson-form" component={LessonForm}/>
            <Route path="/notices" component={Notices}/>
            <Route path="/notices-form" component={NoticesForm}/>
            <Route path="/cancellations" component={Cancellations}/>
            <Route path="/transactions" component={Transactions}/>
            <Route path="*" component={() => <h1>Page not found</h1>} />
        </Switch>
    )
}

export default Routes;