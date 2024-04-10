import { useState } from 'react';
import './App.css';
import { FaAnglesRight } from 'react-icons/fa6';
import Header from './components/Header';
import Form from './components/Form';
import Footer from './components/Footer';
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
    <div className="page-container">
      <Header />
      <div className="main">
        {
        formVisibility
          ? <Form
              isInvisible={ handleFormVisibility }
              handleCadastroInfo={ handleFormSubmission }
          />
          : (
            <button
              onClick={ () => setFormVisibility(!formVisibility) }
              className="new-cadastro-btn"
            >
              Cadastrar nova senha
              &nbsp;
              <FaAnglesRight />
            </button>
          )
        }
        <div className="list-container">
          {
            cadastrosData.length > 0
            && (
              <label htmlFor="show-passwords">
                Esconder senhas &nbsp;
                <input
                  type="checkbox"
                  id="show-passwords"
                  checked={ showPasswords }
                  onChange={ handleChecked }
                />
              </label>
            )
          }
          <ul className="passwords-list">
            {
              cadastrosData.length === 0
                ? <h3>Nenhuma senha cadastrada &#9785;</h3>
                : <PasswordsList
                    isPasswordVisible={ showPasswords }
                    passwordArray={ cadastrosData }
                    deleteLiAtIndex={ handleDeleteLi }
                />
            }
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
