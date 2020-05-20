import React from 'react';
import ReactPlayer from 'react-player';

const Player = (props) => {
    return (
        <ReactPlayer
          className='react-player'
          url={props.url}
          controls
          width='100%'
          height='100%'
        />
    )
}

export default Player;
