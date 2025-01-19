import { Button } from './ui/button';
import { NavBar } from './navbar';

export const Header: React.FC = () => {
  return (
    <header className="bg-headerbg bg-center bg-cover z-20 h-[100vh] min-h-[800px]">
      <NavBar />
      <div className="flex flex-col items-center justify-center h-[100vh]">
        <p className="font-OpenSans font-light text-[40px]">Выбор за тобой!</p>
        <p className="font-OpenSans font-bold text-[110px] max-w-[960px] leading-[108%] text-center pb-[70px]">
          Покоряй Бескрайние Просторы с КМС
        </p>
        <Button
          text="Присоединяйся"
          className="text-[32px] w-[320px] h-[57px] font-OpenSans font-bold"
        />
      </div>
    </header>
  );
};
