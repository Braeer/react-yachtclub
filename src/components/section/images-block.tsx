import { Button, TitleText } from '../';

export const ImagesBlock = () => {
  return (
    <div id="gallery" className="bg-[#323E46]">
      <TitleText text="Наша Галерея" className="py-[100px]" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-0 gap-4">
        <img src="img/headerbg.webp" alt="" />
        <img src="img/headerbg.webp" alt="" />
        <img src="img/headerbg.webp" alt="" />
        <img src="img/headerbg.webp" alt="" />
        <img src="img/headerbg.webp" alt="" />
        <img src="img/headerbg.webp" alt="" />
      </div>

      <div className="flex justify-center ">
        <Button text="Вся галерея" className="my-20" />
      </div>
    </div>
  );
};
