import { useState } from 'react';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import Swal from 'sweetalert2';
import './Form.css';
import { FormProps } from '../types/types';

export default function Form({ isInvisible, handleCadastroInfo }: FormProps) {
  const [submitBtnDisabled, setSubmitBtnDisabled] = useState(true);
  const [toggleFormPassword, setToggleFormPassword] = useState('password');

  const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%#*?&]{8,16}$/;
  const patternLetAndNum = /^(?=.*[A-Za-z])(?=.*\d).+$/;
  const patternSpecialChar = /^(?=.*[@$!#%*?&]).+$/;
  const patternLengthMin = /^[A-Za-z\d@$!%*?&]{8,}$/;
  const patternLengthMax = /^[A-Za-z\d@$!%*?&]{0,16}$/;

  const serviceName = 'nome-servico';

  const [currentState, setCurrentState] = useState<{ [key: string] : string }>(
    {
      senha: '',
      login: '',
      URL: '',
      'nome-servico': '',
    },
  );

  const handleChange = (id: string, value: string) => {
    const currentStateObject = { ...currentState, [id]: value };
    setCurrentState(currentStateObject);
    if (
      currentStateObject[serviceName] !== ''
      && currentStateObject.login !== ''
      && passwordPattern.test(currentStateObject.senha)
      && currentStateObject.URL !== ''
    ) {
      setSubmitBtnDisabled(false);
    } else {
      setSubmitBtnDisabled(true);
    }
  };

  const handlePasswordTips = (pWPattern: RegExp) => {
    return pWPattern.test(currentState.senha)
      ? 'valid-password-check'
      : 'invalid-password-check';
  };

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleCadastroInfo({
      serviceName: currentState[serviceName],
      login: currentState.login,
      password: currentState.senha,
      url: currentState.URL,
    });
    isInvisible(true);
    Swal.fire({
      timer: 1500,
      text: 'Serviço cadastrado com sucesso',
      icon: 'success',
    });
  };

  const handleToggleFormPassword = () => {
    return toggleFormPassword === 'password'
      ? setToggleFormPassword('text')
      : setToggleFormPassword('password');
  };

  return (
    <form
      onSubmit={ handleOnSubmit }
      className="register-form"
    >
      <div className="inputs-container">
        <label htmlFor="nome-servico">
          <p>Nome do serviço</p>
          <input
            className="text-input"
            value={ currentState[serviceName] }
            type="text"
            id="nome-servico"
            onChange={ ({ target }) => {
              handleChange(target.id, target.value);
            } }
          />
        </label>

        <label htmlFor="URL">
          <p>URL</p>
          <input
            className="text-input"
            value={ currentState.URL }
            type="text"
            id="URL"
            onChange={ ({ target }) => {
              handleChange(target.id, target.value);
            } }
          />
        </label>

        <label htmlFor="login">
          <p>Login</p>
          <input
            className="text-input"
            value={ currentState.login }
            type="text"
            id="login"
            onChange={ ({ target }) => {
              handleChange(target.id, target.value);
            } }
          />
        </label>

        <label htmlFor="senha">
          <p>Senha</p>
          <div className="senha-container">
            <input
              value={ currentState.senha }
              type={ toggleFormPassword }
              id="senha"
              onChange={ ({ target }) => {
                handleChange(target.id, target.value);
              } }
            />
            <button
              type="button"
              data-testid="show-hide-form-password"
              onClick={ handleToggleFormPassword }
            >
              { toggleFormPassword === 'password' ? <BsEyeFill /> : <BsEyeSlashFill /> }
            </button>
          </div>
        </label>
        <div className="tips-container">
          <h6 className={ handlePasswordTips(patternLengthMin) }>
            Possuir 8 ou mais caracteres
          </h6>
          <h6 className={ handlePasswordTips(patternLengthMax) }>
            Possuir até 16 caracteres
          </h6>
          <h6 className={ handlePasswordTips(patternLetAndNum) }>
            Possuir letras e números
          </h6>
          <h6 className={ handlePasswordTips(patternSpecialChar) }>
            Possuir algum caractere especial
          </h6>
        </div>

      </div>
      <div className="btns-container">
        <button
          type="button"
          onClick={ () => isInvisible(true) }
          className="cancelar-btn"
        >
          Cancelar
        </button>
        <button
          onClick={ () => console.log(currentState) }
          type="submit"
          disabled={ submitBtnDisabled }
          className="cadastrar-btn"
        >
          Cadastrar
        </button>

      </div>
    </form>
  );
}
