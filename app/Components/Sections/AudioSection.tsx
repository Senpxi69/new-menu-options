import React from 'react';
import styled from 'styled-components';
import Drop from '../Buttons/Drop';
import TextToSpeech from '../Buttons/TextToSpeech';
import VoiceClone from '../Buttons/VoiceClone';
import VoiceOver from '../Buttons/VoiceOver';
import BrandKit from '../Buttons/BrandKit';
import DropBoxButton from '../Buttons/DropBoxButton';

const AudioSectionContainer = styled.div`
    padding: 20px;
    width: 100%;
    max-height: 80%;
    overflow-y: auto;
`;

const SectionTitle = styled.p`
    font-size: 1.2rem;
    margin-bottom: 10px;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 10px;
`;

function AudioSection() {
    return (
        <AudioSectionContainer>
            <SectionTitle>Add Media</SectionTitle>
            <Drop />
            <ButtonContainer>
                <VoiceClone />
                <TextToSpeech />
            </ButtonContainer>
            <ButtonContainer>
                <VoiceOver />
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center' }}>
                    <BrandKit height={"48px"} showFlexCol={true} />
                    <DropBoxButton />
                </div>
            </ButtonContainer>
        </AudioSectionContainer>
    );
}

export default AudioSection;
