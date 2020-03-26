import React from 'react';
<<<<<<< HEAD
import {
  BrowserRouter, Route, Redirect, Switch,
} from 'react-router-dom';
import { InputDemo } from './pages/InputDemo';
import AuthRoute from './Routes/AuthRoute';
import PrivateRoute from './Routes/PrivateRoute';
import TextFieldDemo from './pages/TextFieldDemo';
import ChildrenDemo from './pages/ChildrenDemo/ChildrenDemo';
import Trainee from './pages/Trainee/Trainee';
import Login from './pages/Login/Login';
import NotFoundRoute from './pages/NoMatch/NoMatch';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to="/Trainee" />
          </Route>
          <AuthRoute path="/Login" component={Login} />
          <PrivateRoute path="/Trainee" component={Trainee} />
          <PrivateRoute path="/TextFieldDemo" component={TextFieldDemo} />
          <PrivateRoute path="/Inputdemo" component={InputDemo} />
          <PrivateRoute path="/ChildrenDemo" component={ChildrenDemo} />
          <PrivateRoute component={NotFoundRoute} />
        </Switch>
      </BrowserRouter>
    </div>
=======
import Trainee from './pages/Trainee/Trainee';

function App() {
  return (
    <>
      <Trainee />
    </>
>>>>>>> 39d9f02cbba7beceb48cc7dc7217f68891c310ef
  );
}
export default App;
