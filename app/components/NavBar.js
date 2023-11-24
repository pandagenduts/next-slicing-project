import Link from 'next/link'
import React from 'react'

export default function NavBar() {
  const linkClasses = 'flex-1 py-3 nav-item px-3'

  return (
    <nav className='fixed left-0 bottom-0 w-full flex text-center overflow-auto'>
      <Link href='/' className={`${linkClasses} nav-active`}>Nightclub Profile</Link>
      <Link href='/' className={`${linkClasses} nav-active`}>Featured</Link>
      <Link href='/' className={`${linkClasses} nav-active`}>Beverages</Link>
      <Link href='/' className={linkClasses}>Table Information</Link>
      <Link href='/' className={linkClasses}>Operational Hour</Link>
      <button className='flex-1'>NEXT</button>
    </nav>
  )
}
