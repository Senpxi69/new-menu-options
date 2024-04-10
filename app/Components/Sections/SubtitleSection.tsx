import React from 'react';
import styled from 'styled-components';
import AutoSubtitle from '../Buttons/SubtitlesSectionButton/AutoSubtitle';
import Transcript from '../Buttons/SubtitlesSectionButton/Transcript';
import ManualTranscribeButton from '../Buttons/SubtitlesSectionButton/ManualTranscribeButton';
import UploadSubtitlesButton from '../Buttons/SubtitlesSectionButton/UploadSubtitlesButton';

const SubtitleSectionContainer = styled.div`
    padding: 20px;
    width: 100%;
    max-height: 80%;
    overflow-y: auto;
`;

const SectionTitle = styled.p`
    font-size: 1.2rem;
    margin-bottom: 10px;
`;

const SubtitleOptionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`;

const OptionTitle = styled.p`
    text-align: center;
    margin-bottom: 10px;
`;

const SubtitleButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

function SubtitleSection() {
    return (
        <SubtitleSectionContainer>
            <SectionTitle>Subtitles</SectionTitle>
            <SubtitleOptionsContainer>
                <OptionTitle>How do you want to add your Subtitles?</OptionTitle>
                <SubtitleButtonsContainer>
                    <AutoSubtitle />
                    <Transcript />
                </SubtitleButtonsContainer>
            </SubtitleOptionsContainer>
            <div>
                <ManualTranscribeButton />
                <UploadSubtitlesButton />
            </div>
        </SubtitleSectionContainer>
    );
}

export default SubtitleSection;
