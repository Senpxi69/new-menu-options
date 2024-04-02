import React from 'react'
import { Button } from '@mantine/core'

function Transcript() {
    return (
        <div>
            <Button
                disabled onClick={() => console.log('Button clicked')}
                size="lg"
                className="m-1 bg-gray-100 border-none flex flex-col justify-center items-center"
                style={{
                    width: '192px',
                    height: '154px',
                    fontSize: '1.2rem',
                    color: 'black',
                    borderRadius: '10px',
                    boxShadow: 'rgba(0, 0, 0, 0.06) 0px,1px,1px',
                    padding: '16px',
                }}
            >
                <div className="flex flex-col justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="62" height="48" fill="none" viewBox="0 0 62 48" className="MethodOptionPrimary__Icon-sc-q1t78x-4 cHgxIB"><g filter="url(#a)"><rect width="62" height="48" fill="#C5C7D0" rx="8"></rect><rect width="62" height="48" fill="url(#b)" fill-opacity="0.2" rx="8"></rect></g><g clip-path="url(#c)"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M22.667 17.333H31m0 0h1.667m-1.667 0c-.562 3.951-2.917 6.667-6.667 7.917m3.334-7.917v-1.666m-2.5 4.166c.833 1.667 2.916 3.75 5 4.167M31 28.167l2.56-6.4c.279-.698 1.268-.698 1.547 0l2.56 6.4m-6.667 0-1.667 4.166M31 28.167h6.667m0 0 1.666 4.166"></path></g><defs><linearGradient id="b" x1="31" x2="31" y1="0" y2="48" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop></linearGradient><clipPath id="c"><path fill="#fff" d="M21 14h20v20H21z"></path></clipPath><filter id="a" width="62" height="48" x="0" y="0" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dy="0.268"></feOffset><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></feComposite><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"></feColorMatrix><feBlend in2="shape" result="effect1_innerShadow_1_11"></feBlend></filter></defs></svg>
                    <p className='text-lg font-semibold'>Translate</p>
                    <p className='text-gray-500 text-sm'>Subtitle your video in a new language</p>

                </div>
            </Button>
        </div>
    )
}

export default Transcript