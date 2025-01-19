// import { useState } from 'react';
import { AccordionQuestion } from '../accordion-question';
import data from '../../assets/data.json';
import { TitleText } from '../ui';

export const FaqBlocks = () => {
  return (
    <div className="bg-[#323E46] relative">
      <TitleText text="Часто задаваемые вопросы ?!" className="pt-[100px]" />
      <div className="py-[200px] flex-col flex gap-10 justify-items-center items-center">
        {data.AccordionData.map((item, index) => (
          <AccordionQuestion key={index} title={item.title} description={item.description} />
        ))}
      </div>

      <img
        src="img/figure-small.png"
        alt="figure"
        className="hidden lg:block absolute top-[60%] right-[-5%] z-0"
      />
      <img
        src="img/figure-small.png"
        alt="figure"
        className="hidden lg:block absolute z-[10] translate-x-[-50%] top-[40%]"
      />
    </div>
  );
};
