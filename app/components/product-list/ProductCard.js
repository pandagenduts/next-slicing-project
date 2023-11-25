import React from 'react'

import Image from 'next/image'

export default function ProductCard() {
  return (
    <div className='flex cursor-pointer flex-col rounded-xl bg-mainGrey p-4'>
    <h4 className='mb-[13px]'>15.000 NT</h4>
    <Image
      src='/Product-1.png'
      width={196}
      height={153}
      alt='Product-Image'
      className='mb-3 max-h-[153px] w-full rounded-lg object-cover'
    />
    <h2 className='product-card-title mb-[13px] font-bold'>
      Pack of Beer (6pcs of heineken)
    </h2>
    <p className='mb-[13px] text-sm'>
      Heineken lager beer, or known as just Heineken, is one of the pale
      beers with 5% alcohol.{' '}
    </p>
    <span className='block text-sm font-bold'>6pcs</span>
  </div>
  )
}
