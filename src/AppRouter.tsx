import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Posts from './pages/Posts';
import Error from './pages/Error';
import Post from './pages/Post';

export const AppRouter = () => (
  <Routes>
    <Route path="/about" element={<About />} />
    <Route path="/posts" element={<Posts />} />
    <Route path="/posts/:id" element={<Post />} />
    <Route path="*" element={<Error />} />
  </Routes>
);