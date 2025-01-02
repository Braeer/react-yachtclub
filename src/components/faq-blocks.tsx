// import { useState } from 'react';
import { AccordionQuestion } from './accordion-question';

export const FaqBlocks = () => {
  // const [activeIndex, setActiveIndex] = useState();

  // const handleItemClick = (index: number) => {
  //   setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  // };
  return (
    <div className="bg-[#323E46] relative">
      <h1 className="text-[64px] font-bold font-OpenSans leading-[108%] text-white text-center pt-[100px]">
        Часто задаваемые вопросы ?!
      </h1>
      <div className="py-[200px] flex-col flex gap-10 justify-items-center items-center">
        <AccordionQuestion
          title="Как стать членом яхт-клуба?"
          description="Занятие 5-ю видами спорта: плаванием в бассейне, греблей и парусным спортом, стрельбой в тире, кроссовая подготовка. Участие в соревнованиях разного уровня"
        />
        <AccordionQuestion
          title="Как стать членом яхт-клуба?"
          description="Занятие 5-ю видами спорта: плаванием в бассейне, греблей и парусным спортом, стрельбой в тире, кроссовая подготовка. Участие в соревнованиях разного уровня"
        />
        <AccordionQuestion
          title="Как стать членом яхт-клуба?"
          description="Занятие 5-ю видами спорта: плаванием в бассейне, греблей и парусным спортом, стрельбой в тире, кроссовая подготовка. Участие в соревнованиях разного уровня"
        />
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
