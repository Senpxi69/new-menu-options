import React, { useEffect, useState, useRef } from 'react';
import { CirclePicker, ColorResult } from 'react-color';

function MiddleSection() {
    const [canvasSize, setCanvasSize] = useState({ width: 640, height: 360 });
    const [selectedRatio, setSelectedRatio] = useState('landscape');
    const [selectedColor, setSelectedColor] = useState('#ffffff');
    const [showRatioOptions, setShowRatioOptions] = useState(false);
    const [showColorOptions, setShowColorOptions] = useState(false);
    const referenceElement = useRef<HTMLButtonElement>(null);
    const popperElement = useRef<HTMLDivElement>(null);

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

    const handleRatioChange = (ratio: string) => {
        setSelectedRatio(ratio);
        setShowRatioOptions(false);
    };

    const handleColorChange = (color: any) => {
        setSelectedColor(color.hex);
        setShowColorOptions(false);
    };

    return (
        <div className="flex flex-col justify-center items-center h-full w-full relative">
            <div className="p-8 rounded-lg max-w-screen-md w-full overflow-hidden" style={{ width: canvasSize.width, height: canvasSize.height }}>
                <canvas style={{ backgroundColor: selectedColor, zIndex: 0 }} className="mx-auto bg-gray-200" id="myCanvas" width={canvasSize.width} height={canvasSize.height}></canvas>
            </div>
            <div className="flex mt-4" style={{ zIndex: 1 }}>
                <div className="relative mr-4">
                    <button
                        className="border border-gray-300 rounded-md bg-white shadow-sm text-gray-700 py-2 px-4 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
                        onClick={() => setShowRatioOptions(!showRatioOptions)}
                    >
                        Ratio: {selectedRatio}
                    </button>
                    {showRatioOptions && (
                        <div className="absolute -top-48 left-0 mt-2 bg-white border border-gray-300 rounded-md shadow-md max-w-full z-20">
                            <ul>
                                <li onClick={() => handleRatioChange('landscape')} className="cursor-pointer py-2 px-4 hover:bg-gray-100">Landscape (16:9)</li>
                                <li onClick={() => handleRatioChange('portrait')} className="cursor-pointer py-2 px-4 hover:bg-gray-100">Portrait (9:16)</li>
                                <li onClick={() => handleRatioChange('square')} className="cursor-pointer py-2 px-4 hover:bg-gray-100">Square (1:1)</li>
                            </ul>
                        </div>
                    )}
                </div>
                <div className="h-full border-l border-gray-300"></div> {/* Vertical line */}
                <div className="relative ml-4">
                    <button
                        ref={referenceElement}
                        className="border border-gray-300 rounded-md bg-white shadow-sm text-gray-700 py-2 px-4 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 relative"
                        onClick={() => setShowColorOptions(!showColorOptions)}
                    >
                        <div className="flex items-center">
                            <span className="mr-2">Background</span>
                            <div className="w-6 h-6 rounded-full border border-gray-400" style={{ backgroundColor: selectedColor }}></div>
                        </div>
                        {showColorOptions && (
                            <div ref={popperElement} className="absolute -top-48 left-0 mt-2 bg-white border border-gray-300 rounded-md shadow-md p-4" style={{ zIndex: 2 }}>
                                <CirclePicker color={selectedColor} onChange={handleColorChange} />
                            </div>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MiddleSection;
