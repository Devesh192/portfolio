import logo from './logo.svg';
import './App.css';
import './index.css';
import Header from './component/navbar';
import Home from './component/home';
import Resume from './component/resume';
import Footer from './component/footer';



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  Routes
} from "react-router-dom";
import About from './component/about';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className='dev bg-black-gradient'>
          <div>
            <Header />
          </div>
          <div className='block grow'>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </div>
          <div className='justify-end'>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
