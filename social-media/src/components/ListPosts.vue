<template>
<div class="row">
  <div class="col-sm-2"></div>
  <div class="col-sm-8" id="heading"><h1>Social Media Posts</h1></div>
  <div class="col-sm-2"><button id="post-button" @click="$router.push('/create-post')">Add post</button>
  </div>
</div>
<div v-for="(post,index) in posts" :key="index">
<PostDetails :title="post.title" :content="post.content" :tag="post.tag" :id="post.id"/>
</div>

</template>
<script>
import PostDetails from './PostDetails.vue'
const STORAGE_KEY='media-post';
export default {
    components:{
        PostDetails
    },
    name: "SocialMediaPost",
    data() {
        return {
                posts:[]
        }
    },
    methods: {
        getPost() {
            this.posts=JSON.parse(localStorage.getItem(STORAGE_KEY))
       }
    },
    mounted(){
        this.getPost();
    } 
}
</script>
<style>
#post-button{
  margin-left: 20px;
  margin-top:30px;
}
#heading{
  text-align: center;
  color:navy;
    margin-top:15px;

}
</style>