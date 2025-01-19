import React from 'react';
import { Button } from '../ui/button';
import data from '../../assets/data.json';
import { BlueShadow, TitleText } from '../ui';

export const AboutUS = () => {
  const [openMore, setOpenMore] = React.useState(false);
  const contentRef = React.useRef<null | HTMLDivElement>(null);

  return (
    <section id="about-us" className="bg-[#FFFDEF] relative overflow-hidden">
      <div className="max-w-[1140px] mx-auto py-24 justify-between">
        <div className="flex-col-reverse p-4 flex md:flex-row justify-between">
          <div className="text-center md:text-left">
            <TitleText text="О нас" black className="my-8 md:text-left " />
            <p className="max-w-[457px] mx-auto md:max-h-[260px] justify-start text-[24px] text-black/60 tracking-[0.05em] mb-[80px] font-normal leading-[108%] md:mx-0">
              {data.SiteData.aboutUs}
            </p>
            <Button onClick={() => setOpenMore(!openMore)} text="Подробнее" dark />
          </div>
          <div className="flex justify-center items-center w-full flex-1">
            <img
              loading="lazy"
              src="img/AboutUsImage.jpg"
              alt="AboutUsImage"
              className="block rounded-[34px]"
            />
          </div>
        </div>
        <BlueShadow />
        <BlueShadow right />
      </div>
      <div
        className={`max-w-[1143px] mb-2 mx-auto about-content ${openMore ? 'open' : ''}`}
        ref={contentRef}
        style={{
          maxHeight: openMore ? `${contentRef.current?.scrollHeight}px` : '0px',
          opacity: openMore ? 1 : 0,
        }}>
        <TitleText text="История Яхт-клуба" black className="opacity-1" />
        <p className="text-black opacity-60 text-2xl my-8 mb-20 p-4 text-center lg:text-left">
          {data.SiteData.aboutUsFull}
        </p>
      </div>
    </section>
  );
};
