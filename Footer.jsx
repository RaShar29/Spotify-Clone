import React from 'react';
import styled from 'styled-components';
import CurrentTrack from "./CurrentTrack";

export default function Footer() {
  return <Container>
    <CurrentTrack />
  </Container>
}

const Container = styled.div`
    background-color: #181818;
    height: 10vh;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;

`; 