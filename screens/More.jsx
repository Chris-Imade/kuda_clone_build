import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { InfoBtn, PageTopNav } from '../components'
import { assets } from '../constants'

const More = () => {
  return (
    <>
      <PageTopNav page={"More"} type={"extra"} iconType={assets.addMoney} />
      <ScrollView 
        style={{
          flex: 1,
          backgroundColor: "#ffffff"
        }} className={`px-4`}
        showsVerticalScrollIndicator={false}
      >
        <View className={`my-4`}>
          <InfoBtn type={"fundAct"} title={"Jephthah Ikpnmwo..."} subtitle={"Acount Details"} image={assets.profilePhoto} />
        </View>
        <View className={`my-8`}>
          <InfoBtn type={"fundAct"} title={"Statements and Reports"} subtitle={"Download monthly statements"} image={assets.atIcon} />
          <InfoBtn type={"fundAct"} title={"Saved Cards"} subtitle={"Manage connected cards"} image={assets.atIcon} />
          <InfoBtn type={"fundAct"} title={"Linked Accounts"} subtitle={"Manage external Accounts"} image={assets.atIcon} />
          <InfoBtn type={"fundAct"} title={"Get Help"} subtitle={"Get support and send feedback"} image={assets.atIcon} />
          <InfoBtn type={"fundAct"} title={"Security"} subtitle={"Protect yourself from intruders"} image={assets.atIcon} />
          <InfoBtn type={"fundAct"} title={"Referrals"} subtitle={"Earn money when your friends join"} shorterText={"Kuda"} image={assets.atIcon} />
          <InfoBtn type={"fundAct"} title={"Account Limits"} subtitle={"How much you can spend and"} shorterText={"receive"} image={assets.atIcon} />
          <InfoBtn type={"fundAct"} title={"Legal"} subtitle={"About our contract with you"} image={assets.atIcon} />
        </View>
        <View className={`text-center`}>
          <Text className={`text-red-500 font-bold text-xl my-8`}>Sign Out</Text>
          <Text className={`mb-4 text-l font-light`}>version 0.9.620</Text>
        </View>
      </ScrollView>
    </>
  )
}

export default More