import React from 'react'
import CameraButton from '../Buttons/RecordSectionButtons/CameraButton'
import ScreenCameraButton from '../Buttons/RecordSectionButtons/ScreenCameraButton'
import SlideCameraButton from '../Buttons/RecordSectionButtons/SlideCameraButton'
import AudioButton from '../Buttons/RecordSectionButtons/AudioButton'
import SlidesButton from '../Buttons/RecordSectionButtons/SlidesButton'
import ScreenButton from '../Buttons/RecordSectionButtons/ScreenButton'

function RecordSection() {
    return (
        <div className='flex flex-col justify-center items-center '>
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
    )
}

export default RecordSection