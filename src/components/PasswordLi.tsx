import { UseableCadastroListType } from '../types/types';

const PasswordsList = ({ passwordArray, deleteLiAtIndex }: UseableCadastroListType) => {
  if (passwordArray.length === 0) return;
  return passwordArray.map(({ serviceName, login, password, url }, index) => {
    return (
      <li key={ serviceName + index }>
        <a href={ url }>{ serviceName }</a>
        <h4>
          Login:
          { login }
        </h4>
        <h4>
          Senha:
          { password }
        </h4>
        <button
          type="button"
          data-testid="remove-btn"
          onClick={ () => deleteLiAtIndex(index) }
        >
          Deletar
        </button>
      </li>
    );
  });
};

export default PasswordsList;
