import './styles/App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Posts from './pages/Posts';
import About from './pages/About';
import { Header } from './components/Header/Header';
import { Error } from './pages/Error';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/posts" element={<Posts />} />
          {/* <Route path="/error" element={<Error />} /> */}
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
