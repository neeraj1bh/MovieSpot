import { GlobalStyle } from "./GlobalStyle";
import Header from "./components/Header";
import Home from "./components/Home";
import { AuthProvider } from "./contexts/GlobalContext";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Movie from "./components/Movie";
import Error from "./components/Error";
import Similar from "./components/Similar";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import Watchlist from "./components/Watchlist";

const App = () => (
  <Router>
    <AuthProvider>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/watchlist" component={Watchlist} />
        <Route exact path="/:movieId" component={Movie} />
        <Route path="/:movieId/similar/" component={Similar} />
        <Route path="/*" component={Error} />
      </Switch>

      <GlobalStyle />
    </AuthProvider>
  </Router>
);

export default App;
