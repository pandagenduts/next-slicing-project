'use client';

import React from 'react';
import ModalWrapper from './ModalWrapper';
import { Switch } from 'antd';
import { IoCloseOutline } from 'react-icons/io5';
import { LiaUploadSolid } from 'react-icons/lia';
import { IoChevronDownOutline } from "react-icons/io5";
export default function Modal(props) {
  const { handleShowModal } = props;

  const handleCloseModal = () => {
    handleShowModal();
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <ModalWrapper handleShowModal={handleShowModal}>
      <IoCloseOutline
        style={{ width: '24px', height: '24px' }}
        className='absolute top-4 right-4 cursor-pointer'
        onClick={handleCloseModal}
      />
      <h4 className='text-center mb-7 text-lg font-bold'>Add menu</h4>
      <form
        onSubmit={handleFormSubmit}
        className='font-poppins flex flex-col gap-[20px]'
      >
        <section className='flex gap-[20px]'>
          <div className='flex-1'>
            <label htmlFor='product-name'>Your product name</label>
            <input
              type='text'
              placeholder='Product name'
              id='product-name'
              name='product-name'
            />
          </div>

          <div className='flex-1'>
            <label htmlFor='menu-code'>Menu code</label>
            <input
              type='text'
              placeholder='menu code'
              id='menu-code'
              name='menu-code'
            />
          </div>
        </section>

        <section>
          <label htmlFor='category'>Category</label>

          <div className='relative'>
            <select id='category' name='category'>
              <option value=''>
                Select Category
              </option>
              <option value='option1'>Category 1</option>
              <option value='option2'>Category 2</option>
              <option value='option3'>Category 3</option>
            </select>
            <IoChevronDownOutline
              style={{ width: '20px', height: '20px' }}
              className='absolute top-3 right-3 text-[#aa5afa] pointer-events-none'
            />
          </div>
        </section>

        <section>
          <label htmlFor='product-description'>
            Tell me more about your product
            <span className='text-danger'>*</span>
          </label>
          <textarea
            name='product-description'
            id='product-description'
            cols='30'
            rows='4'
            placeholder='Product description'
          ></textarea>
        </section>

        <section className='flex gap-4 price'>
          <div className='flex-1'>
            <label htmlFor='price'>
              Price<span className='text-danger'>*</span>
            </label>
            <div className='relative'>
              <input
                type='number'
                name='price'
                id='price'
                placeholder='Price'
                className='pl-12'
              />
              <span className='absolute top-[11px] left-2'>NT$</span>
            </div>
          </div>
          <div className='flex-1'>
            <label htmlFor='discount-price'>Discount price (optional)</label>
            <div className='relative'>
              <input
                type='number'
                name='discount-price'
                id='discount-price'
                placeholder='Discounted Price'
                className='pl-12'
              />
              <span className='absolute top-[11px] left-2'>NT$</span>
            </div>
          </div>
        </section>

        <section id='upload'>
          <label htmlFor='image'>
            Image<span className='text-danger'>*</span>
          </label>
          <div className='relative'>
            <input type='text' name='image' id='image' value='Select File' readOnly />
            <LiaUploadSolid
              style={{ width: '20px', height: '20px' }}
              className='absolute top-3 right-3 text-[#aa5afa] pointer-events-none'
            />
          </div>
        </section>

        <section className='flex justify-between'>
          <p>Enable Variant</p>
          <Switch />
        </section>

        <button
          type='submit'
          className='purple-gradient py-3 px-3 w-full rounded-md'
        >
          Add product
        </button>
      </form>
    </ModalWrapper>
  );
}
