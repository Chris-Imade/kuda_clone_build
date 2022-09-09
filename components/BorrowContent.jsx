import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { assets } from '../constants';

const BorrowContent = () => {
  return (
    <ScrollView
    showsVerticalScrollIndicator={false}>
      <View className={`justify-center text-center items-center bg-white flex-1`}>
        <Text className={`font-bold text-xl mb-4`}>Overdrafts</Text>
        <Text>Life happens and anyone can get low on cash,</Text>
        <Text>That's why there's always an overdraft waiting </Text>
        <Text> here for you, whether you need it or not.</Text>
        <Image 
          source={assets.borrowIllustration}
          resizeMode={"contain"}
          style={{
            width: 300,
            height: 300
          }}
        />
        <TouchableOpacity className={`mb-12 bg-[#40196D] text-white font-semibold w-full mx-8 rounded-md py-4`} style={{
          width: innerWidth - 34
        }}>
          <Text className={`text-white font-bold`}>Borrow</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default BorrowContent;