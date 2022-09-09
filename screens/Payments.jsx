import { View, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { InfoBtn, PageTopNav } from '../components';
import { assets, friendsOnKuda } from '../constants';

const FriendsOnKuda = ({ data }) => {
  return (
    <TouchableOpacity className={`justify-center items-center mx-3`}>
      <View className={`w-[50px] h-[50px] bg-blue-300 border-[2px] border-[#000000] justify-center items-center rounded-full`}>
        <Text className={`#40196D`}>{ data.abr }</Text>
      </View>
      <Text className={`text-[#40196D]`}>{ data.name }</Text>
    </TouchableOpacity>
  )
}

const IntroFriendsOnKuda = () => {
  return <View className={`mb-4`}><Text className={`font-bold`}>Friends on Kuda</Text></View>
}

const Payments = () => {
  return (
    <>
      <PageTopNav page={"Payments"} type={"independent"} />
      <ScrollView 
      showsVerticalScrollIndicator={false}
        style={{
        flex: 1,
        backgroundColor: "#ffffff"
      }} className={`px-4`}>
        {/* Friends on kuda */}
        <View className={`mt-12`}>
          <IntroFriendsOnKuda />
            <View>
              <FlatList
                contentContainerStyle={{
                  flexDirection: "row",
                  flex: 1,
                  paddingBottom: 30,
                }}
                data={friendsOnKuda}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => <FriendsOnKuda data={item} />}
                keyExtractor={(item) => item.id}
              />
            </View>
        </View>
        {/* Payment types */}
        <View>
          <InfoBtn title={"Share your @Username"} subtitle={"Receive money from other Kuda"} shorterText={"users with your unique Username."} type={"fundAct"} image={assets.atIcon} />
          <InfoBtn title={"Share your @Username"} subtitle={"Receive money from other Kuda"} shorterText={"users with your unique Username."} type={"fundAct"} image={assets.ussd} />
          <InfoBtn title={"Share your @Username"} subtitle={"Receive money from other Kuda"} shorterText={"users with your unique Username."} type={"fundAct"} image={assets.bankTransferIcon} />
          <InfoBtn title={"Share your @Username"} subtitle={"Receive money from other Kuda"} shorterText={"users with your unique Username."} type={"fundAct"} image={assets.atIcon} />
          <InfoBtn title={"Share your @Username"} subtitle={"Receive money from other Kuda"} shorterText={"users with your unique Username."} type={"fundAct"} image={assets.ussd} />
          <InfoBtn title={"Share your @Username"} subtitle={"Receive money from other Kuda"} shorterText={"users with your unique Username."} type={"fundAct"} image={assets.bankTransferIcon} />
        </View>
        {/* Send to beneficiaries */}
        <View className={`mt-12`}>
          <View className={`flex-row justify-between items-center`}>
            <Text className={`text-sm font-bold`}>Send to Beneficiary</Text>
            <TouchableOpacity className={`rounded-[0.3rem] bg-[#40196D] py-1 px-4`}>
              <Text className={`text-white`}>View All</Text>
            </TouchableOpacity>
          </View>
          <View className={`mb-12`}>
            <InfoBtn abbr={{ abr: "F" }} title={"Florence"} subtitle={"First Bank of Nigeria 3023456432"} type={"beneficiaries"} image={assets.atIcon} />
            <InfoBtn abbr={{ abr: "E" }} title={"Endurance"} subtitle={"United Bank for Africa 2203464236"} type={"beneficiaries"} image={assets.ussd} />
            <InfoBtn abbr={{ abr: "M" }} title={"Me"} subtitle={"Access bank 1410037013"} type={"beneficiaries"} image={assets.bankTransferIcon} />
            <InfoBtn abbr={{ abr: "P" }} title={"Paul"} subtitle={"Access bank 1410037013"} type={"beneficiaries"} image={assets.atIcon} />
            <InfoBtn abbr={{ abr: "S" }} title={"Solomon"} subtitle={"Access bank 1410037013"} type={"beneficiaries"} image={assets.ussd} />
          </View>
        </View>
      </ScrollView>
    </>
  )
}

export default Payments;