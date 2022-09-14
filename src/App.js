import { BrowserRouter, Routes, Route} from 'react-router-dom';

import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticlePage from './pages/ArticlePage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <h1>My Awesome Blog</h1>
      <div id="page-body">
        <HomePage />
        <AboutPage />
        <ArticlesListPage />
        <ArticlePage />
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
