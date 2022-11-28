import { Question } from './type'

const Questions: Question[] = [
  {
    id: 1,
    title: 'What does "Migi" mean?',
    answer: 'Right',
    options: [
      { id: 1, option: 'Left', isCorrect: false },
      { id: 2, option: 'Right', isCorrect: true },
      { id: 3, option: 'Up', isCorrect: false },
      { id: 4, option: 'Down', isCorrect: false },
    ],
  },
  {
    id: 2,
    title: 'What does "Mae" mean?',
    answer: 'Forward or Front',
    options: [
      { id: 1, option: 'Forward or Front', isCorrect: true },
      { id: 2, option: 'Back', isCorrect: false },
      { id: 3, option: 'Up', isCorrect: false },
      { id: 4, option: 'Down', isCorrect: false },
    ],
  },
  {
    id: 3,
    title: 'What does "Sensei" mean?',
    answer: 'Teacher',
    options: [
      { id: 1, option: 'Teacher', isCorrect: true },
      { id: 2, option: 'Student', isCorrect: false },
      { id: 3, option: 'Master', isCorrect: false },
      { id: 4, option: 'Sensei', isCorrect: false },
    ],
  },
  {
    id: 4,
    title: 'What does "Senpai" mean?',
    answer: 'Senior Student',
    options: [
      { id: 1, option: 'Senior Student', isCorrect: true },
      { id: 2, option: 'Junior Student', isCorrect: false },
      { id: 3, option: 'Teacher', isCorrect: false },
      { id: 4, option: 'Master', isCorrect: false },
    ],
  },
  {
    id: 5,
    title: 'What does "Obi" mean?',
    answer: 'Belt',
    options: [
      { id: 1, option: 'Belt', isCorrect: true },
      { id: 2, option: 'Clothes', isCorrect: false },
      { id: 3, option: 'Shoes', isCorrect: false },
      { id: 4, option: 'Hat', isCorrect: false },
    ],
  },
  {
    id: 6,
    title: 'What does "Gi" mean?',
    answer: 'Uniform',
    options: [
      { id: 1, option: 'Clothes', isCorrect: false },
      { id: 2, option: 'Uniform', isCorrect: true },
      { id: 3, option: 'Shoes', isCorrect: false },
      { id: 4, option: 'Hat', isCorrect: false },
    ],
  },
  {
    id: 7,
    title: 'What number is "Roku"?',
    answer: '6',
    options: [
      { id: 1, option: '1', isCorrect: false },
      { id: 2, option: '2', isCorrect: false },
      { id: 3, option: '3', isCorrect: false },
      { id: 4, option: '6', isCorrect: true },
    ],
  },
  {
    id: 8,
    title: 'What does "Shita" mean?',
    answer: 'Downward',
    options: [
      { id: 1, option: 'Upward', isCorrect: false },
      { id: 2, option: 'Downward', isCorrect: true },
      { id: 3, option: 'Leftward', isCorrect: false },
      { id: 4, option: 'Rightward', isCorrect: false },
    ],
  },
]

export default Questions
