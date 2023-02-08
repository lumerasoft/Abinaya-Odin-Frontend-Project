<template>
<div id="heading">
<h1>Social Media Posts</h1>
</div> 

<button id="post-button" @click="$router.push('/create-post')">Add post</button>

<!--<p>{{getPost()}}</p>-->
<div v-for="(post,index) in posts" :key="index">
<PostDetails :title="post.title" :content="post.content" :tag="post.tag"/>
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
}
#heading{
  text-align: center;
  color:navy;
}

</style>