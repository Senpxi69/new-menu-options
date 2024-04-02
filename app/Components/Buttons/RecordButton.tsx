import React from 'react'
import { Button } from '@mantine/core';


function RecordButton() {
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" color="#71737C"><path stroke="currentColor" stroke-linejoin="round" d="M17.286 9.443l4.68-2.367a.708.708 0 01.695.032c.211.132.34.364.339.615v8.666a.728.728 0 01-.075.327.71.71 0 01-.959.323l-4.68-2.37"></path><rect width="17" height="17" x="0.5" y="3.5" stroke="currentColor" rx="3.5"></rect></svg>
                    <p className=' text-gray-500 text-sm'>Record</p>
                </div>
            </Button>
        </div>
    )
}

export default RecordButton