import './styles/App.css';

import { BrowserRouter } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { AppRouter } from './AppRouter';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <AppRouter />
      </main>
    </BrowserRouter>
  );
}

export default App;
