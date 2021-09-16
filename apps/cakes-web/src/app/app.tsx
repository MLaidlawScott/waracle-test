import { Route, Switch } from 'react-router-dom';
import Home from '../containers/Home/Home';
import Details from '../containers/CakeDetails/CakeDetails';

export function App() {
  return (
    <Switch>
      <Route path="/details" exact component={Details} />
      <Route path="/" component={Home} />
    </Switch>
  );
}

export default App;
