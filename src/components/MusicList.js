import React, {Component} from 'react';
import MusicEntry from './MusicEntry';
import './MusicList.css'

class MusicList extends Component {

  render() {
    if (!this.props.data) return null;
    const list = this.props.data.map((song, index) => (
      <div className='list-item'>
      <MusicEntry song={song} pos={index+1} key={song.id.attributes['im:id']}/>
      </div>
    ))
    return(
      <div id='list'>{list}</div>
    )
  }
}

export default MusicList;
