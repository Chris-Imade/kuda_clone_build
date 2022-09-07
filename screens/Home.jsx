import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react';
import FocusedStatusBar from '../components/FocusedStatusBar';
import { assets, COLORS } from '../constants';
import { HeaderCard } from '../components';

const Home = () => {

  return (
    <>
      <FocusedStatusBar 
        backgroundColor={"white"} 
        animated={true}
      />
        
        <HeaderCard />
    </>
  )
}

export default Home;