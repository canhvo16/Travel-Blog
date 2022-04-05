import Client from './'

export const GetPosts = async () => {
    try {
        const res = await Client.get('/posts')
        return res.data
    } catch (error) {
        throw error
    }
}

export const GetComments = async () => {
    try {
        const res = await Client.get('/comments/:id')
        return res.data
    } catch (error) {
        throw error
    }
}

export const CreatePost = async () => {
    try {
        await Client.post('/posts')
    } catch (error) {
        throw error
    }
}

export const CreateComment = async () => {
    try {
        await Client.post('/comments/:id')
    } catch (error) {
        throw error
    }
}