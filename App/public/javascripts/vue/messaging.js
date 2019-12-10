var app = new Vue({
    el: '#app',
    data: {
        post: {
            photo: '',
            title: '',
            price: '',
            date_posted: '',
            author: '',
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
                    }, 
                    { headers: headers }

                )
                .then(function (response) {
                    location.reload();
                })
                .catch(function (error) {

                })
                .finally(function () {
                    // always executed
                });

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
        axios.get('/post' + split[split.length - 2])
            .then(function (response) {

                console.log(response.data[0]);

                app.post.id = response.data[0]['ID'];
                //this.post.photo = response.data[0]['photo'];
                app.post.title = response.data[0]['Title'];
                app.post.price = response.data[0]['Price'];
                app.post.date_posted = response.data[0]['date_posted'].replace("T", " ").replace("Z",
                    "").replace(".000", "");
                app.post.author = response.data[0]['name'];
            })
            .catch(function (error) {

            })
            .finally(function () {
                // always executed
            });

        //######### fetch previous messages
        axios.post('messaging/index', {
                MessagesIndexID: split[split.length - 1]
            }, {
                headers: headers
            })
            .then(function (response) {

                for (looper = 0; looper < response.data.length; looper++) {

                    var msg = {};
                    msg.from = response.data[looper].name;
                    msg.message = response.data[looper].Message;
                    msg.date = response.data[looper].Timestamp.replace("T", " ").replace("Z", "")
                        .replace(".000", "");
                    app.messages.push(msg);
                }

            })
            .catch(function (error) {

            })
            .finally(function () {
                // always executed
            });

    }
})