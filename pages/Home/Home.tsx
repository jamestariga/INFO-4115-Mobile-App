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
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../utils/type'

const Home = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()

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
      <ScrollView className='bg-white'>
        <View className='flex flex-row justify-between items-center'>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text>Modules</Text>
          </TouchableOpacity>
        </View>
        <View className='flex flex-row justify-between items-center'>
          <TouchableOpacity onPress={() => navigation.navigate('Quiz')}>
            <Text>Quiz</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home
