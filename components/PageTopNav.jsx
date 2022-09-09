import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { assets } from '../constants'

const PageTopNav = ({ page, type, title, iconType }) => {

    if(type === "independent") {
        return (
            <View className={`flex-row items-center justify-center px-4 h-[70px] fixed top-0 right-0 left-0 border-b-[1px] border-b-[#E7E7E7] bg-white`}>
                <Text className={`font-bold text-[#1B0733] text-l`}>{page}</Text>
            </View>
        )
    } else if (type === "extra") {
        return (
            <View className={`flex-row items-center justify-between px-4 h-[70px] fixed top-0 right-0 left-0 border-b-[1px] border-b-[#E7E7E7] bg-white`}>
                <View style={{ width: 90 }}></View>
                <Text className={`font-bold text-[#1B0733] text-l`}>{page}</Text>
                <TouchableOpacity 
                    // onPress={() => navigation.navigate("FundAcct")}
                    className={`flex-row items-center`}>
                    <Text className={`mr-4 text-[#1B0733]`}
                        >{title}</Text>
                    <Image
                        source={iconType}
                        resizeMode={'contain'}
                        className={`w-[37px] h-[37px]`}
                    />
                </TouchableOpacity>
            </View>
        )
    } else {
        return (
            <View className={`flex-row items-center justify-between px-4 h-[70px] fixed top-0 right-0 left-0 border-b-[1px] border-b-[#E7E7E7] bg-white`}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("HomeStack")}
                >
                    <Image
                    source={assets.leftArrowDetails}
                    resizeMode={"contain"}
                    style={{
                        width: 20,
                        height: 20
                    }}
                    />
                </TouchableOpacity>
                    <Text className={`font-bold text-[#1B0733] text-l`}>{page}</Text>
                <Text></Text>
            </View>
        )
    }
}

export default PageTopNav