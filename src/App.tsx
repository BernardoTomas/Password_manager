import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import PasswordsList from './components/PasswordLi';
import { CadastroObjectType } from './types/types';

function App() {
  const [formVisibility, setFormVisibility] = useState(false);
  const [showPasswords, setShowPasswords] = useState(false);
  const [cadastrosData, setCadastrosData] = useState<CadastroObjectType[]>([]);

  const handleFormVisibility = (currentFormVisibility: boolean) => {
    return setFormVisibility(!currentFormVisibility);
  };

  const handleFormSubmission = (newCadastro: CadastroObjectType) => {
    return setCadastrosData((currCadastrosData) => [...currCadastrosData, newCadastro]);
  };

  const handleDeleteLi = (indexToDelete: number) => {
    return setCadastrosData(
      cadastrosData.filter((_, index) => index !== indexToDelete),
    );
  };

  const handleChecked = () => {
    setShowPasswords(!showPasswords);
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
      {
        cadastrosData.length > 0
        && (
          <label htmlFor="show-passwords">
            Esconder senhas
            <input
              type="checkbox"
              id="show-passwords"
              checked={ showPasswords }
              onChange={ handleChecked }
            />
          </label>
        )
      }
      <ul>
        {
          cadastrosData.length === 0
            ? <h3>Nenhuma senha cadastrada</h3>
            : <PasswordsList
                isPasswordVisible={ showPasswords }
                passwordArray={ cadastrosData }
                deleteLiAtIndex={ handleDeleteLi }
            />
        }
      </ul>
    </div>
  );
}

export default App;
