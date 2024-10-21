import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './modules/Landing/Landing.js'
import Projects from './modules/Projects/Projects.js';
import ScrollToTop from './modules/Tools/ScrollToTop.js'
import PrivacyPolicy from './modules/PrivacyPolicy/PrivacyPolicy.js';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route path={"/"} element={<Landing/>}/>
          <Route path={"/projects"} element={<Projects/>}/>
          <Route path={"/privacy"} element={<PrivacyPolicy/>}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
