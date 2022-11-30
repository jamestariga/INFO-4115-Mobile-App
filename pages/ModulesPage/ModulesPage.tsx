import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
  Button,
} from 'react-native'
import { useLayoutEffect, useCallback, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../../utils/type'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { ArrowLeftIcon } from 'react-native-heroicons/solid'
import ModulesCard from '../../components/ModulesCard'
import Data, { ModulesData } from './Data'

const ModulesPage = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  const [playing, setPlaying] = useState<boolean>(false)

  const onStateChange = useCallback((state: string) => {
    if (state === 'ended') {
      setPlaying(false)
      Alert.alert('video has finished playing!')
    }
  }, [])

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev)
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
          <Text className='text-2xl font-bold text-white pt-6'>Modules</Text>
        </View>
      </View>
      <ScrollView>
        <View className='bg-white pt-6 mb-10'>
          {Data.map((item: ModulesData) => (
            <View
              key={item.id}
              className='p-4 mx-4 bg-red-500 rounded-xl mb-10'
            >
              <ModulesCard
                title={item.title}
                playing={playing}
                videoId={item.playId}
                onStateChange={onStateChange}
                togglePlaying={togglePlaying}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ModulesPage
