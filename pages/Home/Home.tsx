import { SafeAreaView, View, Text } from 'react-native'
import { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { UserIcon } from 'react-native-heroicons/outline'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../utils/type'
import HomeCards from '../../components/HomeCards'
import { DATA } from './Data'

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
      <View className='bg-white flex items-center pt-10 h-screen'>
        {DATA.map((item) => (
          <HomeCards
            key={item.id}
            title={item.title}
            image={item.image}
            navigate={item.navigate}
          />
        ))}
      </View>
    </SafeAreaView>
  )
}

export default Home
