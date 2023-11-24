import React from 'react';

export default function ModalWrapper(props) {
  const { children, handleShowModal } = props;

  const handleCloseModal = () => {
    handleShowModal();
  };

  return (
    <div className='fixed top-0 left-0 z-20 w-screen h-screen flex justify-center items-center px-4'>
      <div
        id='overlay'
        className='absolute top-0 left-0 w-full h-full bg-modalOverlay'
        onClick={handleCloseModal}
      ></div>
      <div
        id='modal-content'
        className='max-w-[600px] w-full max-h-[90%] overflow-y-auto min-[1160px]:overflow-visible relative'
      >
        <div className='p-[20px] mb-4 purple-gradient rounded-lg min-[1160px]:w-[220px] min-[1160px]:absolute min-[1160px]:top-0 min-[1160px]:-right-[247px]'>
          <h4 className='mb-4 font-bold'>Looking for variant ?</h4>
          <p className='mb-4 text-sm'>Don't worry!!</p>
          <p className='text-sm'>
            size, sugar level, ice level will be unlocked if you already
            approved by admin.
          </p>
        </div>

        <div className='bg-[#222] relative px-6 sm:px-[38px] py-8 rounded-lg'>{children}</div>
      </div>
    </div>
  );
}
