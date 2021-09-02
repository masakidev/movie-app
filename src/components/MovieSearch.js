import { useParams } from "react-router-dom";
import Header from "./Header";
import Row from "./Row";

const API_KEY = "921f321cb57ea624d781e87611177a49";

const MovieSearch = () => {
  const { movieName } = useParams();
  return (
    <div className="px-4">
      <Header />
      <h1 className="text-2xl text-personalwhite">Search of "{movieName}"</h1>
      <Row fetchUrl={`/search/movie?api_key=${API_KEY}&query=${movieName}`} />
    </div>
  );
};

export default MovieSearch;
