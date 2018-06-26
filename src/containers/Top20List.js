import React, {Component} from 'react';
import MusicList from '../components/MusicList'
import './Top20List.css'

class Top20List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentWillMount() {
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json'
    fetch(url).then(res => res.json()).then(data => this.setState({data: data.feed.entry}));
  }

  render() {
    return (
      <div id='top-20'>
        <h1>iTunes top 20</h1>
        <MusicList data={this.state.data}/>
      </div>
    )
  }
}

export default Top20List;
