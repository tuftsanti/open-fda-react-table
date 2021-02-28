import axios from 'axios'

const api = axios.create({
    // baseURL: 'http://localhost:3000', 
    // baseURL: 'https://incoming-oil-database.herokuapp.com',
    // baseURL: 'https://incoming-oil-database.herokuapp.com/api',
    baseURL: 'https://api.fda.gov/drug/event.json?limit=1',
    headers: {
        'content-type':'application/octet-stream',
        'x-rapidapi-host':'fda.gov',
        'x-rapidapi-key': process.env.RAPIDAPI_KEY
    },
})

// export const createOil = payload => api.post(`/oils`, payload)
export const Show = () => api.get(`/`)
// export const editOilById = (id, payload) => api.put(`/oils/${id}`, payload)
// export const deleteOilById = id => api.delete(`/oils/${id}`)
// export const getOilById = id => api.get(`/oils/${id}`)
// export const getData = api({
//         'method':'GET',
//         // 'url':'/query',
//         // 'params': {
//         //     'search':'parameter',
//         // },
//     })
// export const showData = api({
//     'method': 'POST',
//     // 'url':'/api',
//     // 'data': {
//     //     'item1':'data1',
//     //     'item2':'item2'
//     // }
// })

const routeFunctions = {
    // createOil,
    Show,
    // editOilById,
    // deleteOilById,
    // getOilById,
    // getData,
    // showData
}

export default routeFunctions
