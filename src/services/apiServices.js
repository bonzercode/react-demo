import axios from 'axios'

const apiServices=axios.create({
    baseURL:"http://localhost:3006/",
})
export default apiServices;