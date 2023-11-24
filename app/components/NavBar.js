import Link from "next/link";
import React from "react";

export default function NavBar() {
  const linkClasses = "flex-1 py-3 px-6 lg:px-0 nav-item whitespace-nowrap";

  return (
    <nav className="fixed bottom-0 left-0 flex w-full overflow-auto text-center ">
      <Link href="/" className={`${linkClasses} nav-active`}>
        Nightclub Profile
      </Link>
      <Link href="/" className={`${linkClasses} nav-active`}>
        Featured
      </Link>
      <Link href="/" className={`${linkClasses} nav-active`}>
        Beverages
      </Link>
      <Link href="/" className={linkClasses}>
        Table Information
      </Link>
      <Link href="/" className={linkClasses}>
        Operational Hour
      </Link>
      <button className="flex-1 py-3 px-6 lg:px-0">NEXT</button>
    </nav>
  );
}
