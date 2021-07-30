import api from '../services/api'

export const getAll = async () => {
    try {
        return await api.get('/tasks')
    } catch (error) {
    }
}

export const getAllByIdUser = async (id_user) => {
    try {
        return await api.post('/tasks/get_all_by_id_user', { id_user })
    } catch (error) {
    }
}

export const add = async (data) => {
    try {
        return await api.post('/tasks/add', data)
    } catch (error) {
    }
}

export const update = async (data) => {
    try {
        return await api.post('/tasks/update', { id: data?.id, state: data?.state, id_user: data?.id_user, description: data?.description })
    } catch (error) {
    }
}

export const remove = async (id_task) => {
    try {
        return await api.post('/tasks/delete', { id_task })
    } catch (error) {
    }
}