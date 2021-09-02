import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import MyList from "./components/MyList";
import Explore from "./components/Explore";
import Profile from "./components/Profile";
import MovieDetails from "./components/MovieDetails";
import MovieSearch from "./components/MovieSearch";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <>
          <Route exact path="/search/:movieName">
            <MovieSearch />
          </Route>
          <Route exact path="/title/:movieId">
            <MovieDetails />
          </Route>
          <Route path="/mylist">
            <MyList />
          </Route>
          <Route path="/explore">
            <Explore />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route exact path="/">
            <Banner />
            <Movies />
          </Route>
          <Navbar />
        </>
      </Switch>
    </Router>
  );
};

export default App;
