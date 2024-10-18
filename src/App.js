import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './modules/Landing/Landing.js'
import Projects from './modules/Projects/Projects.js';
import ScrollToTop from './modules/Tools/ScrollToTop.js'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route path={"/"} element={<Landing/>}/>
          <Route path={"/projects"} element={<Projects/>}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
