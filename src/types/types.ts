export type CadastroObjectType = {
  serviceName: string;
  login: string;
  password: string;
  url: string;
};

export type FormProps = {
  isInvisible: (param: boolean) => void;
  handleCadastroInfo: (param: CadastroObjectType) => void;
};

export type UseableCadastroListType = {
  passwordArray: CadastroObjectType[];
};
