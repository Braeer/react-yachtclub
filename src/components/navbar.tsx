import { Button } from './ui/button';

export const NavBar: React.FC = () => {
  return (
    <nav className="bg-bg-navbar flex justify-center items-center py-2 h-[10vh] px-1 lg:px-4 md:justify-between">
      <img src="img/logo.png" alt="logo" className="h-[8vh]" />
      <ul className="gap-5 text-xl lg:text-2xl xl:text-3xl leading-6 font-semibold hidden md:flex lg:gap-10 ">
        <li>
          <a href="#about-us">О нас</a>
        </li>
        <li>
          <a href="#amenities">Услуги</a>
        </li>
        <li>
          <a href="#team">Команда</a>
        </li>
        <li>
          <a href="#gallery">Галерея</a>
        </li>
        <li>
          <a href="#contacts">Контакты</a>
        </li>
      </ul>
      <Button text="Записаться" className="hidden md:block" />
    </nav>
  );
};
