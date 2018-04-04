// @flow

import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import type { Match } from 'react-router-dom';
import AsyncRoute from './AsyncRoute';
import store from './store';
import preload from '../data.json';


const App = () => (
  <Provider store={store}>
    <Router>
      <Root>
        <Main>
          <Route exact path="/" render={() => (
            <h1>Welcome to Video SPA assessment</h1>
          )}/>
          <Route path="/details/:id" component={(props: { match: Match }) => {
              const selectedShow = preload.shows.find((show: Show) => props.match.params.id === show.imdbID);
              return (
                <AsyncRoute
                  loadingPromise={import('./Details')}
                  props={Object.assign({ show: selectedShow, match: {} }, props)}
                />
              );
            }}
          />
        </Main>
        <Sidebar>
          <Route path="/" component={props => (
            <AsyncRoute loadingPromise={import('./Search')} props={Object.assign({ shows: preload.shows }, props)} />
          )}
          />
        </Sidebar>
      </Root>
    </Router>
  </Provider> 
)

const Root = (props) => (
  <div style={{
    display: 'flex'
  }} {...props} />
)

const Sidebar = (props) => (
  <div style={{
    width: '33vw',
    height: '100vh',
    overflow: 'auto',
    background: '#222'
  }} {...props} />
)

const SidebarItem = (props) => (
  <div style={{
    whitespace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    padding: '5px 10px'
  }} {...props} />
)

const Main = (props) => (
  <div style={{
    flex: 1,
    height: '100vh',
    overflow: 'auto',
    background: '#222'
  }}>
    <div style={{ padding: '75px 50px 50px 45px' }} {...props} />
  </div>
)

export default App;