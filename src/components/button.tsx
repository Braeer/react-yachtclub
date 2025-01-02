import { cn } from '../lib/utils';

type Props = {
  text: string;
  className?: string;
  dark?: boolean;
  onClick?: () => void;
};

export const Button = ({ text, className, dark, onClick }: Props) => {
  return (
    <button
      className={cn(
        'bg-regular-blue font-sans text-white font-medium leading-6 text-xl w-[164px] h-[56px] rounded-xl buttonO',
        dark && 'bg-[#323E46]',
        className,
      )}
      onClick={onClick}>
      {text}
    </button>
  );
};
