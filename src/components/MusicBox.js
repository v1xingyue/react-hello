import React from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


const musicStyle = {
    width: "500px",
    margin: "0 auto",
    textAlign: "center"
}

const MusicBox = () => {
    return (
        <div style={musicStyle}>
            <h3>Music Box</h3>
            <AudioPlayer
                autoPlay
                src="https://siasky.net/_A0R-M506ba_ivNCspb23JWAhjIfYXjGHg0htwgGzJto6g"
                onPlay={e => console.log("onPlay")}
            />
        </div>
    )
}


export default MusicBox
