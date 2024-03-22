import React from 'react'
import { Button } from '@mantine/core';

interface BrandKitProps {
    height: string;
    showFlexCol: boolean;
}

function BrandKit({ height, showFlexCol }: BrandKitProps) {
    const flexColClass = showFlexCol ? '' : 'flex flex-col';
    return (
        <div>
            <Button
                size="lg"
                className="bg-gray-100 border border-gray-300 hover:border-blue-500 flex flex-col justify-center items-center m-1"
                style={{
                    width: '168px',
                    height: height || '104px',
                    fontSize: '1.2rem',
                    color: 'black',
                    borderRadius: '10px',
                    boxShadow: 'none',
                    padding: '16px',
                }}
            >
                <div className={`flex ${flexColClass} justify-around items-center`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#71737C" className=' mb-3'><path d="M5.88889 23C4.59227 23 3.34877 22.485 2.43192 21.568C1.51508 20.6513 1 19.4078 1 18.1111V3.44444C1 2.79614 1.25753 2.17438 1.71597 1.71597C2.17438 1.25753 2.79614 1 3.44444 1H8.33333C8.98164 1 9.60334 1.25753 10.0618 1.71597C10.5203 2.17438 10.7778 2.79614 10.7778 3.44444V18.1111C10.7778 19.4078 10.2627 20.6513 9.34586 21.568M5.88889 23C7.18551 23 8.42901 22.485 9.34586 21.568M5.88889 23H20.5556C21.2038 23 21.8256 22.7425 22.284 22.284C22.7425 21.8256 23 21.2038 23 20.5556V15.6667C23 15.0184 22.7425 14.3967 22.284 13.9382C21.8256 13.4797 21.2038 13.2222 20.5556 13.2222H17.6919M9.34586 21.568L19.7171 11.197C20.1753 10.7385 20.4328 10.1169 20.4328 9.46878C20.4328 8.8206 20.1753 8.19896 19.7171 7.74056L16.2594 4.28289C15.801 3.82463 15.1794 3.56719 14.5312 3.56719C13.8831 3.56719 13.2615 3.82463 12.803 4.28289L10.7778 6.30811V13.9382M5.88889 18.1111H5.90111" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>

                    <p className=' text-gray-500 text-sm'>Brand-Kit</p>
                </div>
            </Button>
        </div>
    )
}

export default BrandKit