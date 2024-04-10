import React, { useState, useEffect } from 'react';
import AddSection from './Sections/AddSection';
import Media from './Section2/Media';
import AudioSection from './Sections/AudioSection';
import RecordSection from './Sections/RecordSection';
import SubtitleSection from './Sections/SubtitleSection';
import styled, { keyframes, css } from 'styled-components';

const slideIn = keyframes`
    0% {
        transform: translateY(100%);
    }
    100% {
        transform: translateY(0);
    }
`;

const slideOut = keyframes`
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(100%);
    }
`;

const SideSectionContainer = styled.div`
    @media (max-width: 768px){
        position: fixed;
        bottom: 0;
        left: 0;
        display: flex;
        justify-content: center;
        width: 100%;
        max-height: 80%;
        background-color: white;
        overflow-y: auto;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        animation: ${({ isVisible }) => isVisible ? css`${slideIn} 0.5s ease forwards` : css`${slideOut} 0.5s ease forwards`};
        z-index: 999;
    }
`;

const ButtonContainer = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
`;

function SideSection({ sectionName }: { sectionName?: string }) {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        setIsVisible(true);
    }, [sectionName]);

    const handleClose = () => {
        setIsVisible(false);
    };

    if (!sectionName || !isVisible) {
        return null;
    }

    return (
        <SideSectionContainer isVisible={isVisible}>
            <div className={`bg-white ${sectionName === 'Subtitles' ? "w-auto" : "w-96"} overflow-auto overflow-x-auto overflow-y-visible relative`}>
                <ButtonContainer>
                    <button
                        className="bg-transparent border-none p-2"
                        onClick={handleClose}
                        aria-label="Close"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 hover:text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </ButtonContainer>
                {sectionName === "Add" ? <div>
                    <AddSection /> <Media />
                </div> : ""}
                {sectionName === "Audio" ? <div>
                    <AudioSection />
                </div> : ""}
                {sectionName === "Record" ? <div>
                    <RecordSection />
                </div> : ""}
                {sectionName === "Subtitles" ? <div>
                    <SubtitleSection />
                </div> : ""}
            </div>
        </SideSectionContainer>
    );
}

export default SideSection;
