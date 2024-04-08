import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import PasswordsList from './components/PasswordLi';
import { CadastroObjectType } from './types/types';

function App() {
  const [formVisibility, setFormVisibility] = useState(false);
  const [cadastrosData, setCadastrosData] = useState<CadastroObjectType[]>([]);

  const handleFormVisibility = (currentFormVisibility: boolean) => {
    return setFormVisibility(!currentFormVisibility);
  };

  const handleFormSubmission = (newCadastro: CadastroObjectType) => {
    return setCadastrosData([...cadastrosData, newCadastro]);
  };

  return (
    <div>
      <h1>Gerenciador de senhas</h1>
      {
        formVisibility
          ? <Form
              isInvisible={ handleFormVisibility }
              handleCadastroInfo={ handleFormSubmission }
          />
          : (
            <button onClick={ () => setFormVisibility(!formVisibility) }>
              Cadastrar nova senha
            </button>
          )
      }
      <div className="separator" />
      <ul>
        {
          cadastrosData.length === 0
            ? <h3>Nenhuma senha cadastrada</h3>
            : <PasswordsList passwordArray={ cadastrosData } />
        }
      </ul>
    </div>
  );
}

export default App;
