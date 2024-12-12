import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Posts from './pages/Posts';
import Error from './pages/Error';
import PostPage from './pages/PostPage/PostPage';

export const AppRouter = () => (
  <Routes>
    <Route path="/about" element={<About />} />
    <Route path="/posts" element={<Posts />} />
    <Route path="/posts/:id" element={<PostPage />} />
    <Route path="*" element={<Error />} />
  </Routes>
);
