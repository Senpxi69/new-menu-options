import React from 'react'
import SideBar from './Components/SideBar'
import { MantineProvider } from '@mantine/core'

function page() {
  return (
    <div>
      <MantineProvider>
        <SideBar />
      </MantineProvider>
    </div>
  )
}

export default page