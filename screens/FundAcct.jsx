import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { InfoBtn, PageTopNav } from '../components';
import { assets } from '../constants';

const FundAcct = () => {
  return (
    <>
      <PageTopNav page={"Add Money"} />
      <ScrollView
      showsVerticalScrollIndicator={false} 
      className={`bg-white flex-1`}>
        <View style={{
          height: 30
        }}></View>
        <View className={`mx-4`}>
          <InfoBtn title={"Share your @Username"} subtitle={"Receive money from other Kuda"} shorterText={"users with your unique Username."} type={"fundAct"} image={assets.atIcon} />
          <InfoBtn title={"Share your @Username"} subtitle={"Receive money from other Kuda"} shorterText={"users with your unique Username."} type={"fundAct"} image={assets.ussd} />
          <InfoBtn title={"Share your @Username"} subtitle={"Receive money from other Kuda"} shorterText={"users with your unique Username."} type={"fundAct"} image={assets.bankTransferIcon} />
          <InfoBtn title={"Share your @Username"} subtitle={"Receive money from other Kuda"} shorterText={"users with your unique Username."} type={"fundAct"} image={assets.atIcon} />
          <InfoBtn title={"Share your @Username"} subtitle={"Receive money from other Kuda"} shorterText={"users with your unique Username."} type={"fundAct"} image={assets.ussd} />
          <InfoBtn title={"Share your @Username"} subtitle={"Receive money from other Kuda"} shorterText={"users with your unique Username."} type={"fundAct"} image={assets.bankTransferIcon} />
          <InfoBtn title={"Share your @Username"} subtitle={"Receive money from other Kuda"} shorterText={"users with your unique Username."} type={"fundAct"} image={assets.atIcon} />
          <InfoBtn title={"Share your @Username"} subtitle={"Receive money from other Kuda"} shorterText={"users with your unique Username."} type={"fundAct"} image={assets.ussd} />
          <InfoBtn title={"Share your @Username"} subtitle={"Receive money from other Kuda"} shorterText={"users with your unique Username."} type={"fundAct"} image={assets.bankTransferIcon} />
        </View>
      </ScrollView>
    </>
  )
}

export default FundAcct;