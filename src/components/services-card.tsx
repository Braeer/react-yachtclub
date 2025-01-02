import React from 'react';
import { Button } from './button';
import Modal from 'react-modal';
import { ServiceModal } from './modal/service-modal';

type Props = {
  img: string;
  title: string;
  description: string;
  fullDescription: string;
  price: number;
  coach: {
    fullName: string;
    personImg: string;
  };
  fullImg: string;
  onOpen?: () => void;
};

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '1150px',
    width: '100%',
    background: '#323E46',
    border: 'none',
    borderRadius: '44px',
    padding: '60px',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1000,
  },
};

Modal.setAppElement('#root');

export const ServicesCard = ({
  img,
  title,
  description,
  onOpen,
  fullImg,
  price,
  fullDescription,
  coach,
}: Props) => {
  const [isOpenModal, setIsOpenModal] = React.useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  };
  function closeModal() {
    setIsOpenModal(false);
  }

  return (
    <>
      <div className="relative">
        <div
          onClick={onOpen}
          className="cursor-pointer mt-20 mb-5 w-[360px] h-[528px] gradientServiceCardBorder rounded-3xl content-center z-10">
          <div className="gradientServiceCard w-[358px] h-[526px] px-[30px] pb-12 pt-[68px] relative rounded-3xl z-5 mx-auto">
            <img
              src={img}
              alt="image service"
              className="absolute top-[-80px] rounded-full z-10 left-[110px] w-[138px] h-[138px]"
            />
            <div className="flex flex-col pt-2 relative">
              <h3 className="text-[24px] font-bold leading-[110%] text-white pb-[21px]">{title}</h3>
              <p className="text-xl leading-[150%] text-white tracking-[0.03em] font-normal max-w-[284px]">
                {description}
              </p>
              <Button
                text="Подробнее"
                className="absolute top-[340px] left-10px mt-[30px]"
                onClick={openModal}
              />
            </div>
          </div>
        </div>
      </div>
      <Modal
        onRequestClose={closeModal}
        isOpen={isOpenModal}
        ariaHideApp={false}
        bodyOpenClassName={'overflow-hidden h-screen'}
        style={customStyles}>
        <ServiceModal
          fullDescription={fullDescription}
          img={'src/assets/img/modal/amenities/' + fullImg}
          price={price}
          coach={coach}
          closeModal={closeModal}
        />
      </Modal>
    </>
  );
};
