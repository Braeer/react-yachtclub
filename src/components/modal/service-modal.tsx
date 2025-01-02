import { Button } from '../button';

type Props = {
  fullDescription: string;
  img: string;
  price: number;
  coach: Array<{
    fullName: string;
    personImg: string;
  }>;
  closeModal: () => void;
};

export const ServiceModal: React.FC<Props> = ({
  closeModal,
  img,
  fullDescription,
  price,
  coach,
}) => {
  return (
    <div className="relative overflow-y-auto overflow-x-auto max-h-[80vh]">
      <Button text="Закрыть" onClick={closeModal} className="absolute top-[0] right-[0] mb-" />

      <div className="max-w-[900px] w-full mx-auto">
        <img src={img} alt="image" className=" pt-[100px] max-w-[900px] w-full" />
        <h3 className="font-OpenSans font-bold my-2 text-[40px] text-white">Описание</h3>
        <p className="text-[20px] leading-[150%] ">{fullDescription}</p>
        <h3 className="font-OpenSans font-bold mt-6 text-[40px] text-white">Стоимость</h3>
        <p className="text-[20px] leading-[150%]">
          <b>{price}</b> р - в месяц
        </p>
        <h3 className="font-OpenSans font-bold mt-6 text-[40px] text-white">Тренера</h3>
        <div className="flex gap-6">
          {coach.map((item) => (
            <div className="flex items-center gap-4 flex-col max-w-[150px] p-4">
              <img
                src={`/src/assets/img/team/${item.personImg}`}
                alt="coach"
                className="w-[100px] h-[100px] rounded-full"
              />
              <p className="text-[20px] leading-[150%] max-w-[150px] text-center text-wrap">
                {item.fullName}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
