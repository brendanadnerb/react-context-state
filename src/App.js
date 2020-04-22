import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { StateProvider } from './state';
import Users from './components/Users';
import Posts from './components/Posts';
import { initialState, reducer } from './reducers';
import ErrorBoundary from './components/Error';

const App = () => {
  return (
    <ErrorBoundary>
      <StateProvider initialState={initialState} reducer={reducer}>
        <BrowserRouter>
          <Route exact path="/" component={Users} />
          <Route path="/posts/:id" component={Posts} />
        </BrowserRouter>
      </StateProvider>
    </ErrorBoundary>
  );
};

export default App;
