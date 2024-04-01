import React from 'react'
import AutoSubtitle from '../Buttons/SubtitlesSectionButton/AutoSubtitle'
import Transcript from '../Buttons/SubtitlesSectionButton/Transcript'
import ManualTranscribeButton from '../Buttons/SubtitlesSectionButton/ManualTranscribeButton'
import UploadSubtitlesButton from '../Buttons/SubtitlesSectionButton/UploadSubtitlesButton'

function SubtitleSection() {
    return (
        <div>
            <p className='text-center'>Subtitles</p>
            <div className='flex flex-col h-screen'>

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

    )
}

export default SubtitleSection