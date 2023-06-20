import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './pages/Home';
import Categories from './pages/categories';
import Navbar from './components/Navbar';

import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/categories" element={<Categories />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
