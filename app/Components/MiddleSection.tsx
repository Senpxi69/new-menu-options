import React, { useEffect, useState, useRef } from 'react';
import { CirclePicker } from 'react-color';
import styled from 'styled-components';
import ControlBar from './ControlBar';

function MiddleSection() {
    const [canvasSize, setCanvasSize] = useState({ width: 640, height: 360 });
    const [selectedRatio, setSelectedRatio] = useState('landscape');
    const [selectedColor, setSelectedColor] = useState('black');
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
        <Container className="flex flex-col justify-center items-center h-full w-screen relative">
            <div>
                <div className="rounded-lg max-w-screen-md w-full overflow-hidden">
                    <canvas
                        style={{ backgroundColor: selectedColor, width: canvasSize.width, height: canvasSize.height }}
                        className="mx-auto"
                        id="myCanvas"
                    ></canvas>
                </div>
                <div className="flex justify-center items-center mt-4">
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
        </Container>
    );
}

const Container = styled.div`
  width: 100%;

  @media (max-width: 767px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default MiddleSection;
