import { NavLinks } from '@/constants'
import { link } from 'fs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AuthProviders from './AuthProviders'

const Navbar = () => {

  const session = null

  return (
    <nav className='flexBetween navbar'>
      <div className='flex-1 flexStart gap-10'>
        <Link href={"/"}>
          <Image
            src="/logo.svg"
            width={115}
            height={43}
            alt='flexible'
          />
        </Link>
        <ul className='xl:flex hidden text-small gap-10'>
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.key}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>
      <div className='flexCenter gap-4'>
        {session ? (
          <>
            Userphoto
            <Link href={"/create-project"}>
              sharework
            </Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  )
}

export default Navbar
