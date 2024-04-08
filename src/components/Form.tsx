import { useState } from 'react';
import './Form.css';

type FormProps = {
  isVisible: (param: boolean) => void;
};

export default function Form({ isVisible }: FormProps) {
  const [submitBtnDisabled, setSubmitBtnDisabled] = useState(true);
  const [serviceName, setServiceName] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [url, setUrl] = useState('');

  const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
  const patternLetAndNum = /^(?=.*[A-Za-z])(?=.*\d).+$/;
  const patternSpecialChar = /^(?=.*[@$!%*?&]).+$/;
  const patternLengthMin = /^[A-Za-z\d@$!%*?&]{8,}$/;
  const patternLengthMax = /^[A-Za-z\d@$!%*?&]{0,16}$/;

  const handleSubmitBtn = () => {
    if (
      serviceName !== ''
      && login !== ''
      && password !== ''
      && passwordPattern.test(password)
      && url !== ''
    ) {
      setSubmitBtnDisabled(false);
    } else {
      setSubmitBtnDisabled(true);
    }
  };

  const handlePasswordTips = (pWPattern: RegExp) => {
    return pWPattern.test(password)
      ? 'valid-password-check'
      : 'invalid-password-check';
  };

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form
      onChange={ handleSubmitBtn }
      onSubmit={ handleOnSubmit }
      className="register-form"
    >
      <div className="inputs-container">
        <label htmlFor="nome-servico">
          Nome do serviço
          <input
            value={ serviceName }
            type="text"
            id="nome-servico"
            onChange={ ({ target }) => setServiceName(target.value) }
          />
        </label>

        <label htmlFor="login">
          Login
          <input
            value={ login }
            type="text"
            id="login"
            onChange={ ({ target }) => setLogin(target.value) }
          />
        </label>

        <label htmlFor="senha">
          Senha
          <input
            value={ password }
            type="password"
            id="senha"
            onChange={ ({ target }) => setPassword(target.value) }
          />
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
        </label>

        <label htmlFor="URL">
          URL
          <input
            value={ url }
            type="text"
            id="URL"
            onChange={ ({ target }) => setUrl(target.value) }
          />
        </label>
      </div>
      <div className="btns-container">
        <button
          disabled={ submitBtnDisabled }
        >
          Cadastrar
        </button>
        <button
          onClick={
            () => isVisible(true)
          }
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}
