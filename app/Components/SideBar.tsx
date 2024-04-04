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
import styled from 'styled-components'

function SideBar() {
    const [activeButton, setActiveButton] = useState("Search");

    const handleClick = (buttonName: string) => {
        setActiveButton(buttonName);
    };

    return (
        <Container>
            <div className='flex h-screen'>
                <div className='bg-white flex flex-wrap justify-evenly items-center mr-2 w-16 sidebar-container'>
                    <div className='flex flex-col justify-center items-center sidebar-button' onClick={() => handleClick('Search')}>
                        <Search buttonName={activeButton} />
                        <p className='text-sm text-center'>Search</p>
                    </div>

                    <div className='flex flex-col justify-center items-center sidebar-button' onClick={() => handleClick('Settings')}>
                        <Setting buttonName={activeButton} />
                        <p className='text-sm text-center'>Setting</p>
                    </div>

                    <div className='flex flex-col justify-center items-center sidebar-button' onClick={() => handleClick('Add')}>
                        <Add buttonName={activeButton} />
                        <p className='text-sm text-center'>Add</p>
                    </div>

                    <div className='flex flex-col justify-center items-center sidebar-button' onClick={() => handleClick('Audio')}>
                        <Audio buttonName={activeButton} />
                        <p className='text-sm text-center'>Audio</p>
                    </div>

                    <div className='flex flex-col justify-center items-center sidebar-button' onClick={() => handleClick('Subtitles')}>
                        <Subtitles buttonName={activeButton} />
                        <p className='text-sm text-center'>Subtitles</p>
                    </div>

                    <div className='flex flex-col justify-center items-center sidebar-button' onClick={() => handleClick('Text')}>
                        <Text buttonName={activeButton} />
                        <p className='text-sm text-center'>Text</p>
                    </div>

                    <div className='flex flex-col justify-center items-center sidebar-button' onClick={() => handleClick('Elements')}>
                        <Elements buttonName={activeButton} />
                        <p className='text-sm text-center'>Elements</p>
                    </div>

                    <div className='flex flex-col justify-center items-center sidebar-button' onClick={() => handleClick('Record')}>
                        <Record buttonName={activeButton} />
                        <p className='text-sm text-center'>Record</p>
                    </div>

                    <div className='flex flex-col justify-center items-center sidebar-button' onClick={() => handleClick('Faq')}>
                        <Faq buttonName={activeButton} />
                    </div>
                </div>
                {activeButton && <SideSection sectionName={activeButton} />}
            </div>
        </Container>
    )
}

const Container = styled.div`
    @media (max-width: 767px) {
        .sidebar-container {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            display: flex;
            flex-wrap: nowrap;
            justify-content: space-between;
            align-items: center;
            overflow-x: auto;
            padding: 0 10px; /* Adjust as needed */
        }

        .sidebar-button {
            margin: 5px; /* Adjust spacing between buttons */
        }
    }
`

export default SideBar
