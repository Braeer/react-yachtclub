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
          observer.disconnect(); // Отключаем наблюдение после срабатывания
        }
      },
      { threshold: 0.3 }, // Запускаем анимацию, когда 10% элемента видимо
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

  const TeamCardCalculited: (value: number) => 0 | 1 | 2 = (value: number) => {
    if (value % 3 === 0) {
      return 2;
    }
    if (value % 3 === 2) {
      return 1;
    } else {
      return 0;
    }
  };

  // const cards = Array.from({ length: data.TeamCardData.length + 3 }, (_, index) => ({
  //   id: index + 1,
  //   content: (
  //     <TeamCard
  //       key={card.id}
  //       isDownNumber={TeamCardCalculited(card.id)}
  //       isVisible={isVisible}
  //       img={'/src/assets/cards/teams/' + card.img}
  //       stars={card.stars}
  //       description={card.description}
  //       fullName={card.fullName}
  //     />
  //   ),
  // }));

  const handleShowMore = () => {
    setVisibleCount(data.TeamCardData.length);
  };

  return (
    <div className="bg-[#F4EFE0] relative z-10 overflow-hidden">
      <h2 className="text-[64px] font-OpenSans font-bold text-black text-center pt-[100px] pb-[125px]">
        Команда Яхт-Клуба
      </h2>
      <div className="flex gap-8 justify-center z-20 flex-wrap max-w-[1440px] mx-auto" ref={ref}>
        {data.TeamCardData.slice(0, 3).map((card) => (
          <TeamCard
            key={card.id}
            isDownNumber={TeamCardCalculited(card.id)}
            isVisible={isVisible}
            img={'/src/assets/cards/teams/' + card.img}
            stars={card.stars}
            description={card.description}
            fullName={card.fullName}
          />
        ))}
        {data.TeamCardData.slice(3, visibleCount).map((card) => (
          <div key={card.id} className="card w-[350px] z-20">
            <TeamCard
              key={card.id}
              isDownNumber={TeamCardCalculited(card.id)}
              isVisible={isVisible}
              img={'/src/assets/cards/teams/' + card.img}
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
      <div className="mb-40" />
      <img src="/src/assets/img/figure.png" alt="figure" className="absolute top-0 right-0 z-0" />
      <img
        src="/src/assets/img/figure.png"
        alt="figure"
        className="absolute bottom-[0] left-[10%] z-[-10] translate-x-[-50%]"
      />
    </div>
  );
};
