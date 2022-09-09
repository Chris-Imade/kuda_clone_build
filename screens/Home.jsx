import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react';
import FocusedStatusBar from '../components/FocusedStatusBar';
import { assets, COLORS } from '../constants';
import { HeaderCard } from '../components';

const Home = () => {

  return (
    <View style={{
      backgroundColor: "white",
      flex: 1
    }}>
      <FocusedStatusBar 
        backgroundColor={"white"} 
        animated={true}
      />
        
        <HeaderCard />
    </View>
  )
}

export default Home;