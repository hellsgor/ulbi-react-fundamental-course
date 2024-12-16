import './styles/App.css';

import { BrowserRouter } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { AppRouter } from './router/AppRouter';
import { AuthContext } from './context';
import { useEffect, useState } from 'react';

function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true);
    }
  }, []);

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
