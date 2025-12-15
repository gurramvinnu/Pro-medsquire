import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Contact from './pages/Contact';
import WebDevelopment from './pages/WebDevelopment';
import Blogs from './pages/Blogs';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/contact" element={<Contact />} /> 
           <Route path="/blogs" element={<Blogs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;