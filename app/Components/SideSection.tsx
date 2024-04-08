import React from 'react';
import AddSection from './Sections/AddSection';
import Media from './Section2/Media';
import AudioSection from './Sections/AudioSection';
import RecordSection from './Sections/RecordSection';
import SubtitleSection from './Sections/SubtitleSection';
import ControlBar from './ControlBar';
import styled from 'styled-components';

function SideSection({ sectionName }: { sectionName?: string }) {
    
    return (
        <Container>
            <SidePanel className={`bg-white ${sectionName === 'Subtitles' ? "w-auto" : "w-96"} overflow-auto overflow-x-auto overflow-y-visible`}>
                {sectionName === "Add" ? <div>
                    <AddSection /> <Media />
                </div> : ""}
                {sectionName === "Audio" ? <div>
                    <AudioSection />
                </div> : ""}
                {sectionName === "Record" ? <div>
                    <RecordSection />
                </div> : ""}
                {sectionName === "Subtitles" ? <div>
                    <SubtitleSection />
                </div> : ""}
            </SidePanel>
        </Container>
    );
}

const Container = styled.div`
overflow-y: auto;
    @media only screen and (max-width: 480px) {
        position: fixed;
        bottom: 70px;
        left: 0;
        width: 100%;
        height: 50vh;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        z-index: 9999;
    }
`;

const SidePanel = styled.div`
    @media only screen and (max-width: 480px) {
        width: 100%; /* Cover entire width of screen */
        padding: 20px;
        background-color: white;
        margin-bottom: 20px; /* Add bottom margin */
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Add shadow to float above the floor */
        border-radius: 10px; /* Add border-radius for rounded corners */
        overflow-y: auto; /* Enable scrolling if content exceeds height */
        max-height: 80vh; /* Set maximum height to allow scrolling */
    }
`;
export default SideSection;
