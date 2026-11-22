import { createStore } from 'vuex'
import postsData from '../data/posts.json'

export default createStore({
  state: {//copies all of the post fields and adds likes: 0
    posts: postsData.map(p => ({ ...p, likes: 0 }))
  },
  getters: {
    allPosts: state => state.posts,//list of posts
    postById: state => id => state.posts.find(p => p.id === id)//return post by id
  },
  mutations: {
    LIKE_POST(state, id) {
      const post = state.posts.find(p => p.id === id)// find post id liked 
      if (post) post.likes++ //add like
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
