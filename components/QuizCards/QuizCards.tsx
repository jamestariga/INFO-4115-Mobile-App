import { View, Text, TouchableOpacity } from 'react-native'
import { Question, Answers } from '../../utils/type'

const QuizCards = (props: Question) => {
  const { title, options, handleAnswerOptionClick } = props

  return (
    <View className='p-4 space-y-4 h-screen'>
      <View className='bg-red-500 flex flex-row justify-between items-center h-48 rounded-xl'>
        <View className='flex flex-row justify-between items-center w-full p-8 space-x-6'>
          <Text className='text-3xl font-bold text-white'>{title}</Text>
        </View>
      </View>
      {options.map((option: Answers) => (
        <TouchableOpacity
          key={option.id}
          onPress={() => handleAnswerOptionClick(option.isCorrect)}
          className={`${
            option.isCorrect ? `bg-green-900` : `bg-red-900`
          } flex flex-row justify-between items-center h-20 rounded-xl`}
        >
          <View className='bg-slate-400 w-full flex flex-row justify-between items-center h-20 rounded-xl p-4'>
            <Text className='text-3xl font-bold text-white'>
              {option.option}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default QuizCards
