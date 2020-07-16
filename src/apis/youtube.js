import axios from 'axios';
const KEY = 'AIzaSyBHCTFpmodcbiISfl2qEV5zs0G-ZhX1-Rs';
export default axios.create({
  baseURL:'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5 ,
    key: 'AIzaSyBHCTFpmodcbiISfl2qEV5zs0G-ZhX1-Rs',
  }
});
