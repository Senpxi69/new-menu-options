import React, { useState } from 'react'
import { Paper, Slider } from '@mantine/core';
import ReactPlayer from 'react-player';
import AiAvatarsData from '../DataFiles/AiAvatarsData';
import StockVideo from '../DataFiles/StockVideo';

function Media() {

    const [isHovered, setIsHovered] = useState(false);
    const topTenAvatar = AiAvatarsData.slice(0, 10);


    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className=' mt-3'>
            <h1 className='text-lg font-bold mt-3 mb-3'>Stock videos</h1>
            <div className="flex overflow-x-auto">
                {StockVideo.map((video) => (
                    <div key={video.id} className="video-container mx-4"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}>
                        <Paper
                            className="video-player relative rounded-lg shadow-lg"
                            style={{ width: "142px", height: "80px" }}
                            key={video.id}
                        >
                            <ReactPlayer
                                url={video.video_link}
                                playing={isHovered}
                                controls={false}
                                loop={true}
                                width="100%"
                                height="100%"
                                style={{ borderRadius: '10px' }}
                            />
                        </Paper>
                    </div>
                ))}
            </div>
            <p className='text-lg font-bold mt-3'>Ai Creators</p>
            <div className="overflow-x-auto">
                <div className="flex space-x-8 p-4">
                    {topTenAvatar.map((avatar) => (
                        <div key={avatar.id} className="relative">
                            <div className="w-24 h-24 overflow-hidden rounded-lg border border-gray-200">
                                <img
                                    src={avatar.img_link}
                                    alt={`Avatar ${avatar.id}`}
                                    width={100}
                                    height={100}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Media