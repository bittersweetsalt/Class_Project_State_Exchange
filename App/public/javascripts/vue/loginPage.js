var app = new Vue({
    el: '#app',
    data: {
        email: '',
        password: '',
        message: ''
    },
    methods: {
        sendData: function () {
            axios.post('/auth/login?email=' + this.email + '&password=' + this.password )
            .then(function (response) {
                localStorage.setItem("__token", response.data.token); //response.data.success.token
                window.location.href = "/";
                console.log(repsonse);
            
            })
            .catch(function (error) {
            
                app.message = "Invalid credentias!";
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
          
        }
    }
})