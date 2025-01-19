import { cn } from '../lib/utils';

type Props = {
  img: string;
  stars?: number;
  description: string;
  fullName: string;
  isDownNumber: 0 | 1 | 2;
  isVisible: boolean;
  style?: React.CSSProperties;
};

export const TeamCard = ({
  img,
  stars,
  description,
  fullName,
  isDownNumber,
  isVisible,
  style,
}: Props) => {
  return (
    <div
      className={cn(
        'min-h-[503px] h-[540px] w-[358px] bg-[#323E46] relative z-30 rounded-2xl my-6',
        (isDownNumber == 1 && isVisible && 'animatedTeamCard60') ||
          (isDownNumber == 2 && isVisible && 'animatedTeamCard120'),
      )}
      style={style}>
      <img
        src={img}
        alt="avatar"
        className="w-[138px] rounded-full absolute top-[-70px] left-[50%] translate-x-[-50%]"
      />
      <div className="flex flex-col px-[34px] pt-[120px]">
        <div className="flex gap-3 pb-5">
          {Array(stars)
            .fill(0)
            .map((_, index) => (
              <img key={index} src="img/star.svg" alt="star" className="gap-3" />
            )) || <></>}
        </div>
        <p className="text-gray text-xl mb-3">{description}</p>
        <h3 className="text-[20px] font-bold leading-[150%] ">{fullName}</h3>
      </div>
    </div>
  );
};
