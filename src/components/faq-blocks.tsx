// import { useState } from 'react';
import { AccordionQuestion } from './accordion-question';
import data from '../assets/data.json';

export const FaqBlocks = () => {
  return (
    <div className="bg-[#323E46] relative">
      <h1 className="h2-text text-white text-center pt-[100px]">Часто задаваемые вопросы ?!</h1>
      <div className="py-[200px] flex-col flex gap-10 justify-items-center items-center">
        {data.AccordionData.map((item, index) => (
          <AccordionQuestion key={index} title={item.title} description={item.description} />
        ))}
      </div>

      <img
        src="/src/assets/img/figure-small.png"
        alt="figure"
        className="absolute top-[60%] right-0 z-0"
      />
      <img
        src="/src/assets/img/figure-small.png"
        alt="figure"
        className="absolute z-[10] translate-x-[-50%] top-[40%]"
      />
    </div>
  );
};
