<template>
<div class="row" id="card-adjustment">
    <div class="col-sm-2"></div>
    <div class="col-sm-8">
        <div class="card">
            <div class="card-body" id="card-design">
                <h2 class="card-title">{{post.title}}</h2>
                <p class="card-text">{{post.content}}</p>
                <b class="card-text">Tag: @{{post.tag}}</b>
                <br />
            </div>
        </div>
    </div>
    <div class="col-sm-2"></div>
</div>

<div>
    <div class="row" id="comment-box">
        <div class="col-sm-2"></div>
        <div class="col-sm-6">
            <form>
                <div class="form-group">
                    <input type="text" class="form-control" id="comment" placeholder="comment here" v-model="postComment.comment">
                </div>
                <br />
                <br />
            </form>
        </div>
        <div class="col-sm-2">
            <button v-on:click="postingComment" type="button">comment</button>
        </div>
        <div class="col-sm-2"></div>
    </div>
</div>

<div>
    <div class="row" id="comment-box">
        <div class="col-sm-2"></div>
        <div class="col-sm-8">
            <div class="card" id="comment-box-list">
                <h5 class="card-header">Comments ({{commentCount}})</h5>
                <div class="card-body">
                    <div v-bind:key="post.id" v-for="post in currentComment">
                        <h5>{{post.comment}}</h5>
                    </div>

                </div>
            </div>

        </div>
        <div class="col-sm-2"></div>
    </div>
</div>
</template>

<script>
const STORAGE_KEY = 'comment';
export default {
    data() {
        return {
            post: '',
            postComment: {
                id: this.$route.params.id,
                comment: ''
            },
            currentComment: (JSON.parse(localStorage.getItem(STORAGE_KEY))).filter(post_comment => (post_comment.id == this.$route.params.id)),
            otherComment: (JSON.parse(localStorage.getItem(STORAGE_KEY))).filter(post_comment => (post_comment.id != this.$route.params.id)),

        }
    },
    methods: {
        getPost() {
            this.id = parseInt(this.$route.params.id)
            const posts = JSON.parse(localStorage.getItem('media-post'))
            this.post = posts.find(post => (post.id == this.id))
        },
        postingComment() {
            this.currentComment.push(this.postComment);
            const result = this.currentComment.concat(this.otherComment);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(result));
            this.postComment = {
                id: parseInt(this.$route.params.id),
                comment: ''
            }
        }
    },
    mounted() {
        this.getPost();
    },
    computed: {
        commentCount() {
            return this.currentComment.length
        }
    }
}
</script>

<style>
#card-design {
    background-color: #0B0873;
    border: 1px solid;
    box-shadow: 5px 7px #577BAD;
    color: #F5EAF7;
}

#card-adjustment {
    margin-top: 20px;
}

#comment-box {
    margin-top: 25px;
}

#comment-box-list {
    border: 5px solid navy;
}
</style>
