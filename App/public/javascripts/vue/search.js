var app = new Vue({
    el: '#app',
    data: {
        posts: [],
        showing: "",
        query: "",
        selectedCategory: ""
    },
    methods: {
        trimComment: function (post) {
            const length = 200;
            let comment = post;

            if (post.length > length) {
                comment = post.substring(0, length) + "...";
            }

            return comment;
        }
    },
    mounted() {
        const sessionQuery = sessionStorage.getItem('query');
        const sessionCategory = sessionStorage.getItem('category');
  
        if (sessionQuery != null) {
            this.query = sessionQuery;
        }
        if (sessionCategory != null) {
            this.selectedCategory = sessionCategory;
        }
        axios.post('/search_query', {
                query: this.query,
                category: this.selectedCategory
            })
            .then(res => {
                console.log(res.data)
                this.posts = res.data
            })

    }
})