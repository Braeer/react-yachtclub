import logo from '../assets/img/logo.png';
import { Button } from './button';

export const NavBar: React.FC = () => {
  return (
    <nav className="bg-bg-navbar flex justify-between items-center px-[149px] py-2">
      <img src={logo} alt="logo" />
      <ul className="flex gap-10 text-xl leading-6 font-semibold ">
        <li>
          <a href="#about-us">О нас</a>
        </li>
        <li>
          <a href="">Услуги</a>
        </li>
        <li>
          <a href="">Команда</a>
        </li>
        <li>
          <a href="">Галерея</a>
        </li>
        <li>Контакты</li>
      </ul>
      <Button text="Записаться" />
    </nav>
  );
};
