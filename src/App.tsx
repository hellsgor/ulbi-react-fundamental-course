import './styles/App.css';

import { BrowserRouter } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { AppRouter } from './router/AppRouter';
import { AuthContext } from './context';
import { useState } from 'react';

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      <BrowserRouter>
        <Header />
        <main>
          <AppRouter />
        </main>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
