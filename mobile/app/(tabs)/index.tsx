import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import SignOutButton from '@/components/SignOutButton'

const HomeScreen = () => {
  return (
    <SafeAreaView className='flex-1 bg-white'>
    <View className='flex-row justify-between items-center px-4 py-3 border-b border-gray-200'>
      <Ionicons name='logo-twitter' size={24} color="#1DA1F2" />
      <Text className='text-xl font-bold text-gray-900'>Home</Text>
      <SignOutButton/>
    </View>
    </SafeAreaView>
  )
}

export default HomeScreen