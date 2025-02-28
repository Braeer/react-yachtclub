import { cn } from '../../lib/utils';

type Props = {
  text: string;
  className?: string;
  dark?: boolean;
  long?: boolean;
  onClick?: () => void;
};

export const Button = ({ text, className, dark, onClick, long }: Props) => {
  return (
    <button
      className={cn(
        'bg-regular-blue font-sans text-white font-medium leading-6 text-xl w-[164px] h-[56px] rounded-xl buttonO',
        long && 'text-[32px] max-w-[320px] w-[90vw] min-w-[220px]',
        dark && 'bg-[#323E46]',
        className,
      )}
      onClick={onClick}>
      {text}
    </button>
  );
};
