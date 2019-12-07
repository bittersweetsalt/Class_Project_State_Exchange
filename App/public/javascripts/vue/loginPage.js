var app = new Vue({
    el: '#app',
    data: {
        username: '',
        student_id: '',
        password: ''
    },
    methods: {
        sendData: function () {
            axios.post('/auth/login?username=' + this.username + '&password=' + this.password
                /*{
                    email: app.email,
                    password: app.password
                }*/
                )
            .then(function (response) {
                
                //alert(response.data.token);
                localStorage.setItem("__token", response.data.token); //response.data.success.token
                //alert( localStorage.getItem("__token") );
                window.location.href = "/"
            })
            .catch(function (error) {
                // handle error
                //console.log(error);
                app.message = "Invalid credentias!";
            })
            .finally(function () {
                // always executed
            });
          
        }
    }
})