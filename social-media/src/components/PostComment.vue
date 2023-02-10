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
            <div class="card">
                <h5 class="card-header">Comments ({{getCount}})</h5>
                <div class="card-body">
                    <p class="card-text" v-for="comment in getComment" :key="comment">{{comment}}</p>
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
            comments: []
        }
    },
    created() {
        this.id = parseInt(this.$route.params.id)
    },
    methods: {
        getPost() {
            const posts = JSON.parse(localStorage.getItem('media-post'))
            this.post = posts.find(post => (post.id == this.id))
        },
        postComment() {
            this.comments = JSON.parse(localStorage.getItem(STORAGE_KEY))
            this.comments.push({
                comment: this.comment,
            });
            localStorage.setItem(STORAGE_KEY, JSON.stringify(this.comments));
            this.title = ''
            this.comment = ''
        },
    },
    mounted() {
        this.getPost();
    },
    computed: {
        getCount() {
            return JSON.parse(localStorage.getItem(STORAGE_KEY)).length
        },
        getComment() {
            return JSON.parse(localStorage.getItem(STORAGE_KEY)).map((post) => {
                return post.comment
            })
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
</style>
