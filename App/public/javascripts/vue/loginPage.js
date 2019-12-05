var app = new Vue({
    el: '#app',
    data: {
        username: '',
        student_id: '',
        password: ''
    },
    methods: {
        sendData: function () {
            axios.get('http://ec2-18-224-39-11.us-east-2.compute.amazonaws.com:3001/testmysql',
                formData = {
                    post_username: app.username,
                    post_password: app.password,
                    post_student_id: app.student_id
                });
            console.log(formData);
        }
    }
})