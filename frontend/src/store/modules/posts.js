export default {
  namespaced: true,
  state: {
    posts: []
  },
  mutations: {
    addPost(state, data) {
      state.posts.push(data)
    },
    setPosts(state, data) {
      state.posts = data
    }
  }
}