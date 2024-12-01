import { useState } from 'react';
import Counter from './components/Counter';

function App() {
  const [value, setValue] = useState('ТЕКСТ В ИНПУТЕ');

  return (
    <>
      <Counter />
      <Counter />
      <Counter />
    </>
  );
}

export default App;
