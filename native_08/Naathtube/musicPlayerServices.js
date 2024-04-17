import TrackPlayer, { Event ,RepeatMode } from "react-native-track-player";

import { playListData } from "./src/constants"; 

export async function setupPlayer() {
    let isSetup = false;
    try {
        await TrackPlayer.getActiveTrackIndex();
        isSetup = true;
    } catch (error) {
        await TrackPlayer.setupPlayer()
        isSetup = true;
    } finally {
        return isSetup;
    }
}

export async function addTrack() {
        await TrackPlayer.setRepeatMode(RepeatMode.Queue);
        await TrackPlayer.add(playListData);
}
/**
 * This function is used to register the playback service.
 * The playback service is used to handle remote playback events
 * from the lockscreen and notification center. This allows the user
 * to control the music player from the outside of the app.
 */
export async function playbackService() {
    // Add an event listener for the remote pause event.
    // This event is fired when the user presses the pause button
    // on their Bluetooth device or remote control. When this event
    // is fired, we will pause the music.
    TrackPlayer.addEventListener(Event.RemotePause, () => {
        // Pause the music
        TrackPlayer.pause()
    })

    // Add an event listener for the remote play event.
    // This event is fired when the user presses the play button
    // on their Bluetooth device or remote control. When this event
    // is fired, we will play the music.
    TrackPlayer.addEventListener(Event.RemotePlay, () => {
        // Play the music
        TrackPlayer.play()
    })

    // Add an event listener for the remote next event.
    // This event is fired when the user presses the next track button
    // on their Bluetooth device or remote control. When this event
    // is fired, we will skip to the next track in the queue.
    TrackPlayer.addEventListener(Event.RemoteNext, () => {
        // Skip to the next track in the queue
        TrackPlayer.skipToNext()
    })

    // Add an event listener for the remote previous event.
    // This event is fired when the user presses the previous track button
    // on their Bluetooth device or remote control. When this event
    // is fired, we will skip to the previous track in the queue.
    TrackPlayer.addEventListener(Event.RemotePrevious, () => {
        // Skip to the previous track in the queue
        TrackPlayer.skipToPrevious()
    })
}
