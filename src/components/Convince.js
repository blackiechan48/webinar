// src/components/Convince.js
import React from 'react';
import styled from 'styled-components';
import contentBackground from '../assets/images/photo2.jpg'

const ConvinceWrapper = styled.div`
  background-image: url('/path-to-background.jpg');
  background-size: cover;
  padding: 50px 20px;
`;

const BoxesContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Box = styled.div`
  width: 30%;
  text-align: center;
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
`;

const Convince = () => {
  return (
    <ConvinceWrapper>
      <h2>Why Join?</h2>
      <p>Learn more about [Topic]...</p>
      <BoxesContainer>
        <Box>
          <Icon src="/path-to-icon.jpg" alt="Icon" />
          <h3>Topic 1</h3>
          <p>Short description</p>
        </Box>
        <Box>
          <Icon src="/path-to-icon.jpg" alt="Icon" />
          <h3>Topic 2</h3>
          <p>Short description</p>
        </Box>
        <Box>
          <Icon src="/path-to-icon.jpg" alt="Icon" />
          <h3>Topic 3</h3>
          <p>Short description</p>
        </Box>
      </BoxesContainer>
    </ConvinceWrapper>
  );
};

export default Convince;
