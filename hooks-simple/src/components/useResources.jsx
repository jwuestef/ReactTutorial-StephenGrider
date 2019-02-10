import { useState, useEffect } from 'react'
import axios from 'axios'



// useEffect hook allows us to use lifecycle-like methods... kind of a merge of componentDidMount & Update
const useResources = (resource) => {
    const [resources, setResources] = useState([])

    const fetchResources = async (resource) =>  {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
        setResources(response.data)
    }

    useEffect( () => {
        fetchResources(resource)
    }, [resource])   // If the value in the [] is different each time it gets called, then it will run the arrow function... leave the whole [] off for it to be called every single re-render

    return resources
}



export default useResources
