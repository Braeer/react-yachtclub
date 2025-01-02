import React from 'react';

type Props = {
  title: string;
  description: string;
};

export const AccordionQuestion = ({ title, description }: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const contentRef = React.useRef<null | HTMLDivElement>(null);

  function handleClickOpen() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="w-[751px] p-[1px] min-h-[100px}">
      <div className="w-[751px] min-h-[100px] rounded-[20px] gradientAccordion">
        <button
          className="flex items-center justify-between min-h-[100px]  w-full rounded-[20px] h-full"
          onClick={handleClickOpen}>
          <p className="text-[32px] leading-[150%] text-white pl-[40px] font-normal font-Inter">
            {title}
          </p>
          <div className="flex items-center w-[53px] h-[53px] mr-[40px] justify-center rounded-full bg-[#F4EFE0]">
            <div className={`icon ${isOpen ? 'open' : ''}`}>
              <div className="line line1"></div>
              <div className="line line2"></div>
            </div>
          </div>
        </button>

        <div
          className={`accordion-content ${isOpen ? 'open' : ''}`}
          ref={contentRef}
          style={{
            maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px',
            opacity: isOpen ? 1 : 0,
          }}>
          <p className="max-w-[684px] text-[20px] font-normal font-Inter text-white leading-[150%] pl-[40px] text-start pb-[45px]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
