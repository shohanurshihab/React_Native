import React from 'react'
import { Dimensions, FlatList, Image, StyleSheet, View } from 'react-native';

import TrackPlayer, { Track, useTrackPlayerEvents, Event  } from 'react-native-track-player';
import { playListData } from '../constants';
import { skipToNext } from 'react-native-track-player/lib/src/trackPlayer';
import SongInfo from '../components/SongInfo';
import SongSlider from '../components/SongSlider';
import ControlCenter from '../components/ControlCenter';

// playListData.forEach(track => {
//     TrackPlayer.add(track);
// })
const { width } = Dimensions.get('window');
type ArtWorkProps = {
  item: Track; // Replace Track with the actual type of your item
};
const MusicPlayer = () => {

    const [track, setTrack] = React.useState<Track | null | undefined>();

    useTrackPlayerEvents([Event.PlaybackActiveTrackChanged], async event => {
        switch (event.type) {
            case Event.PlaybackActiveTrackChanged:
                setTrack(await TrackPlayer.getTrack(event.track?.id));
                console.log((event.track?.id ));
                break;
        
        }
    }
    )


    // const renderArtWork = () => {
    //         return (
    //             <View style={styles.listArtWrapper}>
    //                 <View style={styles.albumContainer}>
    //                     {track?.artwork && (<Image source={{ uri: track?.artwork?.toString() }} style={styles.albumArtImg} />)}
    //                 </View>
    //             </View>
    //         )
        
    // }
    
  return (
    <View style={styles.container}>
        <View style={styles.listArtWrapper}>
            <View style={styles.albumContainer}>
              {        
              track?.artwork && (<Image source={{ uri: track?.artwork }} style={styles.albumArtImg} />)
              }
          </View>
        </View>
        <SongInfo track={track} />
        <SongSlider />
        <ControlCenter />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#001d23',
    },
    listArtWrapper: {
      width: width ,
      justifyContent: 'center',
      alignItems: 'center',
    },
    albumContainer: {
      width: 300,
      height: 300,
      margin: 100
    },
    albumArtImg: {
      height: '100%',
      borderRadius: 10,
    },
  });
  

export default MusicPlayer