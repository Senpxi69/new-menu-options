"use client"
import React from 'react';
import styled from 'styled-components';
import SideBar from './Components/SideBar';
import { MantineProvider } from '@mantine/core';
import MiddleSection from './Components/MiddleSection';
import ControlBar from './Components/ControlBar';

const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
`;

function Page() {
  return (
    <PageContainer>
      <MantineProvider>
        <SideBar />
        <MiddleSection />
        <div>
          <ControlBar />
        </div>
      </MantineProvider>
    </PageContainer>
  );
}

export default Page;
