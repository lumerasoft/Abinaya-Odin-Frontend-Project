<template>
<div id="heading">
<h1>Create Post</h1>
</div> 
<div class="row">
  <div class="col-sm-2"></div>
  <div class="col-sm-8" id="form-box">
  <form>
    <div class="form-group">
        <label>Title</label>
        <input type="text" class="form-control" id="title" placeholder="post title" v-model="title">
    </div>
    <div class="form-group">
     <label>Content</label>
        <textarea class="form-control" id="content" rows="3" placeholder="Enter the content of post" v-model="content"></textarea>
    </div>
    <div class="form-group">
        <label>Tag</label>
        <input type="text" class="form-control" id="tag" placeholder="tag someone" v-model="tag">
    </div>
    <br />
    <br />
    <button v-on:click="post" type="button">Post</button>
     <br />
    <br />
    </form>
  </div>
  <div class="col-sm-2"></div>
</div>
</template>
<script>
const STORAGE_KEY='media-post';
export default {
    name: "SocialMediaPost",
    data() {
        return {
                title: '',
                content: '',
                tag: '',
                posts:[]
        }
    },
    
    methods: {
        post() {
            this.posts=JSON.parse(localStorage.getItem(STORAGE_KEY))
            this.posts.push({title: this.title,content: this.content, tag: this.tag, id: this.posts.length });
            localStorage.setItem(STORAGE_KEY, JSON.stringify(this.posts));
            this.title=''
            this.content=''
            this.tag=''
            this.$router.push('/post')
        }
    }
}
</script>
<style>
#heading{
  text-align: center;
  color:navy;
}
#form-box{
    border: 10px solid navy;
}
</style>