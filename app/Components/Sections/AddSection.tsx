"use client"
import React, { useState } from 'react'

import Drop from '../Buttons/Drop'
import RecordButton from '../Buttons/RecordButton'
import TextToSpeech from '../Buttons/TextToSpeech'
import VoiceClone from '../Buttons/VoiceClone'
import BrandKit from '../Buttons/BrandKit'
import DropBoxButton from '../Buttons/DropBoxButton'
import LinkButton from '../Buttons/LinkButton'

function AddSection() {
    return (
        <div className='flex flex-col justify-evenly items-center'>
            <p className=' text-lg mb-3'>Add Media</p>
            <Drop />
            <div className='flex justify-evenly items-center'>
                <RecordButton />
                <TextToSpeech />
            </div>
            <div className='flex justify-evenly items-center'>
                <VoiceClone />
                <BrandKit showFlexCol={false} height={""}/>
            </div>
            <div className='flex items-center'>
                <DropBoxButton />
                <LinkButton />
            </div>
        </div>
    )
}

export default AddSection