import { cn } from '../../lib/utils';

type Props = {
  className?: string;
  right?: boolean;
};

export const BlueShadow = ({ className, right = false }: Props) => {
  return (
    <div
      className={cn(
        'absolute translate-x-[-40%] translate-y-[-50%] shadow-[#0C8CE9]  shadow-[0_0_150px_90px] xl:shadow-[0_0_150px_150px] xl:shadow-[#0C8CE9] rounded-full opacity-80',
        right ? 'top-[3vh] md:top-[45vh] md:left-[100%]' : 'left-[100%] md:top-[10%] md:left-[0%]',
        className,
      )}
    />
  );
};
