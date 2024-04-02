import React, { useRef, useState } from 'react';
import { Dropzone, MIME_TYPES } from '@mantine/dropzone';
import { useMantineTheme } from '@mantine/core';

function Drop() {
    const theme = useMantineTheme();
    const [isHovered, setIsHovered] = useState<boolean>(false);

    return (
        <div>
            <Dropzone
                className={`border-2 border-dashed border-gray-300 hover:border-sky-400 m-1 ${isHovered ? 'bg-gray-400' : ''}`}
                onDrop={(files: File[]) => {
                    console.log('Dropped files:', files);
                }}
                accept={[MIME_TYPES.pdf]}
                maxSize={30 * 1024 ** 2}
                style={{
                    padding: '20px',
                    border: `2px dashed ${theme.colors.dark[6]} !important`,
                    borderRadius: '8px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    backgroundColor: isHovered ? '#f0f9ff' : 'transparent',
                    height: '200px',
                    display: 'flex', // Display elements in flex layout
                    flexDirection: 'column', // Arrange elements in columns
                    alignItems: 'center', // Center elements horizontally
                    justifyContent: 'center', // Center elements vertically
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className='flex flex-col justify-evenly items-center '>
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" width="24" height="24" color="#5D647B" style={{ marginBottom: '10px', verticalAlign: 'middle' }}>
                        <path d="M16 16L12 12L8 16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M12 12V21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M20.39 18.39C21.3653 17.8583 22.1358 17.0169 22.5799 15.9986C23.0239 14.9804 23.1162 13.8432 22.8422 12.7667C22.5682 11.6902 21.9435 10.7355 21.0667 10.0535C20.1899 9.3714 19.1109 9.00075 18 9.00001H16.74C16.4373 7.82926 15.8732 6.74235 15.09 5.82101C14.3067 4.89967 13.3249 4.16786 12.2181 3.68062C11.1114 3.19338 9.90856 2.96337 8.70012 3.0079C7.49169 3.05242 6.30907 3.37031 5.24118 3.93768C4.17329 4.50505 3.24792 5.30712 2.53463 6.2836C1.82134 7.26008 1.3387 8.38555 1.12299 9.57541C0.907276 10.7653 0.964111 11.9885 1.28922 13.1533C1.61433 14.318 2.19925 15.3939 3.00001 16.3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M16 16L12 12L8 16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                    <p style={{ margin: '0' }}>Drag and drop files here or click to select</p>
                </div>
            </Dropzone>


        </div>
    );
}

export default Drop;
