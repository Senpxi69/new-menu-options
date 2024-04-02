import React from 'react'
import { Button } from '@mantine/core'
import Screen from "../RecordSectionButtons/images/Screen.png"
import Image from 'next/image'

function ScreenButton() {
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

                    <Image src={Screen} alt="Camera SVG" />
                    <p className=' text-gray-500 text-sm'>Screen</p>
                </div>
            </Button>
        </div>
    )
}

export default ScreenButton