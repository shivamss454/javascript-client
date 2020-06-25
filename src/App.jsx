import React from 'react';
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
import SnackbarProvider from './contexts';

function App() {
  return (
    <div>
      <SnackbarProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Redirect to="/trainee" />
            </Route>
            <AuthRoute path="/Login" component={Login} />
            <PrivateRoute path="/trainee" component={Trainee} />
            <PrivateRoute path="/text-field-demo" component={TextFieldDemo} />
            <PrivateRoute path="/input-demo" component={InputDemo} />
            <PrivateRoute path="/children-demo" component={ChildrenDemo} />
            <PrivateRoute component={NotFoundRoute} />
          </Switch>
        </BrowserRouter>
      </SnackbarProvider>
    </div>
  );
}
export default App;
