import React from 'react'
import { Button } from '@mantine/core';


function TextToSpeech() {
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
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#71737C" className="sc-aXZVg AvBtT"><path d="M20.6001 17.1076C21.8435 15.0115 22.2789 12.5336 21.8247 10.1391C21.3704 7.74467 20.0576 5.59841 18.1329 4.10336C16.2081 2.60831 13.8038 1.86733 11.3714 2.01954C8.93901 2.17176 6.64583 3.2067 4.92249 4.93003C3.19915 6.65336 2.1642 8.94654 2.01197 11.3789C1.85975 13.8114 2.60072 16.2157 4.09576 18.1404C5.59079 20.0652 7.73705 21.3779 10.1315 21.8322C12.526 22.2865 15.0039 21.8511 17.1 20.6077L17.1 20.6075L20.5565 21.5951C20.6996 21.636 20.8509 21.6379 20.9949 21.6006C21.1388 21.5633 21.2702 21.4881 21.3754 21.383C21.4806 21.2778 21.5557 21.1464 21.593 21.0024C21.6303 20.8585 21.6284 20.7071 21.5876 20.5641L20.6 17.1076L20.6001 17.1076Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.62195 10.3315H16.3789" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.55243 14.2235H14.4524" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    <p className=' text-gray-500 text-sm'>Text to Speech</p>
                </div>
            </Button>
        </div>
    )
}

export default TextToSpeech