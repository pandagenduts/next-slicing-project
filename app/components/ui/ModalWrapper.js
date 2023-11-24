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
        className='bg-[#222] max-w-[600px] w-full min-h-[669px] px-[38px] py-8 relative block'
      >
        {children}
        <div className='p-[20px] purple-gradient rounded-lg w-[220px] absolute top-0 -right-[247px]'>
          <h4 className='mb-4'>Looking for variant ?</h4>
          <p className='mb-4'>Don't worry!!</p>
          <p>
            size, sugar level, ice level will be unlocked if you already
            approved by admin.
          </p>
        </div>
      </div>
    </div>
  );
}
