import React from 'react';
import Drop from '../Buttons/Drop';
import TextToSpeech from '../Buttons/TextToSpeech';
import VoiceClone from '../Buttons/VoiceClone';
import VoiceOver from '../Buttons/VoiceOver';
import BrandKit from '../Buttons/BrandKit';
import DropBoxButton from '../Buttons/DropBoxButton';
import styled from 'styled-components';

function AudioSection() {
    return (
        <Container>
            <div className='flex flex-col justify-evenly items-center'>
                <p className='text-lg mb-3'>Add Media</p>
                <Drop />
                <div className='flex justify-evenly items-center'>
                    <VoiceClone />
                    <TextToSpeech />
                </div>
                <div className='flex justify-evenly items-center'>
                    <VoiceOver />
                    <div className='flex flex-col justify-evenly items-center'>
                        <BrandKit height={"48px"} showFlexCol={true} />
                        <DropBoxButton />
                    </div>
                </div>
            </div>
        </Container>
    );
}

const Container = styled.div`
    height: 100vh; /* Set height to 100% of viewport height */
    
    padding: 20px;

    @media only screen and (max-width: 480px) {
        margin-top: 40vh; /* Add margin from top */
        padding: 10px;
    }
`;

export default AudioSection;
