var app = new Vue({
    el: '#app',
    data: {
        posts: []
    },
    methods: {
        trimComment: function (post) {
            const length = 50;
            let comment = post;

            if (post.length > length) {
                comment = post.substring(0, length) + "...";
            }

            return comment;
        },
        trimTitle: function (post) {
            const length = 15;
            let title = post;

            if (post.length > length) {
                title = post.substring(0, length) + "...";
            }

            return title;
        }
    },
    mounted() {
        axios.post('/search_query', {query: ""})
            .then(res => {
                this.posts = res.data
            })
    }

});