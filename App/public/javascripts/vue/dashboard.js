var app = new Vue({
    el: '#app',
    data: {
        user: 'testUser',
        posts: [],
        messages: [],
        postClicked: true,
        messageClicked: false
    },
    methods: {
        postClick: function(){
            this.postClicked = true
            this.messageClicked = false
        },
        messageClick: function(){
            this.messageClicked = true
            this.postClicked = false
        }
    },
    mounted() {
        axios.post('/search_query', {query: ""})
            .then(res => {
                this.posts = res.data
            })
    }
})