import { View, Text, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import * as Progress from 'react-native-progress'
import trophy from '../../assets/images/trophy.jpg'
import { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../../utils/type'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { ArrowLeftIcon } from 'react-native-heroicons/solid'

const Achievement = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  return (
    <SafeAreaView className='bg-red-500 pt-5'>
      <View className='flex flex-row justify-between items-center'>
        <View className='flex-row pb-3 items-center mx-4 px-2 space-x-10'>
          <TouchableOpacity
            className='absolute top-6 p-2 rounded-full bg-neutral-200'
            onPress={navigation.goBack}
          >
            <ArrowLeftIcon size={20} color='#ffffff' />
          </TouchableOpacity>
          <Text className='text-2xl font-bold text-white pt-6'>
            Achievements
          </Text>
        </View>
      </View>
      <View className='bg-white flex items-center space-y-4 p-4 pt-10 h-screen'>
        <View className='flex items-center space-y-4 p-4 bg-red-500 rounded-xl'>
          <Text className='text-white text-xl font-bold'>Achievement</Text>
          <Image source={trophy} className='w-60 h-60 rounded-xl' />
          <Text className='text-white text-xl font-bold'>Level 18</Text>
          <View className='bg-white rounded-xl'>
            <Progress.Bar
              progress={0.8}
              height={15}
              borderRadius={10}
              width={300}
              animated={false}
              color='#3b82f6'
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Achievement
