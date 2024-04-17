import Slider from '@react-native-community/slider';
import React from 'react'
import { View, StyleSheet, Text } from 'react-native';
import TrackPlayer, {useProgress} from 'react-native-track-player'

const SongSlider = () =>  {
    const {position, duration} = useProgress()

    const seek = (value) => {
        TrackPlayer.seekTo(value)
    }

  return (
    <View>
        <Slider
        value={position}
        onSlidingComplete={seek}
        minimumValue={0}
        maximumValue={duration}
        thumbTintColor='#FFF'
        maximumTrackTintColor='#FFF'
        style={styles.sliderContainer}
        />
        <View style={styles.timeContainer}>
            <Text style={styles.time}>
                {new Date(position*1000).toISOString().substring(14, 19)}
            </Text>
            <Text style={styles.time}>
                {new Date((duration-position)*1000).toISOString().substring(14, 19)}
            </Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    sliderContainer: {
      width: 350,
      height: 40,
      marginTop: 25,
  
      flexDirection: 'row',
    },
    timeContainer: {
      width: 340,
  
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    time: {
      color: '#fff',
    },
  });

export default SongSlider