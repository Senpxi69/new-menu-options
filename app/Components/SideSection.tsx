import React from 'react';
import AddSection from './Sections/AddSection';
import Media from './Section2/Media';
import AudioSection from './Sections/AudioSection';
import RecordSection from './Sections/RecordSection';

function SideSection({ sectionName }: { sectionName: string }) {
    return (
        <div className="bg-white w-96 overflow-auto overflow-x-hidden">

            {sectionName === "Add" ? <div>
                <AddSection /> <Media />
            </div> : ""}
            {sectionName === "Audio" ? <div>
                <AudioSection />
            </div> : ""}
            {sectionName === "Record" ? <div>
                <RecordSection />
            </div> : ""}

        </div>
    );
}
export default SideSection;



