
import { UserButton } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center bg-gradient-to-r from-indigo-700 to-purple-300'>
      UserButton
      <UserButton afterSignOutUrl="/" signInUrl='/sign-in'/>
    </div>
  )
}

export default page
