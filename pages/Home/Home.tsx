import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { UserIcon } from 'react-native-heroicons/outline'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../utils/type'
import { BookOpenIcon } from 'react-native-heroicons/solid'

const Home = () => {
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
        <View className='flex-row pb-3 items-center mx-4 px-2 space-x-2'>
          <Text className='text-2xl font-bold text-white pt-6'>
            Shorinji Kempo BC
          </Text>
        </View>
        <View className='items-center justify-center mx-4 px-2 space-x-2 pt-2'>
          <UserIcon size={30} color={'#ffffff'} />
        </View>
      </View>
      <View className='bg-white flex items-center space-y-10 pt-10 h-screen'>
        <View className='px-4'>
          <TouchableOpacity onPress={() => navigation.navigate('ModulesPage')}>
            <View className='bg-neutral-600 flex flex-row justify-between items-center h-48 rounded-xl'>
              <View className='flex flex-row justify-center items-center w-full pt-6 space-x-6'>
                <Text className='text-2xl font-bold text-gray-800'>
                  Modules
                </Text>
                <BookOpenIcon size={30} color={'#e82e2e'} />
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View className='px-4'>
          <TouchableOpacity onPress={() => navigation.navigate('Quiz')}>
            <View className='bg-neutral-600 flex flex-row justify-between items-center h-48 rounded-xl'>
              <View className='flex flex-row justify-center items-center w-full pt-6 space-x-6'>
                <Text className='text-2xl font-bold text-gray-800'>Quiz</Text>
                <BookOpenIcon size={30} color={'#e82e2e'} />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home
