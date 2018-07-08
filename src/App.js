import React from 'react';
import { Provider } from 'react-redux';
import { Redirect, BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import RestorePassword from './components/RestorePassword'
import RestoreSuccess from './components/RestoreSuccess'
import RestoreFailed from './components/RestoreFailed'
import configureStore from './store/configureStore';
import CenterWidget from './components/CenterWidget'

const store = configureStore() // <-- createHistory() response passed to create store

const App = () => {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <CenterWidget>
          <Route exact path="/" render={() => (
            <Redirect to="/app"/>
          )}/>
          <Route exact path="/app" component={Home} />
          <Route exact path="/app/restorePassword/:restore_uuid" component={RestorePassword} />
          <Route exact path="/app/restorePassword" component={RestorePassword} />
          <Route exact path="/app/restoreSuccess" component={RestoreSuccess} />
          <Route exact path="/app/restoreFailed" component={RestoreFailed} />
        </CenterWidget>
      </BrowserRouter>
    </Provider>
  );
};

export default App;