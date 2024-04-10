import React from 'react';
import styled from 'styled-components';
import Drop from '../Buttons/Drop';
import RecordButton from '../Buttons/RecordButton';
import TextToSpeech from '../Buttons/TextToSpeech';
import VoiceClone from '../Buttons/VoiceClone';
import BrandKit from '../Buttons/BrandKit';
import DropBoxButton from '../Buttons/DropBoxButton';
import LinkButton from '../Buttons/LinkButton';

const AddSectionContainer = styled.div`
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

function AddSection() {
    return (
        <AddSectionContainer>
            <SectionTitle>Add Media</SectionTitle>
            <Drop />
            <ButtonContainer>
                <RecordButton />
                <TextToSpeech />
            </ButtonContainer>
            <ButtonContainer>
                <VoiceClone />
                <BrandKit showFlexCol={false} height={""} />
            </ButtonContainer>
            <ButtonContainer>
                <DropBoxButton />
                <LinkButton />
            </ButtonContainer>
        </AddSectionContainer>
    );
}

export default AddSection;
