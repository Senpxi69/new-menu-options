import React from 'react'
import AutoSubtitle from '../Buttons/SubtitlesSectionButton/AutoSubtitle'
import Transcript from '../Buttons/SubtitlesSectionButton/Transcript'
import ManualTranscribeButton from '../Buttons/SubtitlesSectionButton/ManualTranscribeButton'
import UploadSubtitlesButton from '../Buttons/SubtitlesSectionButton/UploadSubtitlesButton'
import styled from 'styled-components'

function SubtitleSection() {
    return (
        <Container>
            <div className='h-screen'>
                <p className='text-center'>Subtitles</p>
                <div className='flex flex-col'>

                    <div className='flex flex-col'>
                        <p className='text-center'>
                            How do you want to add your Subtitles
                        </p>
                        <div className='m-2 flex'>
                            <AutoSubtitle />
                            <Transcript />
                        </div>
                    </div>

                    <div className='flex flex-col'>
                        <ManualTranscribeButton />
                        <UploadSubtitlesButton />
                    </div>



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

export default SubtitleSection