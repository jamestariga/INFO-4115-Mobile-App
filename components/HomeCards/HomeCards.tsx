import { View, Text, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../utils/type'
import { HomeCardsProp } from '../../utils/type'

const HomeCards = (props: HomeCardsProp) => {
  const { title, image, navigate } = props

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  return (
    <View className='p-4'>
      <TouchableOpacity onPress={() => navigation.navigate(navigate)}>
        <View className='bg-red-500 flex flex-row justify-between items-center h-48 rounded-xl'>
          <View className='flex flex-row justify-between items-center w-full p-8 space-x-6'>
            <Text className='text-3xl font-bold text-white'>{title}</Text>
            <Image source={image} className='w-24 h-24 rounded-xl' />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default HomeCards
