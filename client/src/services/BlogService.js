import Client from './'

export const GetPosts = async () => {
  try {
    const res = await Client.get('/getAllPost')
    return res.data.posts
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

// export const CreatePost = async () => {
//   try {
//     await Client.post('/posts', req.body)
//   } catch (error) {
//     throw error
//   }
// }

// export const CreateComment = async () => {
//   try {
//     await Client.post('/comments/:id', req.body)
//   } catch (error) {
//     throw error
//   }
// }
