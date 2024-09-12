// src/components/FreeOffer.js
import React from 'react';
import styled from 'styled-components';

const FreeOfferWrapper = styled.div`
  background-image: url('/path-to-background.jpg');
  background-size: cover;
  padding: 50px 20px;
  display: flex;
  justify-content: space-between;
`;

const TextBox = styled.div`
  width: 50%;
  color: white;
`;

const HighlightedTitle = styled.h2`
  background-color: yellow;
  display: inline;
`;

const FreeOffer = () => {
  return (
    <FreeOfferWrapper>
      <div style={{ width: '40%' }}></div>
      <TextBox>
        <HighlightedTitle>Special Offer</HighlightedTitle>
        <p>Subtext goes here...</p>
        <p>Paragraph describing the offer...</p>
        <button onClick={() => window.openMailChimp()}>Claim Now</button>
      </TextBox>
    </FreeOfferWrapper>
  );
};

export default FreeOffer;
