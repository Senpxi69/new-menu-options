import React from 'react'
import { Button } from '@mantine/core'
import SlideCamera from "../RecordSectionButtons/images/Slides&Camera.png"
import Image from 'next/image'

function SlideCameraButton() {
  return (
    <div>
        <Button
                size="lg"
                className="m-1 bg-gray-100 border border-gray-300 hover:border-blue-500 flex flex-col justify-center items-center"
                style={{
                    width: '167px',
                    height: '141px',
                    fontSize: '1.2rem',
                    color: 'black',
                    borderRadius: '10px',
                    boxShadow: 'none',
                    padding: '16px',
                }}
            >
                <div className="flex flex-col justify-center items-center">

                <Image src={SlideCamera} alt="Camera SVG" />
                    <p className=' text-gray-500 text-sm'>Camera</p>
                </div>
            </Button>
    </div>
  )
}

export default SlideCameraButton