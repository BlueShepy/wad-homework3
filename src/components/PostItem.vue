<template>
  <article v-if="post" class="post">
    <header class="post-header">
      <div class="post-user">
        <img
          class="profile-picture"
          :src="imageUrl('res/profile_pic.png')"
          alt="profile picture"
        >
        <strong>{{ post.author }}</strong>
      </div>
      <time>{{ post.date }}</time>
    </header>

    <img
      v-if="post.image"
      class="post-image"
      :src="imageUrl(post.image)"
      alt="post image"
    >

    <p>{{ post.text }}</p>

    <div class="post-likes">
      <button class="like-btn" @click="likePost(post.id)">👍</button>
      <span>{{ post.likes }} likes</span>
    </div>
  </article>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'PostItem',

  props: {
    postId: {
      type: [String, Number],
      required: true
    }
  },

  computed: {
    post() {
      return this.$store.getters.postById(this.postId)
    }
  },

  methods: {
    ...mapActions(['likePost']),

    imageUrl(path) {
      if (!path) return ''

      if (/^https?:\/\//i.test(path)) {
        return path
      }

      const filename = path.split('/').pop()

      return `${process.env.BASE_URL}res/${filename}`
    }
  }
}
</script>

<style scoped>
.post {
  width: 100%;
  max-width: 500px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  box-sizing: border-box;
  text-align: left;
}

.post-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.post-user {
  display: flex;
  align-items: center;
  gap: 8px;
}

.profile-picture {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
}

.post-image {
  width: 100%;
  height: auto;
  border-radius: 4px;
}

p {
  margin: 12px 0 8px;
}

.post-likes {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.like-btn {
  padding: 4px 10px;
  border: none;
  border-radius: 6px;
  background-color: #e6e9ef;
  font-size: 18px;
  cursor: pointer;
}

.like-btn:hover {
  background-color: #d0d6e0;
}
</style>