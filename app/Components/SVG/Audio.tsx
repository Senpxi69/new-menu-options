import React, { useState } from 'react'

interface AudioProps {
    buttonName: string;
  }

function Audio({ buttonName }: AudioProps) {
    const [key, setKey] = useState(0);

    return (
        <div key={key} className={"rounded-full " + (buttonName === "Audio" ? "bg-blue-500" : "hover:bg-gray-200")}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle className="background" opacity="0" cx="20" cy="20" r="20" fill="#9094A5"></circle>
                <g filter="url(#filter0_i_5002_422651)">
                    <rect className="main" x="8" y="8" width="24" height="24" rx="7" fill={buttonName === "Audio" ? "#38bdf8" : "#C5C7D0"}></rect>
                    <rect x="8" y="8" width="24" height="24" rx="7" fill="url(#paint0_linear_5002_422651)" fill-opacity="0.2">
                    </rect>
                </g>
                <g filter="url(#filter1_d_5002_422651)">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M21 24.4956V16.8823C21 16.378 21.3755 15.9526 21.876 15.89L24.1238 15.609C24.6243 15.5465 24.9998 15.1211 24.9998 14.6168V13.0889C24.9998 12.5033 24.4988 12.043 23.9153 12.0925L21.0025 12.3396C19.9425 12.4295 19.1384 13.3335 19.1726 14.3968L19.4126 21.8526C18.9916 21.6275 18.5107 21.4998 18 21.4998C16.3431 21.4998 15 22.843 15 24.4998C15 26.1567 16.3431 27.4998 18 27.4998C19.6313 27.4998 20.9584 26.1979 20.999 24.5764H21V24.504C21 24.5026 21 24.5012 21 24.4998C21 24.4984 21 24.497 21 24.4956Z"
                        fill="white"></path>
                </g>
            </svg>
        </div>
    )
}

export default Audio