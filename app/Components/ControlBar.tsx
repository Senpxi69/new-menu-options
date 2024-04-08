import React, { useState } from 'react';
import Play from "./Buttons/RecordSectionButtons/images/Play.svg"
import Pause from "./Buttons/RecordSectionButtons/images/Pause.svg"
import Forward from "./Buttons/RecordSectionButtons/images/FastForward.svg"
import Backward from "./Buttons/RecordSectionButtons/images/Backward.svg"
import Cut from "./Buttons/RecordSectionButtons/images/Scissors.svg"
import Mic from "./Buttons/RecordSectionButtons/images/Mic.svg"
import Plus from "./Buttons/RecordSectionButtons/images/magnifying-glass-plus-.svg"
import Minus from "./Buttons/RecordSectionButtons/images/magnifying-glass-minus.svg"
import Image from 'next/image';
import styled from 'styled-components';

function ControlBar() {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    }

    return (
        <Container>
            <div className="control-bar absolute bottom-0 left-16 ml-2 right-0 flex justify-between items-center px-4 py-2 bg-white border border-gray-100">
                <div className="control-bar__left flex">
                    <button className="voiceover-btn mr-2 flex justify-evenly items-center hover:bg-gray-300">
                        <div className='flex justify-center items-center'>
                            <Image src={Mic} alt='mic' className='h-4 w-4' />
                            Voiceover
                        </div>
                    </button>
                    <button className="cut-btn flex items-center hover:bg-gray-300">
                        <div className='flex justify-center items-center'>
                            <Image src={Cut} alt='cut' className='h-4 w-4' />
                            Cut
                        </div>
                    </button>
                </div>
                <div className="control-bar__center flex justify-center items-center">
                    <button className="rewind-btn mx-2 hover:text-blue-500">
                        <Image src={Backward} alt='backward' className='h-6 w-6' />
                    </button>
                    <button className="play-pause-btn mx-2 hover:text-blue-500" onClick={handleClick}>
                        <Image src={isClicked ? Pause : Play} alt='play' className='h-7 w-7' />
                    </button>
                    <button className="fast-forward-btn mx-2 hover:text-blue-500">
                        <Image src={Forward} alt='pause' className='h=6 w-6' />
                    </button>
                </div>
                <div className="control-bar__right flex items-center">
                    <button className="decrease-btn mr-2 hover:text-blue-500">
                        <Image src={Minus} alt='minus' className='h-4 w-4' />
                    </button>
                    <input type='range' />
                    <button className="increase-btn ml-2 hover:text-blue-500">
                        <Image src={Plus} alt='plus' className='h-4 w-4' />
                    </button>
                </div>
            </div>
        </Container>
    );
}

const Container = styled.div`
    @media (max-width: 768px) {
        .control-bar {
            width: 100%;
            margin-top: -60px; /* Adjust this value according to your layout */
        }
    }
`;

export default ControlBar;
