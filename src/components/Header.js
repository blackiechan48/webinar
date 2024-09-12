// src/components/Header.js
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { shake } from 'react-animations';
import MailChimpForm from './MailChimpForm';

const shakeAnimation = keyframes`${shake}`;

const HeaderWrapper = styled.div`
  background-image: url('/path-to-background.jpg');
  background-size: cover;
  background-position: center;
  padding: 50px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const TextContainer = styled.div`
  width: 100%;
  max-width: 500px;
  color: white;
  text-align: right;
`;

const Countdown = styled.div`
  font-size: 2em;
  color: white;
  text-align: left;
`;

const ShakeButton = styled.button`
  animation: ${shakeAnimation} 1s infinite;
  background-color: #ffcc00;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
`;

const Header = () => {
  const [countdown, setCountdown] = useState('');

  useEffect(() => {
    const targetDate = new Date('2024-09-22T12:00:00');
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <HeaderWrapper>
      <Countdown>{countdown}</Countdown>
      <TextContainer>
        <h1>Join our Webinar</h1>
        <p>Learn about [Topic] and more...</p>
        <ShakeButton onClick={() => window.openMailChimp()}>Sign Up</ShakeButton>
      </TextContainer>
      <MailChimpForm />
    </HeaderWrapper>
  );
};

export default Header;
