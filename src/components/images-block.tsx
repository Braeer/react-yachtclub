import { Button } from './ui/button';

export const ImagesBlock = () => {
  return (
    <div className="bg-[#323E46]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-0 gap-4">
        <img src="/src/assets/img/headerbg.webp" alt="" />
        <img src="/src/assets/img/headerbg.webp" alt="" />
        <img src="/src/assets/img/headerbg.webp" alt="" />
        <img src="/src/assets/img/headerbg.webp" alt="" />
        <img src="/src/assets/img/headerbg.webp" alt="" />
        <img src="/src/assets/img/headerbg.webp" alt="" />
      </div>

      <div className="flex justify-center pb-[100px pb- mt-[52px] ">
        <Button text="Вся галерея" className="" />
      </div>
    </div>
  );
};
