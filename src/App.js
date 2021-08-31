import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Row from "./components/Row";
import requests from "./requests";

const App = () => {
  return (
    <div className="bg-personalblack select-none font-karla">
      <Banner />
      <div className="pl-4 pb-20">
        <Row title='Trending' fetchUrl={requests.fetchTrending} />
        <Row title='Action' fetchUrl={requests.fetchActionMovies} />
        <Row title='Comedy' fetchUrl={requests.fetchComedyMovies} />
        <Row title='Horror' fetchUrl={requests.fetchHorrorMovies} />
        <Row title='Romance' fetchUrl={requests.fetchRomanceMovies} />
        <Row title='Documentaries' fetchUrl={requests.fetchHorrorMovies} />
      </div>
      <Navbar />
    </div>
  )
}

export default App;
