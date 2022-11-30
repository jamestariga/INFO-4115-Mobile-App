import { View, Text, Button, Platform, TouchableOpacity } from 'react-native'
import YoutubePlayer from 'react-native-youtube-iframe'

type ModulesCardProp = {
  playing: boolean
  videoId: string
  onStateChange: (state: string) => void
  togglePlaying: () => void
  title: string
}

const ModulesCard = (props: ModulesCardProp) => {
  const { playing, videoId, onStateChange, togglePlaying, title } = props

  return (
    <>
      <Text className='text-white mb-2 text-xl font-bold text-center'>
        {title}
      </Text>
      <YoutubePlayer
        webViewProps={{
          androidLayerType:
            Platform.OS === 'android' && Platform.Version <= 22
              ? 'hardware'
              : 'none',
        }}
        webViewStyle={{ opacity: 0.99 }}
        height={210}
        play={playing}
        videoId={videoId}
        onChangeState={onStateChange}
      />
      <TouchableOpacity
        onPress={togglePlaying}
        className='bg-sky-500 p-2 rounded-xl'
      >
        <Text className='w-full text-center text-white text-xl font-bold'>
          {playing ? 'Pause' : 'Play'}
        </Text>
      </TouchableOpacity>
    </>
  )
}

export default ModulesCard
