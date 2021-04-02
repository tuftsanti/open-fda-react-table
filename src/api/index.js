import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000' 
    // baseURL: 'https://incoming-oil-database.herokuapp.com',
    // baseURL: 'https://incoming-oil-database.herokuapp.com/api',
})

export const createOil = payload => api.post(`/oils`, payload)
export const getAllOils = () => api.get(`/oils`)
export const editOilById = (id, payload) => api.put(`/oils/${id}`, payload)
export const deleteOilById = id => api.delete(`/oils/${id}`)
export const getOilById = id => api.get(`/oils/${id}`)

const routeFunctions = {
    createOil,
    getAllOils,
    editOilById,
    deleteOilById,
    getOilById,
}

export default routeFunctions
