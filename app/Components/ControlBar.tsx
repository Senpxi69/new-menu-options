import React, { useState } from 'react';
import styled from 'styled-components';
import Play from "./Buttons/RecordSectionButtons/images/Play.svg";
import Pause from "./Buttons/RecordSectionButtons/images/Pause.svg";
import Forward from "./Buttons/RecordSectionButtons/images/FastForward.svg";
import Backward from "./Buttons/RecordSectionButtons/images/Backward.svg";
import Cut from "./Buttons/RecordSectionButtons/images/Scissors.svg";
import Mic from "./Buttons/RecordSectionButtons/images/Mic.svg";
import Plus from "./Buttons/RecordSectionButtons/images/magnifying-glass-plus-.svg";
import Minus from "./Buttons/RecordSectionButtons/images/magnifying-glass-minus.svg";
import Image from 'next/image';

const ControlBarWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: white;
  padding: 1rem;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap; /* Allow elements to wrap on smaller screens */
  @media (max-width: 768px) {
    bottom: 7rem; /* Adjust the distance from the bottom as needed for mobile devices */
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
`;

const ControlButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: ${(props) => (props.color ? props.color : 'black')};
  margin-right: 1rem;
  white-space: nowrap; /* Prevent text from wrapping */
  overflow: hidden; /* Hide overflow text */
  text-overflow: ellipsis; /* Display an ellipsis (...) when text overflows */
  
  @media (max-width: 768px) {
    span {
      display: none;
    }
  }
`;

const InputRange = styled.input`
  width: 50px; /* Adjust width as needed */
  margin-right: 1rem;
`;

function ControlBar() {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    }

    return (
        <ControlBarWrapper>
            {/* Group 1: Voiceover and Cut */}
            <ButtonGroup>
                <ControlButton onClick={() => console.log("Voiceover clicked")}>
                    <Image src={Mic} alt='mic' width={24} height={24} />
                    <span className="ml-2">Voiceover</span>
                </ControlButton>

                <ControlButton onClick={() => console.log("Voiceover clicked")}>
                    <Image src={Cut} alt='mic' width={24} height={24} />
                    <span className="ml-2">Cut</span>
                </ControlButton>
            </ButtonGroup>

            {/* Group 2: Play, Pause, Forward, Backward */}
            <ButtonGroup>
                <ControlButton onClick={() => console.log("Rewind clicked")}>
                    <Image src={Backward} alt='backward' width={24} height={24} />
                    <span className="ml-2">Rewind</span>
                </ControlButton>

                <ControlButton onClick={handleClick}>
                    <Image src={isClicked ? Pause : Play} alt='play' width={24} height={24} />
                    <span className="ml-2">Play</span>
                </ControlButton>

                <ControlButton onClick={() => console.log("Fast forward clicked")}>
                    <Image src={Forward} alt='pause' width={24} height={24} />
                    <span className="ml-2">Forward</span>
                </ControlButton>
            </ButtonGroup>

            {/* Group 3: Plus, Minus, Input */}


            <ControlButton onClick={() => console.log("Decrease clicked")}>
                <Image src={Minus} alt='minus' width={24} height={24} />
                <span className="ml-2">Decrease</span>
            </ControlButton>
            <InputRange type='range' />
            <ControlButton onClick={() => console.log("Increase clicked")}>
                <Image src={Plus} alt='plus' width={24} height={24} />
                <span className="ml-2">Increase</span>
            </ControlButton>
        </ControlBarWrapper>
    );
}

export default ControlBar;
