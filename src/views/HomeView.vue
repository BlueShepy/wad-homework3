<template>
  <div class="home">
    <section class="posts">
      <PostItem
        v-for="post in allPosts"
        :key="post.id"
        :post-id="post.id"
      />
      <button class="reset-btn" @click="resetLikes">Reset likes</button>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import PostItem from '@/components/PostItem.vue'

export default {
  name: 'HomeView',
  components: { PostItem },
  computed: {
    ...mapGetters(['allPosts'])
  },
  methods: {
    ...mapActions(['resetLikes'])
  }
}
</script>

<style scoped>
.posts {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
.reset-btn {
  padding: 8px 20px;
  border: none;
  border-radius: 20px;
  background-color: #263449;
  color: white;
  font-weight: bold;
  cursor: pointer;
}
.reset-btn:hover {
  background-color: #3a4d6b;
}

.posts {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 100%;
}
</style>