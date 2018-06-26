import React, {Component} from 'react';
import MusicList from '../components/MusicList'

class Top20List extends Component {
  render() {
    return (
      <div>
        <h1>iTunes top 20</h1>
        <MusicList />
      </div>
    )
  }
}

export default Top20List;
