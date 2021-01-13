import React from 'react';
import Badges from '../pages/Badges';
import BadgeNew from '../pages/BadgeNew';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './Layout';
import NotFound from './NotFound';

const App = () => {
	return (
		<BrowserRouter>
      <Layout>
			  <Switch>
			    <Route exact path='/Badges' component={ Badges } />
			    <Route exact path='/Badge/new' component={ BadgeNew } />
			    <Route component={ NotFound } />
			  </Switch>
			</Layout>
		</BrowserRouter>
	)
}

export default App
