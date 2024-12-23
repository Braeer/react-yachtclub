import aboutImage from '../assets/img/AboutUsImage.jpg';
import { Button } from './button';

export const AboutUS = () => {
  return (
    <div className="bg-[#FFFDEF] relative z-10 overflow-hidden">
      <div className="flex max-w-[1140px] mx-auto py-24 justify-between">
        <div className="">
          <h2 className="text-[64px] text-black font-bold font-OpenSans my-8">О нас</h2>
          <p className="max-w-[457px] max-h-[260px] justify-start text-[24px] text-black/60 tracking-[0.05em] font-normal leading-[108%]">
            Добро пожаловать в наш яхт-клуб, где водные просторы встречают страсть к парусному
            спорту и активному отдыху. Мы гордимся тем, что являемся одним из ведущих яхт-клубов в
            регионе, предлагая уникальные возможности для любителей время провождения на воде, как
            новичков, так и опытных моряков.
          </p>
          <Button text="Подробнее" dark className="mt-[80px]" />
        </div>
        <img src={aboutImage} alt="AboutUsImage" className="block rounded-[34px]" />
        <div className="absolute top-[10%] left-[0%] z-5 translate-x-[-40%] translate-y-[-50%] shadow-[#0C8CE9] shadow-[0_0_150px_150px] rounded-full opacity-80" />
        <div className="absolute top-[100%] left-[100%] z-5 translate-x-[-40%] translate-y-[-50%] shadow-[#0C8CE9] shadow-[0_0_150px_150px] rounded-full opacity-80" />
      </div>
    </div>
  );
};
