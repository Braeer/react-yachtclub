import React from 'react';
import aboutImage from '../assets/img/AboutUsImage.jpg';
import { Button } from './button';
import data from '../assets/data.json';

export const AboutUS = () => {
  const [openMore, setOpenMore] = React.useState(false);
  return (
    <section id="about-us" className="bg-[#FFFDEF] relative overflow-hidden">
      <div className="flex max-w-[1140px] mx-auto py-24 justify-between">
        <div className="">
          <h2 className="text-[64px] text-black font-bold font-OpenSans my-8">О нас</h2>
          <p className="max-w-[457px] max-h-[260px] justify-start text-[24px] text-black/60 tracking-[0.05em] font-normal leading-[108%]">
            {data.SiteData.aboutUs}
          </p>
          <Button
            onClick={() => setOpenMore(!openMore)}
            text="Подробнее"
            dark
            className="mt-[80px]"
          />
        </div>
        <img src={aboutImage} alt="AboutUsImage" className="block rounded-[34px]" />
        <div className="absolute top-[10%] left-[0%] z-5 translate-x-[-40%] translate-y-[-50%] shadow-[#0C8CE9] shadow-[0_0_150px_150px] rounded-full opacity-80" />
        <div className="absolute top-[100%] left-[100%] z-5 translate-x-[-40%] translate-y-[-50%] shadow-[#0C8CE9] shadow-[0_0_150px_150px] rounded-full opacity-80" />
      </div>
      {/* //TODO: Добавить стили */}
      {openMore && (
        <div className="max-w-[1143px]">
          <h2 className="">История Яхт-клуба</h2>
          <p>{data.SiteData.aboutUsFull}</p>
        </div>
      )}
    </section>
  );
};
