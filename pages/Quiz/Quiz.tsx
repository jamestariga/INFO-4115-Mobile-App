import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../../utils/type'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { ArrowLeftIcon } from 'react-native-heroicons/solid'
import QuizCards from '../../components/QuizCards'
import Questions from '../../utils/Questions'
import { Question, Answers } from '../../utils/type'

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0)
  const [showScore, setShowScore] = useState<boolean>(false)
  const [score, setScore] = useState<number>(0)

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  const handleAnswerOptionClick = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1)
    }

    const nextQuestion = currentQuestion + 1
    if (nextQuestion < Questions.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
    }
  }

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
          <Text className='text-2xl font-bold text-white pt-6'>Quiz</Text>
        </View>
      </View>
      <ScrollView className='bg-white'>
        {showScore ? (
          <View className='flex flex-col items-center justify-center space-y-10 pt-10 h-screen'>
            <Text className='text-2xl font-bold text-red-500'>
              You scored {score} out of {Questions.length}
            </Text>
          </View>
        ) : (
          <View className='flex flex-col items-center justify-center space-y-10 pt-10 h-screen'>
            <View className='flex flex-col items-center justify-center space-y-10 pt-10 h-screen'>
              <Text className='text-2xl font-bold text-red-500'>
                Question {currentQuestion + 1}
              </Text>
            </View>
            <View className='flex flex-col items-center justify-center space-y-10 pt-10 h-screen'>
              {Questions[currentQuestion].options.map((option: Answers) => (
                <QuizCards
                  key={option.id}
                  title={Questions[currentQuestion].title}
                  answer={Questions[currentQuestion].answer}
                  options={Questions[currentQuestion].options}
                  handleAnswerOptionClick={handleAnswerOptionClick}
                />
              ))}
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  )
}

export default Quiz
