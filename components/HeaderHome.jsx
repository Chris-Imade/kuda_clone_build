import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { assets, COLORS } from '../constants';
import { useNavigation } from '@react-navigation/native';

const HeaderHome = ({ cardState }) => {

  const navigation = useNavigation();

  return (
    <View className={`flex-row justify-between`}>
        <TouchableOpacity
          onPress={() => navigation.navigate("ProfilePage")} 
          className={`flex-row items-center pt-8 px-4`}>
        <Image
            source={assets.profilePhoto}
            resizeMode={'cover'}
            className={`w-[48px] h-[48px]`}
        />
        <Text className={`font-semibold ${COLORS.primaryText} ml-4`}>Hi, Jephthah</Text>
        </TouchableOpacity>


      {
        cardState === "save" ? (
          <TouchableOpacity 
            // onPress={() => navigation.navigate("")}
            className={`flex-row items-center pt-8 px-4`}>
            <Text className={`mr-4 ${"text-green-500"}`}
                >{"Save Now"}</Text>
            <Image
                source={assets.addMoneyActive}
                resizeMode={'contain'}
                className={`w-[37px] h-[37px]`}
            />
          </TouchableOpacity>
        ) : cardState === "spend" ?  (
          <TouchableOpacity 
            onPress={() => navigation.navigate("FundAcct")}
            className={`flex-row items-center pt-8 px-4`}>
            <Text className={`mr-4 text-[#1B0733]`}
                >{"Add Money"}</Text>
            <Image
                source={assets.addMoney}
                resizeMode={'contain'}
                className={`w-[37px] h-[37px]`}
            />
          </TouchableOpacity>
        ) : null
      }
        
    </View>
  )
}

export default HeaderHome;