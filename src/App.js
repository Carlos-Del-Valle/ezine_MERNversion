import {BrowserRouter as Router, Route} from "react-router-dom";

//Components
import Home from './pages/Home';
import Article from './pages/Article';
import About from './pages/About';
import ArticlesList from './pages/ArticlesList';

function App() {
  return (
      <Router>
    <div className='max-w-screen-md mx-auto pt-20'>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/articles-list" component={ArticlesList}/>
      <Route exact path="/article" component={Article}/>
    </div>
      </Router>
  );
}

export default App;
