import React, { Component } from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


const musicStyle = {
    width: "500px",
    margin: "0 auto",
    textAlign: "center"
}

const playlist = [
    { name: '兰花草', src: 'https://siasky.net/_BkZ2cFPeVy-_yk88Y1BAH1M-fVlecHXba8d6lKRBJyEIQ' },
    { name: '重启', src: 'https://siasky.net/_A0R-M506ba_ivNCspb23JWAhjIfYXjGHg0htwgGzJto6g' },
]


class PlayList extends Component {
    state = {
        currentMusicIndex: 0,
    }

    handleClickPrevious = () => {
        this.setState((prevState) => ({
            currentMusicIndex: prevState.currentMusicIndex === 0 ? playlist.length - 1 : prevState.currentMusicIndex - 1,
        }))
    }

    handleClickNext = () => {
        this.setState((prevState) => ({
            currentMusicIndex: prevState.currentMusicIndex < playlist.length - 1 ? prevState.currentMusicIndex + 1 : 0,
        }))
    }

    render() {
        const { currentMusicIndex } = this.state
        return (
            <div style={musicStyle}>
                <p>currentMusicIndex: {currentMusicIndex}  {playlist[currentMusicIndex].name}</p>
                <AudioPlayer
                    autoPlayAfterSrcChange={true}
                    showSkipControls={true}
                    showJumpControls={false}
                    src={playlist[currentMusicIndex].src}
                    onClickPrevious={this.handleClickPrevious}
                    onClickNext={this.handleClickNext}
                    autoPlay={true}
                />
            </div>
        )
    }
}

export default PlayList