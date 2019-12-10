var app = new Vue({
    el: '#app',
    data: {
        post: {
            image_name: '',
            title: '',
            description: '',
            price: '',
            date_posted: '',
            author: '',
            id: 0
        },

        messages: [],
        new_message: ''
    },
    methods: {
        sendData: function () {
            if (this.new_message == "") return;

            var url = window.location.href;
            var split = url.split('/');

            const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("__token")
            }

            axios.post('/messaging/store', {
                        MessagesIndexID: split[split.length - 1],
                        Message: this.new_message
                    }, {
                        headers: headers
                    }

                )
                .then(function (response) {
                    location.reload();
                })
                .catch((e) => {
                    console.log(e)
                })

        }
    },
    mounted() {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("__token")
        }
        var url = window.location.href;
        var split = url.split('/');

        //######### fetch post details
        axios.get('/post/' + split[split.length - 2])
            .then((res) => {
                this.post.id = res.data[0].ID;
                this.post.title = res.data[0].Name;
                this.post.description = res.data[0].Comment;
                this.post.price = res.data[0].Price;
                this.post.image_name = res.data[0].image_name
                this.post.date_posted = res.data[0].date_posted.replace("T", " ").replace("Z",
                    "").replace(".000", "");

                this.post.author = res.data[0].name;
            })
            .catch((e) => {
                console.log(e)
            })


        //fetch previous messages
        axios.post('/messaging/index', {
                MessagesIndexID: split[split.length - 2]
            }, {
                headers: headers
            })
            .then(res => {
                console.log(res.data)
                this.messages = res.data
            })
            .catch((e) => {
                console.log(e)
            })

    }
})