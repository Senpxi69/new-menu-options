import React from 'react'
import { Button } from '@mantine/core';

function LinkButton() {
    return (
        <div>
            <Button
                size="lg"
                className=" m-1 bg-transparent border border-gray-300 hover:border-blue-500 flex flex-col justify-center items-center"
                style={{
                    width: '168px',
                    height: '48px',
                    fontSize: '1.2rem',
                    color: 'black',
                    borderRadius: '10px',
                    boxShadow: 'rgba(0, 0, 0, 0.06) 0px,1px,1px',
                    padding: '16px',
                }}
            >
                <div className="flex justify-between items-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#71737C"><path d="M13.4142 17.6568L11.2929 19.7781C10.8286 20.2424 10.2774 20.6107 9.67074 20.862C9.06411 21.1133 8.41393 21.2426 7.75732 21.2426C7.10071 21.2426 6.45053 21.1133 5.84391 20.862C5.23728 20.6107 4.68608 20.2424 4.22179 19.7781C3.7575 19.3138 3.3892 18.7627 3.13793 18.156C2.88665 17.5494 2.75732 16.8992 2.75732 16.2426C2.75732 15.586 2.88665 14.9358 3.13793 14.3292C3.3892 13.7226 3.7575 13.1714 4.22179 12.7071L6.34311 10.5858M10.5858 6.34311L12.7071 4.22179C13.1714 3.7575 13.7226 3.3892 14.3292 3.13793C14.9358 2.88665 15.586 2.75732 16.2426 2.75732C17.5687 2.75732 18.8405 3.28411 19.7781 4.22179C20.7158 5.15947 21.2426 6.43124 21.2426 7.75732C21.2426 9.08341 20.7158 10.3552 19.7781 11.2929L17.6568 13.4142M14.8284 9.17154L9.17154 14.8284" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    <p className=' text-gray-500 text-sm ml-1'>Link</p>
                </div>
            </Button>
        </div>
    )
}

export default LinkButton