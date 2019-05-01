import React, {Component} from 'react';
// import Sound from 'react-sound';

class MusicPlayer extends Component 
{
    state =
    {
        
    }

    render()
    {
        return ( 
        <div>
            <audio id = 'myAudio'>
                <source src='./src/assets/Hedwigs Theme.mp3' type='audio/mp3'></source>
            </audio>
            <button onClick='playAudio()' type='button'>Play Audio</button>
        </div>
        );
    }
}

export default MusicPlayer;