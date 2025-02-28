import { cn } from '../../lib/utils';

type Props = {
  text: string;
  className?: string;
  black?: boolean;
};

export const TitleText = ({ text, className, black }: Props) => {
  return (
    <h1
      className={cn(
        'text-[48px] md:text-[64px] font-OpenSans font-bold text-white text-center',
        black && 'text-black',
        className,
      )}>
      {text}
    </h1>
  );
};
