import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Books from './pages/Books';
import Categories from './pages/categories';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Books />} />
        <Route exact path="/categories" element={<Categories />} />
      </Routes>
    </Router>

  );
}

export default App;
