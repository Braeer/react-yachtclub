import { Button } from './button';
import { TeamCard } from './team-card';
import data from '../assets/data.json';
import { useEffect, useRef, useState } from 'react';

export const Team = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCount, setVisibleCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  // TODO:Исправить это:
  const calculateTeamCardPosition = (id: number): 0 | 1 | 2 => {
    switch (id % 3) {
      case 0:
        return 2;
      case 2:
        return 1;
      default:
        return 0;
    }
  };
  const handleShowMore = () => {
    setVisibleCount(data.TeamCardData.length);
  };

  return (
    <div className="bg-[#F4EFE0] relative">
      <h2 className="text-[64px] font-OpenSans font-bold text-black text-center pt-[100px] pb-[125px]">
        Команда Яхт-Клуба
      </h2>
      <div className="flex gap-8 justify-center z-20 flex-wrap max-w-[1440px] mx-auto" ref={ref}>
        {data.TeamCardData.slice(0, 3).map((card) => (
          <TeamCard
            key={card.id}
            isDownNumber={calculateTeamCardPosition(card.id)}
            isVisible={isVisible}
            img={'/src/assets/img/team/' + card.img}
            stars={card.stars}
            description={card.description}
            fullName={card.fullName}
          />
        ))}
        {data.TeamCardData.slice(3, visibleCount).map((card) => (
          <div key={card.id} className="card w-[350px] z-10">
            <TeamCard
              key={card.id}
              isDownNumber={calculateTeamCardPosition(card.id)}
              isVisible={isVisible}
              img={'/src/assets/img/team/' + card.img}
              stars={card.stars}
              description={card.description}
              fullName={card.fullName}
            />
          </div>
        ))}
      </div>
      {visibleCount < data.TeamCardData.length && (
        <Button
          text="Вся команда"
          dark
          className="mx-auto block mt-[60px]"
          onClick={handleShowMore}></Button>
      )}
      <div />
      <div className="pb-40" />
      <img src="/src/assets/img/figure.png" alt="figure" className="absolute top-0 right-0 z-10" />
      <img
        src="/src/assets/img/figure.png"
        alt="figure"
        className="absolute  bottom-[0%] left-[10%] z-10  translate-x-[-50%] translate-y-[50%]"
      />
    </div>
  );
};
