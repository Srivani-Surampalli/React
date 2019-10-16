import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import HomeDashboard from '../Components/HomeDashboard';
import CreateDashboard from '../Components/CreateDashboard';
import EditDashboard from '../Components/Edit';
import HelpDashboard from '../Components/Help';
import NotFoundPage from '../Components/NotFoundPage';
import Header from '../Components/Header';


const AppRouter = () => (
    <BrowserRouter>
    <div>
    <Header />
    <Switch>
    <Route path="/" component={HomeDashboard} exact={true} />
    <Route path="/Create" component={CreateDashboard} />
    <Route path="/EditDashboard/" component={EditDashboard} />
    <Route path="/Help" component={HelpDashboard} />
    <Route component={NotFoundPage} />
    </Switch>
    </div>
    </BrowserRouter>
);

export default AppRouter;