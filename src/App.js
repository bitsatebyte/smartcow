import './App.css';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import { createBrowserHistory } from 'history';
import Home from './components/Home/Home';
import CarouselContainer from './components/CarouselContainer/CarouselContainer';

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Route path="/" exact component={Home} />
      <Route path="/carousel" exact component={CarouselContainer} />
    </Router>
  );
}

export default App;
