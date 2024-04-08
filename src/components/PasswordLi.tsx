import { UseableCadastroListType } from '../types/types';

const PasswordsList = ({ passwordArray }: UseableCadastroListType) => {
  if (passwordArray.length === 0) return;
  return passwordArray.map(({ serviceName, login, password, url }, index) => {
    return (
      <li key={ index }>
        <a href={ url }>{ serviceName }</a>
        <h4>
          Login:
          { login }
        </h4>
        <h4>
          Senha:
          { password }
        </h4>
      </li>
    );
  });
};

export default PasswordsList;
