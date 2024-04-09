import './Header.css';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { GoDotFill } from 'react-icons/go';

export default function Header() {
  return (
    <header className="header">
      <h1>
        Gerenciador
        {' '}
        <GoDotFill className="logo-icon" />
        {' '}
        de
        {' '}
        <GoDotFill className="logo-icon" />
        {' '}
        senhas
        {' '}
        <BsFillShieldLockFill className="shield-icon" />
      </h1>
    </header>
  );
}
