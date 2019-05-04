import React from 'react';
import sound1 from "../assets/harryPotter.mp3";
import sound2 from "../assets/starWars.mp3";
import "../stylesheets/MusicPlayer.styles.css";
import AudioPlayer from "react-h5-audio-player";

let song;

class MusicPlayer extends React.Component {
    
    // song = sound1;
    
    // updateSource()
    // {
    //     var playMe = document.getElementById('playMe');
    //     playMe.src=sound1;
    //     playMe.onload();
    // }

    changeSong()
    {
        console.log("here");
        if(song === "sound1") 
        {
            console.log("something");
            song = "sound2";
        }
        else
        {
            console.log("other thing");
            song = "sound1";
        }
    }

    render() {
        return (
            <AudioPlayer
            src={sound1}
            onListen={this.changeSong}
            />
            // <div className="MusicPlayer">
            //     <button onClick={this.changeSong}>ACTIVATE</button>
            //     <br/>
            //     <br/>
            //     <audio id="myAudio" controls className={song === "sound1" ? "" : "hidden"}>
            //         <source src={sound1} type="audio/mp3" />
            //     </audio>
            //     <audio id="myAudio2" controls className={song === "sound2" ? "" : "hidden"}>
            //         <source src={sound2} type="audio/mp3" />
            //     </audio>
            // </div>
        );
    }
}



// function MusicPlayer ()
// {
//     return (
//         <div className="MusicPlayer">
//             <audio id="myAudio" controls>
//                 <source src={sound1} type="audio/mp3" />
//                 <source src={sound2} type="audio/mp3" />
//             </audio>

//             {/* <button onClick={}></button> */}
//         </div>
//     );
// }

export default MusicPlayer;