import React from 'react'
import { Button } from '@mantine/core';

function DropBoxButton() {
    return (
        <div>
            <Button
                size="lg"
                className="m-1 bg-gray-100 border border-gray-300 hover:border-blue-500 flex flex-col justify-center items-center"
                style={{
                    width: '168px',
                    height: '48px',
                    fontSize: '1.2rem',
                    color: 'black',
                    borderRadius: '10px',
                    boxShadow: 'none',
                    padding: '16px',
                }}
            >
                <div className="flex justify-center items-center">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" color="#71737C"><path d="M17 18L12 21L7 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17.7272 2.75566L12.9273 5.75825L17.9768 8.917L22.375 6.18049C22.689 5.9851 22.6896 5.52821 22.376 5.33206L18.2575 2.75566C18.0953 2.65418 17.8894 2.65418 17.7272 2.75566ZM11.0417 5.75601L6.27265 2.75714C6.11031 2.65506 5.90389 2.65482 5.74131 2.75652L1.62049 5.33436C1.30739 5.53023 1.30739 5.98628 1.62049 6.18214L5.9768 8.9073L11.0417 5.75601ZM18.0086 10.0961L12.9273 13.2748L17.7257 16.2765C17.8883 16.3782 18.0947 16.3779 18.2571 16.2758L22.3844 13.68C22.6966 13.4836 22.696 13.0284 22.3833 12.8328L18.0086 10.0961ZM11.0453 13.2567L6.00856 10.1058L1.62049 12.8509C1.30739 13.0467 1.30739 13.5028 1.62049 13.6987L5.73987 16.2756C5.90282 16.3775 6.10978 16.377 6.27224 16.2743L11.0453 13.2567Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    <p className=' text-gray-500 text-sm ml-1'>Dropbox</p>
                </div>
            </Button>
        </div>
    )
}

export default DropBoxButton