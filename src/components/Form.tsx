import './Form.css';

export default function Form() {
  return (
    <form>
      <div className="inputs-container">
        <label htmlFor="nome-servico">
          Nome do serviço
          <input type="text" id="nome-servico" />
        </label>

        <label htmlFor="login">
          Login
          <input type="text" id="login" />
        </label>

        <label htmlFor="senha">
          Senha
          <input type="password" id="senha" />
        </label>

        <label htmlFor="URL">
          URL
          <input type="text" id="URL" />
        </label>
      </div>
      <div className="btns-container">
        <button>Cadastrar</button>
        <button>Cancelar</button>
      </div>
    </form>
  );
}
