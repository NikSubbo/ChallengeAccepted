import React, { Component } from 'react';
import ReactPlayer from 'react-player';

class Player extends Component {
  render() {
    return (
        <ReactPlayer
          className='react-player'
          url='https://vimeo.com/78059989'
          controls
          width='100%'
          height='100%'
        />
    )
  }
}

export default Player;
