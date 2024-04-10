import React from 'react';
import styled from 'styled-components';
import CameraButton from '../Buttons/RecordSectionButtons/CameraButton';
import ScreenCameraButton from '../Buttons/RecordSectionButtons/ScreenCameraButton';
import SlideCameraButton from '../Buttons/RecordSectionButtons/SlideCameraButton';
import AudioButton from '../Buttons/RecordSectionButtons/AudioButton';
import SlidesButton from '../Buttons/RecordSectionButtons/SlidesButton';
import ScreenButton from '../Buttons/RecordSectionButtons/ScreenButton';

const RecordSectionContainer = styled.div`
    padding: 20px;
    width: 100%;
    max-height: 80%;
    overflow-y: auto;
`;

const SectionTitle = styled.p`
    font-size: 1.2rem;
    margin-bottom: 10px;
`;

const ButtonGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
`;

function RecordSection() {
    return (
        <RecordSectionContainer>
            <SectionTitle>Record Section</SectionTitle>
            <ButtonGrid>
                <CameraButton />
                <AudioButton />
                <ScreenButton />
                <ScreenCameraButton />
                <SlideCameraButton />
                <SlidesButton />
            </ButtonGrid>
        </RecordSectionContainer>
    );
}

export default RecordSection;
