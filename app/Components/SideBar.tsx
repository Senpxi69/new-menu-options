"use client"
import React, { useState } from 'react'
import Search from './SVG/Search'
import Setting from './SVG/Setting'
import Add from './SVG/Add'
import Audio from './SVG/Audio'
import Subtitles from './SVG/Subtitles'
import Text from './SVG/Text'
import Elements from './SVG/Elements'
import Record from './SVG/Record'
import Faq from './SVG/Faq'
import SideSection from './SideSection'
import ControlBar from './ControlBar'

function SideBar() {

    const [activeButton, setActiveButton] = useState("Search");

    const handleClick = (buttonName: string) => {
        setActiveButton(buttonName);
    };

    return (
        <div className='flex h-screen'>
            <div className='bg-white flex flex-col justify-evenly items-center mr-2 w-16'>
                <div className=' flex flex-col justify-center items-center' onClick={() => handleClick('Search')}>
                    <Search buttonName={activeButton} />
                    <p className='text-sm text-center'>search</p>
                </div>

                <div className=' flex flex-col justify-center items-center' onClick={() => handleClick('Settings')}>
                    <Setting buttonName={activeButton} />
                    <p className='text-sm text-center'>Setting</p>
                </div>

                <div className=' flex flex-col justify-center items-center' onClick={() => handleClick('Add')}>
                    <Add buttonName={activeButton} />
                    <p className='text-sm text-center'>media</p>
                </div>

                <div className=' flex flex-col justify-center items-center' onClick={() => handleClick('Audio')}>
                    <Audio buttonName={activeButton} />
                    <p className='text-sm text-center'>Audio</p>
                </div>

                <div className=' flex flex-col justify-center items-center' onClick={() => handleClick('Subtitles')}>
                    <Subtitles buttonName={activeButton} />
                    <p className='text-sm text-center'>Subtitles</p>
                </div>

                <div className=' flex flex-col justify-center items-center' onClick={() => handleClick('Text')}>
                    <Text buttonName={activeButton} />
                    <p className='text-sm text-center'>Text</p>
                </div>

                <div className=' flex flex-col justify-center items-center' onClick={() => handleClick('Elements')}>
                    <Elements buttonName={activeButton} />
                    <p className='text-sm text-center'>Elements</p>
                </div>

                <div className=' flex flex-col justify-center items-center' onClick={() => handleClick('Record')}>
                    <Record buttonName={activeButton} />
                    <p className='text-sm text-center'>Record</p>
                </div>

                <div className=' flex flex-col justify-center items-center' onClick={() => handleClick('Faq')}>
                    <Faq buttonName={activeButton} />
                </div>
            </div>
            {activeButton && <SideSection sectionName={activeButton} />}

        </div>
    )
}

export default SideBar