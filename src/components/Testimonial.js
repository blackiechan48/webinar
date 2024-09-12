// src/components/Testimonial.js
import React from 'react';
import styled from 'styled-components';

const TestimonialWrapper = styled.div`
  background-color: #f5f5f5;
  padding: 50px 20px;
  text-align: center;
`;

const VideoBox = styled.div`
  margin: 20px auto;
  width: 100%;
  max-width: 600px;
  height: 340px;
  background-color: black;
`;

const TestimonialTextContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

const TestimonialBox = styled.div`
  width: 30%;
  text-align: left;
`;

const Testimonial = () => {
  return (
    <TestimonialWrapper>
      <VideoBox>
        <iframe src="video-url" width="100%" height="100%" frameborder="0" allow="autoplay"></iframe>
      </VideoBox>
      <TestimonialTextContainer>
        <TestimonialBox>
          <img src="/path-to-client.jpg" alt="Client" />
          <p>Client testimonial...</p>
        </TestimonialBox>
        <TestimonialBox>
          <img src="/path-to-client.jpg" alt="Client" />
          <p>Client testimonial...</p>
        </TestimonialBox>
        <TestimonialBox>
          <img src="/path-to-client.jpg" alt="Client" />
          <p>Client testimonial...</p>
        </TestimonialBox>
      </TestimonialTextContainer>
    </TestimonialWrapper>
  );
};

export default Testimonial;
