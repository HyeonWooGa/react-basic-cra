import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/hello">
          <h1>Hello</h1>
        </Route>
        <Route path="/movie">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

/*

  In React Way, We never do state = "value" like this, We must use modifier when change value of state.
*/
/*
  Route : URL,
  Switch : find Route
 */
