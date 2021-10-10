import React from 'react'
import SpotifyPlayer from "react-spotify-web-playback"
import { useState, useEffect } from 'react'

export default function Player({ accessToken, trackUri }) {
    //The following  const and useEffect allow the app to automatically play a track upon
    //selection instead of having to manually click the play button.
    const [play, setPlay] = useState(false)

    useEffect(() => setPlay(true), [trackUri])

    if (!accessToken) return null
    return (
        <SpotifyPlayer 
        token={accessToken} 
        showSaveIcon
        callback={state => {
            if (!state.isPlaying) setPlay(false)
        }}
        play={play}
        uris={trackUri ? [trackUri] : []}
        />
    )
}
