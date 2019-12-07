var app = new Vue({
    el: '#app',
    data: {
        posts: [],
        radius: 50,
        isLoggedin: false
    },
    methods: {
        logout: function () {

            //alert("ji");
            localStorage.removeItem("__token");
            this.isLoggedin = false;
        }
    },
    mounted() {

        //alert( localStorage.getItem("__token") + " --- " + this.isLoggedin );
        if (localStorage.getItem("__token") != null) {
            this.isLoggedin = true;
            //alert("logged in");
        }

        const sessionQuery = sessionStorage.getItem('query');
        if (sessionQuery != null) {
            this.query = sessionQuery;
        }

        axios.get('http://ec2-18-224-39-11.us-east-2.compute.amazonaws.com:3001/testmysql')
            .then(res => {
                this.posts = res.data;
            })
    }
});