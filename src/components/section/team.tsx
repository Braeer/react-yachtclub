import { Button } from '../ui/button';
import { TeamCard } from '../team-card';
import data from '../../assets/data.json';
import { useEffect, useRef, useState } from 'react';
import { TitleText } from '../ui';

const Team = () => {
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

  const handleShowMore = () => {
    setVisibleCount(data.TeamCardData.length);
  };

  return (
    <div id="team" className="bg-[#F4EFE0] relative">
      <TitleText text="Команда Яхт-Клуба" black className="pt-[100px] pb-[125px]" />
      <div className="flex gap-8 justify-center z-20 flex-wrap max-w-[1440px] mx-auto" ref={ref}>
        {data.TeamCardData.slice(0, 3).map((card) => (
          <TeamCard
            key={card.id}
            isDownNumber={card.id}
            isVisible={isVisible}
            img={'img/team/' + card.img}
            stars={card.stars}
            description={card.description}
            fullName={card.fullName}
          />
        ))}
        {data.TeamCardData.slice(3, visibleCount).map((card) => (
          <div key={card.id} className="card w-[350px] z-10">
            <TeamCard
              key={card.id}
              isDownNumber={card.id}
              isVisible={isVisible}
              img={'img/team/' + card.img}
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
      <img
        loading="lazy"
        src="img/figure.png"
        alt="figure"
        className="hidden md:block  absolute top-0 left-[70%] z-10"
      />
      <img
        loading="lazy"
        src="img/figure.png"
        alt="figure"
        className="absolute  bottom-[1%] left-[0%] z-10  translate-x-[-50%] translate-y-[50%]"
      />
    </div>
  );
};

export default Team;
