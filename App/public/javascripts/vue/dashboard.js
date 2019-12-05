var app = new Vue({
    el: '#app',
    data: {
        user: 'testUser',
        posts: [],
        messages: ['Message1', 'Message2', 'Message3']
    },
    methods: {
        getPosts: function () {
            axios.post('/search_query', {query: ""})
            .then(res => {
                this.posts = res.data
            })
        },
        getMessages: function () {
            return app.messages;
        },
        deletePosts: function () {
            //delete post from users posts
        },
        makePost: function () {
            //create post from users dashboard
        },
        respond: function () {
            //respond to a users message
        }
    }
})