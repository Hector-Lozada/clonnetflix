"use client";
import { useScrollPosition } from '@/hooks/useScrollPosition'
import { ModeToggle } from '@/components/mode-toggle'
import {cn} from '@/lib/utils'
import { BellRing, Search } from 'lucide-react'
import { Logo } from '@/components/Shared/Logo'
import { itemsNavbar } from '@/data/itemsNavbar'
import Link from 'next/link'

export  function NavDesktop() {
  const scrollPosition = useScrollPosition();
  console.log(scrollPosition)
  return (
    <div
    className={cn(
      "z-30 left-0 right-0 top-0 h-16 fixed w-full transation-all duration-300",
      scrollPosition > 20 ? "bg-[#008000]" : "bg-transparent"
    )}
    >
      <div className='px-[4%] mx-auto h-full'>
        <div className="flex gap-4 justify-between h-full items-center">
          <div className="flex gap-2 items-center">
            <Logo />
            <div className='ml-10 flex gap-4'>
              {itemsNavbar.map((item) => (
                <Link 
                key={item.name} 
                href={item.href}
                className='text-white hover:text-[#008000] dark:hover:text-[#008000] transition-all duration-300'>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className=' flex gap-4 items-center'>
            <Search className='text-white cursor-pointer' />
            <BellRing className='text-white cursor-pointer' />
            <div className='flex gap-2 items-center'>
              <p>Usuario</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
