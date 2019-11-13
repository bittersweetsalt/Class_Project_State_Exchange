var app = new Vue({
    el: '#app',
    data: {
        posts: [],
        query: "",
        recentPostsLength: 0
    },
    methods: {
        sendQuery: function(event){
            axios.get('http://ec2-18-224-39-11.us-east-2.compute.amazonaws.com:3001/testmysql', {
                query: this.query
            })
            // .then(res => {index.posts = res.data})
        }
    },
    mounted() {
        axios.get('http://ec2-18-224-39-11.us-east-2.compute.amazonaws.com:3001/testmysql')
        .then(res => {
            this.posts = res.data;
        })
    }
})