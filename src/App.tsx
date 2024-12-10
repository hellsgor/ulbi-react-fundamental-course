import './styles/App.css';

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import Posts from './pages/Posts';
import About from './pages/About';
import { Header } from './components/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="*" element={<Navigate to="/posts" replace />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
