import './Form.css';

type FormProps = {
  isVisible: (param: boolean) => void;
};

export default function Form({ isVisible }: FormProps) {
  return (
    <form
      onSubmit={
        (event) => event.preventDefault()
      }
    >
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
