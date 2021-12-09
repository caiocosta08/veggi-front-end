import api from '../services/api'

export const getAll = async () => {
    try {
        return await api.get('/costs')
    } catch (error) {
    }
}

export const add = async (data) => {
    try {
        return await api.post('/costs/add', data)
    } catch (error) {
    }
}

export const update = async (data) => {
    try {
        return await api.post('/costs/update', { id: data?.id, name: data?.name })
    } catch (error) {
    }
}

export const remove = async (id) => {
    try {
        return await api.post('/costs/delete', { id })
    } catch (error) {
    }
}