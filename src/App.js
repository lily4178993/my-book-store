// import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import Header from 'components/Header';
import Books from 'components/Books';
import Categories from 'components/Categories';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
