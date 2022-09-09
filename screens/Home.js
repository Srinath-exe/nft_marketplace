import { useState } from 'react'
import { View, SafeAreaView, FlatList, Text} from 'react-native'
import {COLORS, NTFData} from '../constants';
import {FocusedStatusbar } from '../compontents'
const Home = () => {
  return (
    <SafeAreaView style={{flex :1}}>
   
      <FocusedStatusbar background ={COLORS.primary} />

      <view style={{ flex: 1 }}>
        <view style={{ zIndex: 0 }}>
          <FlatList data={NTFData}/>
        </view>
      </view>
    </SafeAreaView>

   
      
  )
}

export default Home