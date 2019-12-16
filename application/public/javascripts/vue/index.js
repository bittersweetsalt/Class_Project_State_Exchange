
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
        },
        contactSeller: function(_id) {
            if(localStorage.getItem("__token") != null) {
                const headers = {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem("__token")
                        }

                axios.post('/messaging-index/create',
                    {id: _id},
                    {headers: headers})
                .then( res => {
                    window.location.href = `/contact/edit/${_id}`;
                })

            } else {
                alert("Please login first!")
            }

        }
    },
    mounted() {
        axios.post('/search_query', {query: "", category: ""})
            .then(res => {
                this.posts = res.data
            })
    }
});