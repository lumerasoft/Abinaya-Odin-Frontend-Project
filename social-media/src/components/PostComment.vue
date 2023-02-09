<template>
<div>
    <div class="row">
        <div class="col-sm-2"></div>
        <div class="col-sm-8">
            <form>
                <div class="form-group">
                    <label>Post title</label>
                    <input type="text" class="form-control" id="title" placeholder="post title" v-model="title">
                </div>
                <div class="form-group">
                    <label>Comment</label>
                    <input type="text" class="form-control" id="comment" placeholder="comment here" v-model="comment">
                </div>
                <br />
                <br />
                <button v-on:click="postComment" type="button">comment</button>
            </form>
        </div>
        <div class="col-sm-2"></div>   
    </div>
</div>
<br/>
<br/>
<p>Comments: {{getCount}}</p>
<ul>
    <li v-for="comment in getComment" :key="comment">{{comment}}</li>
</ul>
</template>

<script>

const STORAGE_KEY = 'comment';
export default {
    data() {
        return {
            title: '',
            comment: '',
            comments: []
        }
    },
    methods: {
        postComment() {
            this.comments = JSON.parse(localStorage.getItem(STORAGE_KEY))
            this.comments.push({
                title: this.title,
                comment: this.comment,
            });
            localStorage.setItem(STORAGE_KEY, JSON.stringify(this.comments));
            this.title = ''
            this.comment = ''
        },
    },
    computed:{
            getCount(){
                return JSON.parse(localStorage.getItem(STORAGE_KEY)).length
            },
            getComment() {
            return JSON.parse(localStorage.getItem(STORAGE_KEY)).map((post)=>{
                    return post.title+" "+post.comment
            })
        }
    }
}
</script>

<style>
</style>
