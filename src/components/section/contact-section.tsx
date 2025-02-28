import { Map, YMaps } from '@pbe/react-yandex-maps';
import { TitleText } from '../ui';

const ContactSection = () => {
  return (
    <div id="contacts" className="bg-[#FFFDEF]">
      <TitleText text="Контакты" black className="py-[70px]" />
      <div className="flex justify-center flex-col md:flex-row items-center gap-5 text-center pb-[100px]">
        <ul className="flex flex-col gap-4 text-black text-2xl md:w-[50%]">
          <li>
            Наш адрес{' '}
            <a href="" className="underline font-bold">
              ул. Пушкина, д. 10
            </a>
          </li>
          <li>
            Наш номер{' '}
            <a href="" className="underline font-bold">
              +7 (999) 999-99-99
            </a>
          </li>
          <li>
            Номер менеджера{' '}
            <a href="" className="underline font-bold">
              +7 (999) 999-99-99
            </a>
          </li>
        </ul>
        <YMaps>
          <div className="w-full p-4">
            My awesome application with maps!
            <Map
              defaultState={{ center: [55.75, 37.57], zoom: 9 }}
              width={'100%'}
              height={'50vh'}
            />
          </div>
        </YMaps>
      </div>
    </div>
  );
};

export default ContactSection;
