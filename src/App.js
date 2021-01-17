import { GlobalStyle } from "./GlobalStyle";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Movie from "./components/Movie";
import Error from "./components/Error";
import Similar from "./components/Similar";

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/:movieId" component={Movie} />
      <Route path="/:movieId/similar/" component={Similar} />
      <Route path="/*" component={Error} />
    </Switch>

    <GlobalStyle />
  </Router>
);

export default App;
