import React from 'react'
import { Button } from '@mantine/core';
import GraphicEqSharpIcon from '@mui/icons-material/GraphicEqSharp';

function VoiceClone() {
  return (
    <div>

      <Button
        size="lg"
        className="m-1 bg-gray-100 border border-gray-300 hover:border-blue-500 flex flex-col justify-center items-center"
        style={{
          width: '168px',
          height: '104px',
          fontSize: '1.2rem',
          color: 'black',
          borderRadius: '10px',
          boxShadow: 'none',
          padding: '16px',
        }}
      >
        <div className="flex flex-col justify-center items-center">
          <svg width="24" height="24" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" color="#71737C" ><g clip-path="url(#a)" stroke="currentColor" stroke-linecap="round"><path d="M3.083 10.25v4.5M7.771 5.75v13.5M17.145 7.25v10.5M21.833 10.25v4.5M12.458 1.25v22.5"></path></g><defs><clipPath id="a"><path fill="#fff" transform="translate(.833 .5)" d="M0 0h24v24H0z"></path></clipPath></defs></svg>
          <p className=' text-gray-500 text-sm'>Voice clone</p>
        </div>
      </Button>
    </div>
  )
}

export default VoiceClone

