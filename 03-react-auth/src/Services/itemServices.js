//* 1) importar axios
import axios from 'axios'

//* 2) indicar la ruta o el endpoint 
const BASE_URL = 'http://localhost:3000'


const getAllItemsService = () => axios.get(`${BASE_URL}/items`)

const getOneItemService = (id) => axios.get(`${BASE_URL}/items/${id}`)

const createItemService = (data, jwtToken) => axios.post (`${BASE_URL}/items`,  data, { headers: { Authorization: `Bearer ${jwtToken}`}})

 export {
        getAllItemsService,
        getOneItemService,
        createItemService
     }