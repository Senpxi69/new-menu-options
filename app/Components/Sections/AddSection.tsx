import React, { useState } from 'react';
import Drop from '../Buttons/Drop';
import RecordButton from '../Buttons/RecordButton';
import TextToSpeech from '../Buttons/TextToSpeech';
import VoiceClone from '../Buttons/VoiceClone';
import BrandKit from '../Buttons/BrandKit';
import DropBoxButton from '../Buttons/DropBoxButton';
import LinkButton from '../Buttons/LinkButton';
import styled from 'styled-components';

function AddSection() {
    return (
        <Container>
            <div className='flex flex-col justify-evenly items-center'>
                <p className='text-lg mb-3'>Add Media</p>
                <Drop />
                <div className='flex justify-evenly items-center'>
                    <RecordButton />
                    <TextToSpeech />
                </div>
                <div className='flex justify-evenly items-center'>
                    <VoiceClone />
                    <BrandKit showFlexCol={false} height={""} />
                </div>
                <div className='flex items-center'>
                    <DropBoxButton />
                    <LinkButton />
                </div>
            </div>
        </Container>
    );
}

const Container = styled.div`
    display: flex; /* Ensure Container is a flex container */
    justify-content: center; /* Center children horizontally */
    align-items: center; /* Center children vertically */
    height: 100vh; /* Set height to 100% of viewport height */
    

    @media only screen and (max-width: 480px) {
        margin-top: 20vh; /* Add margin from top */
    }
`;

export default AddSection;
