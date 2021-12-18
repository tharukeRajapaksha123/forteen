import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component = {Home}/>
        <Route exact path="/signup" component = {Home}/>
      </Switch>
    </Router>
  );
}

export default App;
