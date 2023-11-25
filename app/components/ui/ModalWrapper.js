import React from 'react';

export default function ModalWrapper(props) {
  const { children, handleShowModal } = props;

  const handleCloseModal = () => {
    handleShowModal();
  };

  return (
    <div className='fixed top-0 left-0 z-20 w-full h-full flex justify-center items-center px-4 py-8'>
      <div
        id='overlay'
        className='absolute top-0 left-0 w-full h-full bg-modalOverlay'
        onClick={handleCloseModal}
      ></div>
      <div
        id='modal-content'
        className='max-w-[600px] mx-auto w-full h-full relative overflow-y-auto flex flex-col min-[1160px]:max-w-none min-[1160px]:items-center'
      >
        <div className='max-w-[600px] w-full relative m-auto'>
          {/* notification on mobile start */}
          <div className='p-[20px] mb-4 purple-gradient rounded-lg min-[1160px]:w-[220px] min-[1160px]:absolute min-[1160px]:top-0 min-[1160px]:-right-[247px] min-[1160px]:hidden'>
            <h4 className='mb-4 font-bold'>Looking for variant ?</h4>
            <p className='mb-4 text-sm'>Don&rsquo;t worry!!</p>
            <p className='text-sm'>
              size, sugar level, ice level will be unlocked if you already
              approved by admin.
            </p>
          </div>
          {/* notification on mobile end */}

          <div className='bg-[#222] px-6 sm:px-[38px] py-8 rounded-lg relative'>
            {children}
          </div>

          {/* notification on desktop start */}
          <div className='p-[20px] mb-4 purple-gradient rounded-lg min-[1160px]:w-[220px] min-[1160px]:absolute min-[1160px]:top-0 min-[1160px]:-right-[247px] hidden min-[1160px]:block'>
            <h4 className='mb-4 font-bold'>Looking for variant ?</h4>
            <p className='mb-4 text-sm'>Don&rsquo;t worry!!</p>
            <p className='text-sm'>
              size, sugar level, ice level will be unlocked if you already
              approved by admin.
            </p>
          </div>
          {/* notification on desktop end */}
        </div>
      </div>
    </div>
  );
}
