"use client"
import React from 'react'
import SideBar from './Components/SideBar'
import { MantineProvider } from '@mantine/core'
import MiddleSection from './Components/MiddleSection'
import ControlBar from './Components/ControlBar'

function page() {
  return (
    <div className='flex'>
      <MantineProvider>
        <SideBar />
        <MiddleSection />
      </MantineProvider>
    </div>
  )
}

export default page