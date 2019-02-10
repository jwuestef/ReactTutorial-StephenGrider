import axios from 'axios'


export default axios.create({
    headers: {
        Authorization: 'Client-ID 9a7d61d51e155686f96dc0eccc2b5e36ac1dab5b34a450e3d84240b076d68701'    
    },
    baseURL: 'https://api.unsplash.com'
})
