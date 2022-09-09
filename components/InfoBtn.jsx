import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { assets } from '../constants'

const InfoBtn = ({ type, title, subtitle, shorterText, image, abbr }) => {
  if(type === "fundAct") {
    return (
      <TouchableOpacity className={`flex-row justify-start items-center bg-white shadow-sm rounded-md w-full px-4 py-2 mt-4`}>
        <Image
          source={image}
          resizeMode={"contain"}
          style={{
            width: 40,
            height: 40,
            marginRight: 20
          }}
        />
          <View>
              <Text className={`text-[#40196D] font-bold`}>{title}</Text>
              <Text className={`text-[#000000] text-xs w-[5rem] ${shorterText ? null : `mb-3`}`} style={{ opacity: "0.4"}}>{subtitle}</Text>
              {shorterText && (
                <Text className={`text-[#000000] text-xs mb-3 w-[5rem]`} style={{ opacity: "0.4"}}>{shorterText}</Text>
              )}
          </View>
          <Image 
              source={assets.rightArrowDetails}
              resizeMode={"contain"}
              style={{
                  width: 25,
                  height: 25,
                  marginRight: 20
              }}
              className={`absolute right-0`}
          />
      </TouchableOpacity>
    )
  } else if(type === "beneficiaries") {
    let colorArrays = ["bg-blue-300", "bg-orange-300", "bg-green-300", "bg-[#40196D]", "bg-blue-300"];
    const randomColor = Math.floor(Math.random() * 5);
    return (
      <TouchableOpacity className={`flex-row justify-start items-center w-full px-4 py-2 mt-4`}>
        {abbr && (
          <View className={`justify-center items-center mr-4`}>
            <View className={`w-[50px] h-[50px] ${colorArrays[randomColor]} border-[2px] border-[#40196D] justify-center items-center rounded-full`}>
              <Text className={`#40196D`}>{ abbr?.abr }</Text>
            </View>
          </View>
        )}
          <View>
              <Text className={`font-bold`}>{title}</Text>
              <Text className={`text-[#000000] text-xs w-[5rem] ${shorterText ? null : `mb-3`}`} style={{ opacity: "0.4"}}>{subtitle}</Text>
              {shorterText && (
                <Text className={`text-[#000000] text-xs mb-3 w-[5rem]`} style={{ opacity: "0.4"}}>{shorterText}</Text>
              )}
          </View>
          <Image 
              source={assets.rightArrowDetails}
              resizeMode={"contain"}
              style={{
                  width: 25,
                  height: 25,
                  marginRight: 20
              }}
              className={`absolute right-0`}
          />
      </TouchableOpacity>
    )
  } else {
    return (
      <TouchableOpacity className={`flex-row justify-between items-center bg-white shadow-sm rounded-md w-full px-4 py-2 mt-4`}>
          <View>
              <Text className={`text-[#40196D] font-bold`}>{title}</Text>
              <Text className={`text-[#000000] text-xs w-[5rem] ${shorterText ? null : `mb-3`}`} style={{ opacity: "0.4"}}>{subtitle}</Text>
              {shorterText && (
                <Text className={`text-[#000000] text-xs mb-3 w-[5rem]`} style={{ opacity: "0.4"}}>{shorterText}</Text>
              )}
          </View>
          <Image 
              source={assets.rightArrowDetails}
              resizeMode={"contain"}
              style={{
                  width: 25,
                  height: 25,
                  marginRight: 20
              }}
          />
      </TouchableOpacity>
    )
  }
}

export default InfoBtn