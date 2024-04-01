import React, { useEffect, useState } from 'react';

function MiddleSection() {
    const [canvasSize, setCanvasSize] = useState({ width: 640, height: 360 });
    const [selectedRatio, setSelectedRatio] = useState('landscape');
    const [backgroundColor, setBackgroundColor] = useState('#ffffff'); // Default color is white

    useEffect(() => {
        function updateCanvasSize() {
            const screenWidth = window.innerWidth;
            const screenHeight = window.innerHeight;

            let ratioWidth, ratioHeight;

            switch (selectedRatio) {
                case 'landscape':
                    ratioWidth = 16;
                    ratioHeight = 9;
                    break;
                case 'portrait':
                    ratioWidth = 9;
                    ratioHeight = 16;
                    break;
                case 'square':
                    ratioWidth = 1;
                    ratioHeight = 1;
                    break;
                default:
                    ratioWidth = 16;
                    ratioHeight = 9;
            }

            let canvasWidth = screenWidth * 0.8;
            let canvasHeight = (canvasWidth * ratioHeight) / ratioWidth;

            if (canvasHeight > screenHeight * 0.7) {
                canvasHeight = screenHeight * 0.7;
                canvasWidth = (canvasHeight * ratioWidth) / ratioHeight;
            }

            if (canvasWidth > screenWidth * 0.8) {
                canvasWidth = screenWidth * 0.8;
                canvasHeight = (canvasWidth * ratioHeight) / ratioWidth;
            }

            setCanvasSize({ width: canvasWidth, height: canvasHeight });
        }

        updateCanvasSize();
        window.addEventListener('resize', updateCanvasSize);
        return () => window.removeEventListener('resize', updateCanvasSize);
    }, [selectedRatio]);

    const handleRatioChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedRatio(e.target.value);
    };

    const handleColorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setBackgroundColor(e.target.value);
    };
    
    return (
        <div className="flex flex-col justify-center items-center h-full w-full" >
            <div className="p-8 rounded-lg max-w-screen-md w-full overflow-hidden" style={{ width: canvasSize.width, height: canvasSize.height }}>
                <canvas style={{ backgroundColor }} className="mx-auto bg-gray-200" id="myCanvas" width={canvasSize.width} height={canvasSize.height}></canvas>
            </div>
            <div className="mt-4">
                <label htmlFor="ratioSelect" className="mr-2 text-gray-600">Select Ratio:</label>
                <select
                    id="ratioSelect"
                    value={selectedRatio}
                    onChange={handleRatioChange}
                    className="border border-gray-300 rounded-md bg-white shadow-sm text-gray-700 py-2 px-4 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200">
                    <option value="landscape">Landscape (16:9)</option>
                    <option value="portrait">Portrait (9:16)</option>
                    <option value="square">Square (1:1)</option>
                </select>
            </div>
            <div className="mt-4">
                <label htmlFor="colorSelect" className="mr-2 text-gray-600">Select Background Color:</label>
                <select
                    id="colorSelect"
                    value={backgroundColor}
                    onChange={handleColorChange}
                    className="border border-gray-300 rounded-md bg-white shadow-sm text-gray-700 py-2 px-4 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200">
                    <option value="#ffffff">White</option>
                    <option value="#000000">Black</option>
                    <option value="#ff0000">Red</option>
                    <option value="#00ff00">Green</option>
                    <option value="#0000ff">Blue</option>
                    {/* Add more colors as needed */}
                </select>
            </div>
        </div>
    );
}

export default MiddleSection;
