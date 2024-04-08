import React from 'react'
import CameraButton from '../Buttons/RecordSectionButtons/CameraButton'
import ScreenCameraButton from '../Buttons/RecordSectionButtons/ScreenCameraButton'
import SlideCameraButton from '../Buttons/RecordSectionButtons/SlideCameraButton'
import AudioButton from '../Buttons/RecordSectionButtons/AudioButton'
import SlidesButton from '../Buttons/RecordSectionButtons/SlidesButton'
import ScreenButton from '../Buttons/RecordSectionButtons/ScreenButton'
import styled from 'styled-components'

function RecordSection() {
    return (
        <Container>
            <div className='flex flex-col items-center h-screen'>
                <p className=' mb-4'>Record Section</p>
                <div className='grid grid-cols-2 gap-3'>
                    <CameraButton />
                    <AudioButton />
                    <ScreenButton />
                    <ScreenCameraButton />
                    <SlideCameraButton />
                    <SlidesButton />
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
    height: 100vh; /* Set height to 100% of viewport height */
    
    padding: 20px;

    @media only screen and (max-width: 480px) {
        margin-top: 40vh; /* Add margin from top */
        padding: 10px;
    }
`;

export default RecordSection