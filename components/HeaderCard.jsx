import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { COLORS, assets } from '../constants';
import HeaderHome from './HeaderHome';
import PageContent from './PageContent';

const accountDetails = [{
    fullName: "Imade Jephthah",
    accountBalance: "132,000",
    accountSavings: "12,000"
}]


const HeaderCard = () => {
    const [cardState, setCardState] = useState("spend");
    console.log(cardState);
  return (
        <>
        {/* Home Header Component */}
            <HeaderHome cardState={cardState} />
            {/* Home Card Information */}
            <View className={`${cardState === "save" ? "bg-green-500" : "bg-[#40196D]"} h-[200px] mt-8 mx-4 rounded-[10px] items-center justify-center mb-6`}>
                <Text className={`text-center`}
                style={{ 
                    color: cardState != "save" ? COLORS.secondaryText : "#ffffff" 
                    }}>{cardState != "save" ? "Account Balance" : "Your Savings"}</Text>
                    <View className={`flex-row items-center justify-center mt-3`}>
                        <Image
                            source={assets.naira}
                            resizeMode={"contain"}
                            className={`w-[30px] h-[38px]`}
                        />
                        <Text className={`text-[31.6px] font-semibold text-white ml-2`}>{cardState != "save" ? accountDetails[0].accountBalance : accountDetails[0].accountSavings}</Text>
                    </View>
                    <View className={`flex-row w-full justify-around mt-4`}>
                        {/* Spend Tab */}
                    <View>
                        <TouchableOpacity 
                            onPress={() => setCardState("spend")}
                            className={`justify-center items-center`}
                        >
                            <Image
                                source={assets.spend}
                                resizeMode={"contain"}
                                className={`w-[58px] h-[45px]`}
                            />
                            <Text className={`${ cardState === "spend" ? `text-white` : `text-[#b7b7b762]` }`}>Spend</Text>
                        </TouchableOpacity>
                    </View>
                    {/* Save Tab */}
                        {(() => {
                            if(cardState == "save") {
                                return (
                                    <View>
                                        <TouchableOpacity 
                                            onPress={() => setCardState("save")}
                                            className={`justify-center items-center`}
                                        >
                                        <Image 
                                            source={assets.saveActive}
                                            resizeMode={"contain"}
                                            className={`w-[58px] h-[45px]`}
                                        />
                                        <Text className={``} style={{ color: cardState != "save" ? '#b7b7b762' : "white" }}>Save</Text>
                                    </TouchableOpacity>
                                </View>
                                )
                           } else {
                                return (
                                    <View>
                                        <TouchableOpacity 
                                            onPress={() => setCardState("save")}
                                            className={`justify-center items-center`}
                                        >
                                        <Image 
                                            source={assets.save}
                                            resizeMode={"contain"}
                                            className={`w-[58px] h-[45px]`}
                                        />
                                        <Text className={``} style={{ color: cardState != "save" ? '#b7b7b762' : "white" }}>Save</Text>
                                        </TouchableOpacity>
                                    </View>
                                )
                           }
                        })()}
                        {/* Borrow Tab */}
                        {(() => {
                            return (
                                <View>
                                    <TouchableOpacity 
                                        className={`justify-center items-center`}
                                        onPress={() => setCardState("borrow")}
                                    >
                                        <Image 
                                            source={assets.borrow}
                                            resizeMode={"contain"}
                                            className={`w-[58px] h-[45px]`}
                                        />
                                        <Text className={`${ cardState === "borrow" ? `text-white` : `text-[#b7b7b762]` }`}>Borrow</Text>
                                    </TouchableOpacity>
                                </View>
                            )
                        })()}
                    </View>
            </View>
            {/* Dynamic Page Component */}
            <PageContent cardState={cardState} />
        </>
  )
}

export default HeaderCard;