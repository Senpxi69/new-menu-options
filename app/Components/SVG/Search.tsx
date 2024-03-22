import React, { useState, useEffect } from 'react';

interface SearchProps {
    buttonName: string
}

function Search({ buttonName }: SearchProps) {
    const [key, setKey] = useState(0);

    return (
        <div key={key} className={"rounded-full " + (buttonName === "Search" ? "bg-blue-500" : "hover:bg-gray-200")}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M8.65396 11.2761C8 12.5595 8 14.2397 8 17.6V22.4C8 25.7603 8 27.4405 8.65396 28.7239C9.2292 29.8529 10.1471 30.7708 11.2761 31.346C12.5595 32 14.2397 32 17.6 32H22.4C25.7603 32 27.4405 32 28.7239 31.346C29.8529 30.7708 30.7708 29.8529 31.346 28.7239C32 27.4405 32 25.7603 32 22.4V17.6C32 14.2397 32 12.5595 31.346 11.2761C30.7708 10.1471 29.8529 9.2292 28.7239 8.65396C27.4405 8 25.7603 8 22.4 8H17.6C14.2397 8 12.5595 8 11.2761 8.65396C10.1471 9.2292 9.2292 10.1471 8.65396 11.2761Z"
                    fill={buttonName === "Search" ? "blue-300" : "#C5C7D0"}></path>
                <path
                    d="M26 26L23.1 23.1M24.6667 19.3333C24.6667 22.2789 22.2789 24.6667 19.3333 24.6667C16.3878 24.6667 14 22.2789 14 19.3333C14 16.3878 16.3878 14 19.3333 14C22.2789 14 24.6667 16.3878 24.6667 19.3333Z"
                    stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
        </div>
    )
}

export default Search