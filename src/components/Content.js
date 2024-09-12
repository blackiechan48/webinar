import React from 'react';
import styled from 'styled-components';
import heroBackground from '../assets/images/photo1.jpg';  // Corrected path
import boxImage from '../assets/images/photo3.jpg'

const ContentWrapper = styled.div`
  background-image: url(${heroBackground});  // Use the imported image
  background-size: cover;
  padding: 50px 20px;
`;

const BoxesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: white;
  padding: 20px;
`;

const Box = styled.div`
  width: 30%;
  height: 150px;
  background-color: #f5f5f5;
  background-image: url(${boxImage});  // Replace with actual image if needed
  background-size: cover;
`;

const Content = () => {
  return (
    <ContentWrapper>
      <BoxesContainer>
        <Box />
        <Box />
        <Box />
      </BoxesContainer>
    </ContentWrapper>
  );
};

export default Content;
