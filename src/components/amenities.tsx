import { ServicesCard } from './services-card';
import data from '../assets/data.json';

export const Amenities = () => {
  return (
    <div className="bg-[#323E46]">
      <div className="">
        <h2 className="text-[64px] font-OpenSans font-bold text-white text-center pt-[100px]">
          Услуги
        </h2>
        <p className="text-base max-w-[500px] text-center text-white mx-auto mt-[25px] mb-[9px]">
          Здесь представлен полный перечень услуг оказываемых в яхт-клубе
        </p>
      </div>

      <div className="flex gap-8 flex-nowrap overflow-auto pt-14 ">
        {data.ServiceCardData.map((card) => (
          <ServicesCard
            key={card.id}
            img={'/src/assets/img/cards/services/' + card.img}
            title={card.title}
            description={card.description}
            fullImg={card.modal.fullImg}
            price={card.modal.price}
            fullDescription={card.modal.fullDescription}
            coach={card.modal.coach}
          />
        ))}
      </div>
      {/* <img src={bottomImage} alt="AmenitiesBottomImage" className="block bg-repeat mt-20" /> */}
      <div className="bg-[url('/src/assets/img/AmenitiesBottomImage.png')] bg-cover mt-20 h-[200px]"></div>
    </div>
  );
};
