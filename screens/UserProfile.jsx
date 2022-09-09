import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { assets } from '../constants';
import { InfoBtn, PageTopNav } from '../components';

const UserProfile = () => {

  const navigation = useNavigation();

  return (
        <>
        {/* Page Nav & Title */}
          <PageTopNav page={"Profile"} />
          <ScrollView 
          showsVerticalScrollIndicator={false}
          style={{
            backgroundColor: "white",
            flex: 1
          }}>

          {/* Page Content */}
          <View className={`justify-center items-center mx-4`}>
            <Image 
              source={assets.profilePhoto}
              resizeMode={"contain"}
              style={{
                width: 100,
                height: 100,
                marginTop: 30,
                marginBottom: 10
              }}
            />
            <Text className={`font-bold text-2xl`}>Jephthah Ikponmwosa Imade</Text>
            {/* Account Number */}
            <TouchableOpacity className={`flex-row justify-between items-center bg-gray-200 rounded-md w-full px-4 py-2 mt-12`}>
              <View className={`justify-between`}>
                <Text className={`text-[#000000] text-xs mb-3`} style={{ opacity: "0.4"}}>Your Account Number</Text>
                <Text className={`font-bold text-l`}>2039327167</Text>
              </View>
              <Image 
                source={assets.copy}
                resizeMode={"contain"}
                style={{
                  width: 60,
                  height: 60
                }}
              />
            </TouchableOpacity>
            {/* House Address */}
            <InfoBtn type={"accountName"} title={"Jephthah Ikponmwosa Imade"} subtitle={"Account Name"} />
            <InfoBtn type={"address"} title={"56, Somewhere in Nigeria"} subtitle={"Address"} />
            <InfoBtn type={"phoneNumber"} title={"+2347080896901"} subtitle={"Phone Number"} />
            <InfoBtn type={"email"} title={"imadechriswebdev@gmail.com"} subtitle={"Email Address"} />
            <InfoBtn type={"identification"} title={"NIN Slip"} subtitle={"Identification"} />
            <InfoBtn type={"nextOfKin"} title={"None"} subtitle={"Next of Kin"} />
            <View style={{
              height: 50
            }}></View>
          </View>
        </ScrollView>
      </>
  )
}

export default UserProfile;