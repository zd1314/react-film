import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Test from '../components/test';
import SubPage from '../components/subPage';

const Article = () => (
  <Switch>
    <Route exact path="/article" component={SubPage}></Route>
    <Route path="/article/:id" component={SubPage}></Route>
  </Switch>
)


class Router extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>

        <BrowserRouter>
          <Switch>
              < Route exact path='/' component={Test}></Route>
              < Route path='/article' component={Article}></Route>
           
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
export default Router;