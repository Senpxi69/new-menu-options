import React from 'react'
import ScreenAudio from '../RecordSectionButtons/images/Screen&Camera.png'
import Image from 'next/image'
import { Button } from '@mantine/core'

function ScreenCameraButton() {
    return (
        <div>
            <Button
                size="lg"
                className="m-1 bg-transparent border border-gray-300 hover:border-blue-500 flex flex-col justify-center items-center"
                style={{
                    width: '167px',
                    height: '141px',
                    fontSize: '1.2rem',
                    color: 'black',
                    borderRadius: '10px',
                    boxShadow: 'rgba(0, 0, 0, 0.06) 0px,1px,1px',
                    padding: '16px',
                }}
            >
                <div className="flex flex-col justify-center items-center">

                    <Image src={ScreenAudio} alt="Camera SVG" />
                    <p className=' text-gray-500 text-sm'>Screen & Camera</p>
                </div>
            </Button>
        </div>
    )
}

export default ScreenCameraButton