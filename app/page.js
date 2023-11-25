'use client';

import { useEffect, useState } from 'react';
import AddNewProduct from './components/product-list/AddNewProduct';
import Modal from './components/ui/Modal';
import { TbPencil } from 'react-icons/tb';
import { LuSearch } from 'react-icons/lu';
import { LiaUploadSolid } from 'react-icons/lia';

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const categoryClasses =
    'py-1 px-3 md:px-4 md:py-2 border border-mainWhite rounded-xl whitespace-nowrap cursor-pointer';

  const handleShowModal = () => {
    setShowModal((prev) => !prev);
  };

  useEffect(() => {
    const body = document.querySelector('body');

    if (showModal) body.classList.add('active');
    else body.classList.remove('active');
  }, [showModal]);

  return (
    <>
      <section className='container pb-20'>
        <header className='min-[360px]:flex sm:flex-row justify-between mb-8 gap-4'>
          <div className='relative max-w-[255px] mb-4 min-[360px]:m-0'>
            <input type='text' placeholder='Search product' className='pr-10 placeholder:text-[#898e9a]' />
            <LuSearch
              style={{ width: '20px', height: '20px' }}
              className='absolute top-3 right-3 text-[#aa5afa] pointer-events-none'
            />
          </div>
          <button className='h-full flex gap-2 py-2 px-6 md:py-[10px] md:px-9 items-center outline outline-1 outline-secWhite rounded-[4px]'>
            <LiaUploadSolid style={{ width: '16px', height: '16px' }} />
            Import
          </button>
        </header>

        <div className='mb-6 flex items-center overflow-auto rounded-xl bg-mainGrey px-4 py-4 md:px-8 md:py-4 text-sm font-medium'>
          <span className='mr-3'>Category</span>
          <ul className='mr-6 flex gap-3'>
            <li className={categoryClasses}>
              <span>Cocktail</span>
            </li>
            <li className={categoryClasses}>
              <span>Shooters</span>
            </li>
            <li className={categoryClasses}>
              <span>Premium Spirits</span>
            </li>
            <li className={categoryClasses}>
              <span>Non-Alcoholic Beverages</span>
            </li>
          </ul>
          <button className='h-[30px] w-[30px] cursor-pointer'>
            <TbPencil style={{ width: '20px', height: '20px' }} />
          </button>
        </div>

        <main className='grid auto-rows-[minmax(0,_2fr)] grid-cols-1 gap-5 min-[450px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 min-[1151px]:w-[1044px] min-[1151px]:gap-11'>
          <AddNewProduct handleShowModal={handleShowModal} />
          {showModal && <Modal handleShowModal={handleShowModal} />}
        </main>
      </section>
    </>
  );
}
