import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react';
import { assets } from "../constants/index";

const SaveContent = () => {
  return (
    <>
    {/* Spend And Save Button */}
      <View className={`w-full h-[30px] bg-[#D9D9D9] mt-4 justify-center pl-4`}>
        <Text className={`text-[#000000]`} style={{ opacity: "0.4"}}>Spend and Save</Text>
      </View>

      <TouchableOpacity className={`flex-row border-b-[1px] border-[#D9D9D9] py-4 px-4 shadow-sm`}>
        <Image
          source={assets.spendAndSave}
          resizeMode={"contain"}
          style={{
            width: 40,
            height: 40,
          }}
        />
        <View className={`ml-4 flex-row justify-between items-center`} style={{
          width: innerWidth - 96
        }}>
          <View className={`flex-col justify-between`}>
            <Text className={`text-[#000000] text-sm`} style={{ opacity: "0.4"}}>{"Saved"}</Text>
            <Text className={`text-xs font-bold mt-2 text-[#40196D]`}>{"#0.00"}</Text>
          </View>
          <Text className={`text-2xl justify-center items-center flex-row text-[#40196D]`}>
            {"25.0%"}
            <Image
              source={assets.rightArrow}
              resizeMode={"contain"}
              style={{
                width: 25,
                height: 25,
                marginLeft: 10
              }}
            />
            </Text>
        </View>
      </TouchableOpacity>


      {/* Fex Savings Button */}
      <View className={`w-full h-[30px] bg-[#D9D9D9] justify-center pl-4`}>
        <Text className={`text-[#000000]`} style={{ opacity: "0.4"}}>Flexible</Text>
      </View>

      <TouchableOpacity className={`flex-row border-b-[1px] border-[#D9D9D9] py-4 px-4 shadow-sm`}>
        <Image
          source={assets.flexibleSavings}
          resizeMode={"contain"}
          style={{
            width: 40,
            height: 40,
          }}
        />
        <View className={`ml-4 flex-row justify-between items-center`} style={{
          width: innerWidth - 96
        }}>
          <View className={`flex-col justify-between`}>
            <Text className={`text-[#000000] text-sm`} style={{ opacity: "0.4"}}>{"Transport"}</Text>
            <Text className={`text-xs font-bold mt-2 text-[#40196D]`}>{"#0.00"}</Text>
          </View>
          <Text className={`text-2xl justify-center items-center flex-row text-[#40196D]`}>
            {"25.0%"}
            <Image
              source={assets.rightArrow}
              resizeMode={"contain"}
              style={{
                width: 25,
                height: 25,
                marginLeft: 10
              }}
            />
            </Text>
        </View>
      </TouchableOpacity>
    </>
  )
}

export default SaveContent;