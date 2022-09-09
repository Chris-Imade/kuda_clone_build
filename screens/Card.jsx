import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { InfoBtn, PageTopNav } from '../components'
import { assets } from '../constants'

const Card = () => {
  return (
    <>
      <PageTopNav page={"Card"} type={"extra"} iconType={assets.addMoney} title={"Get Card"} />    
      <ScrollView
        contentContainerStyle={{
          backgroundColor: "#ffffff",
          flex: 1,
          paddingHorizontal: 20,
          justifyContent: "center",
          alignItems: "center"
        }}
        showsVerticalScrollIndicator={false}
      >
        <Image 
          source={assets.borrowIllustration}
          resizeMode={"contain"}
          style={{
            width: 400,
            height: 400,
            marginTop: 30,
            marginBottom: 30
          }}
        />
        <Text>Spend online and offline globally with your</Text>
        <Text>Kuda cards.</Text>
        <InfoBtn type={"fundAct"} title={"Request A Card"} subtitle={"We'll send it to you wherever you are."} image={assets.ussd} />
      </ScrollView>
    </>
  )
}

export default Card