import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { assets, COLORS } from '../constants';

const HeaderHome = ({ cardState }) => {
  return (
    <View className={`flex-row justify-between`}>
        <TouchableOpacity className={`flex-row items-center pt-8 px-4`}>
        <Image
            source={assets.profilePhoto}
            resizeMode={'cover'}
            className={`w-[48px] h-[48px]`}
        />
        <Text className={`font-semibold ${COLORS.primaryText} ml-4`}>Hi, Jephthah</Text>
        </TouchableOpacity>

        <TouchableOpacity className={`flex-row items-center pt-8 px-4`}>
        <Text className={
            `mr-4 
            ${cardState != "save" 
            ? `text${COLORS.primaryText}` 
            : "text-green-500"}`}
            >{cardState != "save" ? "Add Money" : "Save Now"}</Text>
        <Image
            source={cardState != "save" ? assets.addMoney : assets.addMoneyActive}
            resizeMode={'contain'}
            className={`w-[37px] h-[37px]`}
        />
        </TouchableOpacity>
    </View>
  )
}

export default HeaderHome;