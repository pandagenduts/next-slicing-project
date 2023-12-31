import React from 'react';
import { IoAdd } from 'react-icons/io5';

export default function AddProduct(props) {
  const { handleShowModal } = props;

  const handleAddNewProduct = () => {
    handleShowModal();
  };

  return (
    <div
      className='flex cursor-pointer flex-col items-center justify-center gap-3 rounded-xl bg-mainGrey'
      onClick={handleAddNewProduct}
    >
      <IoAdd style={{ width: '24px', height: '24px' }} />
      Add Product
    </div>
  );
}
