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
                    <input type="text" class="form-control" id="comment" placeholder="comment here" v-model="comment">
                </div>
                <br />
                <br />
            </form>
        </div>
        <div class="col-sm-2">
            <button v-on:click="postComment" type="button">comment</button>
        </div>
        <div class="col-sm-2"></div>
    </div>
</div>

<div>
    <div class="row" id="comment-box">
        <div class="col-sm-2"></div>
        <div class="col-sm-8">
            <div class="card" id="comment-box-list">
                <h5 class="card-header">Comments ({{getCount}})</h5>
                <div class="card-body">
                    <div v-bind:key="post.id" v-for="post in post_comment">
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
            id: '',
            post: '',
            comment: '',
            post_comment: [],
            comments: []
        }
    },
    methods: {
        getPost() {
            this.id = parseInt(this.$route.params.id)
            const posts = JSON.parse(localStorage.getItem('media-post'))
            this.post = posts.find(post => (post.id == this.id))
        },
        postComment() {
            this.comments = JSON.parse(localStorage.getItem(STORAGE_KEY))
            this.comments.push({
                comment: this.comment,
                id: this.id
            });
            localStorage.setItem(STORAGE_KEY, JSON.stringify(this.comments));
            this.comment = ''
            this.id = ''
        },
        getComment() {
            this.id = parseInt(this.$route.params.id)
            const comments = JSON.parse(localStorage.getItem(STORAGE_KEY))
            this.post_comment = comments.filter(post_comment => (post_comment.id == this.id))
        }
    },
    mounted() {
        this.getPost();
        this.getComment();
    },
    computed: {
        getCount() {
            const comment_count = JSON.parse(localStorage.getItem(STORAGE_KEY))
            let count = comment_count.filter(post_comment => (post_comment.id == this.id)).length
            return count
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
