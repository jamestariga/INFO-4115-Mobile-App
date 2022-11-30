import { RootStackParamList } from '../../utils/type'
import quizImage from '../../assets/images/quiz.jpg'
import moduleImage from '../../assets/images/module.jpg'
import achievementImage from '../../assets/images/achievement.jpg'

type Data = {
  id: number
  title: string
  image: any
  navigate: keyof RootStackParamList
}

export const DATA: Data[] = [
  {
    id: 1,
    title: 'Quiz',
    image: quizImage,
    navigate: 'Quiz',
  },
  {
    id: 2,
    title: 'Modules',
    image: moduleImage,
    navigate: 'ModulesPage',
  },
  {
    id: 3,
    title: 'Achievements',
    image: achievementImage,
    navigate: 'Achievements',
  },
]
