import { createStore } from 'vuex'
import posts from './modules/posts'
export default createStore({
  state: {
    user: {}
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    SOCKET_ONOPEN(state, event)  {
      console.log(event);
    },
    SOCKET_ONMESSAGE(state, data)  {
      const obj = data.data
      switch (data.event) {
        case "setPosts":
          this.commit('posts/setPosts', obj.posts)
          break
        case "newPost":
          this.commit('posts/addPost', obj.post)
          break
      }
    },
  },
  actions: {
  },
  modules: {
    posts
  }
})
