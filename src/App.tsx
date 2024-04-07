import { useState } from 'react';
import './App.css';
import Form from './components/Form';

function App() {
  const [formVisibility, setFormVisibility] = useState(false);

  return (
    <div>
      <h1>Gerenciador de senhas</h1>
      {formVisibility ? (
        <Form />
      ) : (
        <button
          onClick={() => setFormVisibility(!formVisibility)}
        >
          Cadastrar nova senha
        </button>
      )}
    </div>
  );
}

export default App;
