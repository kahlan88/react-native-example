import React from 'react';
import Lottie from 'lottie-react-native';

export default function Animation() {
  return <Lottie source={require('./animation/watermelon/Watermelon.json')} autoPlay />; // Dummy json only Lottie example
}
