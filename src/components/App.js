import React from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component{
  state={videos:[],
         selectedVideo:null
       };

  componentDidMount(){
    this.onSubmit('buildings');
  }
  
   onSubmit=async val=>{
    const r = await axios.get('https://www.googleapis.com/youtube/v3/search',{
      params: {
        part: 'snippet',
        maxResults: 5 ,
        key: 'AIzaSyBHCTFpmodcbiISfl2qEV5zs0G-ZhX1-Rs',
        q: val
      }
    })
    this.setState({
      videos : r.data.items,
      selectedVideo:r.data.items[0]
    });
  };

  onVideoSelect = (video)=>{
    console.log('from the app', video);
    this.setState({selectedVideo:video});
  }
  render(){
    return (
      <div className="ui container">
        <SearchBar smthg={this.onSubmit}/>
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo}/>
            </div>
            <div className="five wide column">
              <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
