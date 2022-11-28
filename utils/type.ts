export type RootStackParamList = {
  Home: undefined
  Quiz: undefined
  ModulesPage: undefined
  Achievements: undefined
}

export type HomeCardsProp = {
  id?: number
  title: string
  image: any
  navigate: keyof RootStackParamList
}

export type Answers = {
  id: number
  option: string
  isCorrect: boolean
}

export type Question = {
  id?: number
  title: string
  answer?: string
  options: Answers[]
  isCorrect?: boolean
  handleAnswerOptionClick?: any
}
