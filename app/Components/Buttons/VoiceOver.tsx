import React from 'react'
import { Button } from '@mantine/core'

function VoiceOver() {
    return (
        <div>
            <Button
                size="lg"
                className="m-1 bg-transparent border border-gray-300 hover:border-blue-500 flex flex-col justify-center items-center"
                style={{
                    width: '168px',
                    height: '104px',
                    fontSize: '1.2rem',
                    color: 'black',
                    borderRadius: '10px',
                    boxShadow: 'rgba(0, 0, 0, 0.06) 0px,1px,1px',
                    padding: '16px',
                }}
            >
                <div className="flex flex-col justify-center items-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#71737C"><path d="M12 1C11.2044 1 10.4413 1.31607 9.87868 1.87868C9.31607 2.44129 9 3.20435 9 4V12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12V4C15 3.20435 14.6839 2.44129 14.1213 1.87868C13.5587 1.31607 12.7956 1 12 1V1Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19 10V12C19 13.8565 18.2625 15.637 16.9497 16.9497C15.637 18.2625 13.8565 19 12 19C10.1435 19 8.36301 18.2625 7.05025 16.9497C5.7375 15.637 5 13.8565 5 12V10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 19V23" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    <p className=' text-gray-500 text-sm'>Voice Over</p>
                </div>
            </Button>
        </div>
    )
}

export default VoiceOver