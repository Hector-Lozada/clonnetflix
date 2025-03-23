import { Logo } from '@/components/Shared/Logo'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { itemsNavbar } from '@/data/itemsNavbar'
import { BellRing, Menu, Search } from 'lucide-react'
import Link from 'next/link'

export  function NavMobile() {
  return (
    <div className="p-4 flex justify-between">
      <Logo />

      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent side="left" className='bg-[#008000]'>
          <div className='flex flex-col gap-4 text-white'>
            {itemsNavbar.map((item) => (
              <Link key={item.name} href={item.href} className='hover:text-green-300 transation-all duration-300'>
                {item.name}
              </Link>
            ))}
          </div>
          <div className='border-[1px] border-white/70 my-5'/>
          <div className='flex justify-between gap-6 mt-4'>
              <Search className='cursor-pointer text-white'/>
              <BellRing className='cursor-pointer text-white' />
          </div>
       </SheetContent>
      </Sheet>
    </div>
  )
}
