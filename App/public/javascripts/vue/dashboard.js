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
        postClick: function () {
            this.postClicked = true
            this.messageClicked = false
        },
        messageClick: function () {
            this.messageClicked = true
            this.postClicked = false
            this.messages = []

            this.posts.map( post => {
                axios.post("/messaging/index", { MessagesIndexID: post.ID}, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem("__token")
                    }
                })
                    .then(res => {
                        res.data.map( message => {
                            console.log(message)
                            this.messages.push(message)
                        })
                    })
            })
        }
    },
    mounted() {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("__token")
        }

        axios.post('/postings', {}, {
                headers: headers
            })
            .then((response) => {
                this.posts = response.data
            })
            .catch((e) => {
                console.log(e)
            })
    }
})