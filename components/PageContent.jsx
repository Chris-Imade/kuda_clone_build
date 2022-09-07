import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react';
import { transactionData } from '../constants';

const Header = () => {
  return (
    <>
      <Text className="ml-4 font-bold">Rescent Transactions</Text>
      <View className={`w-full h-[30px] bg-[#D9D9D9] mt-4 justify-center pl-4`}>
        <Text className={`text-[#000000]`} style={{ opacity: "0.4"}}>05 Sep 2022</Text>
      </View>
    </>
  )
}

const Transaction = ({ data }) => {
  return (
    <>
      <TouchableOpacity className={`flex-row border-b-[1px] border-[#D9D9D9] py-4 px-4`}>
        <Image
          source={data.image}
          resizeMode={"contain"}
          style={{
            width: 40,
            height: 40,
          }}
        />
        <View className={`ml-4 justify-between`} style={{
          width: innerWidth - 96
        }}>
          <View className={`flex-row justify-between`}>
            <Text>{data.type}</Text>
            <Text className={`text-green-500`}>{data.amount}</Text>
          </View>
          <Text className={`text-[#000000] text-xs`} style={{ opacity: "0.4"}}>{data.time}</Text>
        </View>
      </TouchableOpacity>
    </>
  )
}

const PageContent = () => {
  return (
    <>
      <FlatList
        data={transactionData}
        renderItem={({ item }) => <Transaction data={item} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => <Header />}
        keyExtractor={(item) => item.id}
      />
    </>
  )
}

export default PageContent