export const Footer = () => {
  return (
    <footer className="bg-[#323E46] h-[200px]">
      <div className="flex flex-col-reverse items-center py-7 h-full">
        <h4 className="text-gray text-center font-bold font-OpenSans text-[22px]">
          Design by{' '}
          <a href="" className="text-white hover:underline">
            Милан
          </a>
        </h4>
        <h4 className="text-gray text-center font-bold font-OpenSans text-[22px]">
          Develop by{' '}
          <a href="" className="text-white hover:underline">
            Тимур Багаев
          </a>
        </h4>
      </div>
    </footer>
  );
};
