import { FaAngleRight } from 'react-icons/fa6';
import { ImCancelCircle } from 'react-icons/im';
import { UseableCadastroListType } from '../types/types';
import './PasswordLi.css';

const PasswordsList = ({
  isPasswordVisible,
  passwordArray,
  deleteLiAtIndex,
}: UseableCadastroListType) => {
  if (passwordArray.length === 0) return;
  return passwordArray.map(({ serviceName, login, password, url }, index) => {
    return (
      <li key={ serviceName + index }>
        <div className="li-text-container">
          <div className="li-data-container">
            <h4>
              Login:
            </h4>
            &nbsp;&nbsp;
            <p>{ login }</p>
          </div>
          <div className="li-data-container">
            <h4>
              Senha:
            </h4>
            &nbsp;&nbsp;
            <p>{ isPasswordVisible ? '******' : password }</p>
          </div>
        </div>
        <div className="li-btn-container">
          <a className="li-link" href={ url }>
            { serviceName }
            <FaAngleRight />
          </a>
          <button
            type="button"
            data-testid="remove-btn"
            onClick={ () => deleteLiAtIndex(index) }
            className="li-delete-btn"
          >
            <ImCancelCircle />
          </button>
        </div>
      </li>
    );
  });
};

export default PasswordsList;
