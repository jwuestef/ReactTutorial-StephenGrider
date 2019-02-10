import axios from 'axios'



const KEY = 'AIzaSyAEdwthuUD4vyVm1ieA2tiF7vT_7EvbEHo'



export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})
