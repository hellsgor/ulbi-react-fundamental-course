import './styles/App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Posts from './pages/Posts';
import About from './pages/About';
import { Header } from './components/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route path="/posts" element={<Posts />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
