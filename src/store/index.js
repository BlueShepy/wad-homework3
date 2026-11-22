import { createStore } from 'vuex'
import postsData from '../data/posts.json'

export default createStore({
  state: {//copies all of the post's fields and adds likes: 0
    posts: postsData.map(p => ({ ...p, likes: 0 }))
  },
  getters: {
    allPosts: state => state.posts,
    postById: state => id => state.posts.find(p => p.id === id)
  },
  mutations: {
    LIKE_POST(state, id) {
      const post = state.posts.find(p => p.id === id)
      if (post) post.likes++
    },
    RESET_LIKES(state) {
      state.posts.forEach(p => { p.likes = 0 })
    }
  },
  actions: {
    likePost({ commit }, id) {
      commit('LIKE_POST', id)
    },
    resetLikes({ commit }) {
      commit('RESET_LIKES')
    }
  },
  modules: {
  }
})
