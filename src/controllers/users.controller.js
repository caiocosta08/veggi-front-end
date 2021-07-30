import api from '../services/api'

export const getAll = async () => {
    try {
        return await api.get('/users')
    } catch (error) {
    }
}

export const add = async (data) => {
    try {
        return await api.post('/users/add', { name: data?.name })
    } catch (error) {
    }
}

export const update = async (data) => {
    try {
        return await api.post('/users/update', { id: data?.id, name: data?.name })
    } catch (error) {
    }
}

export const remove = async (id) => {
    try {
        return await api.post('/users/delete', { id })
    } catch (error) {
    }
}