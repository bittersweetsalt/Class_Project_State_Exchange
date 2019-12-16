
var app = new Vue({
    el: '#app',
    data: {
        post: {
            image: '',
            id: '',
            categroy: '',
            name: '',
            price: '',
            email: '',
            comment: ''
        },
        isLoggedin: false
    },
    methods: {
        logout: function () {
            
            ç
            this.isLoggedin = false;
        },
        
    },
    mounted() {
        
        //alert( localStorage.getItem("__token") + " --- " + this.isLoggedin );
        if (localStorage.getItem("__token") != null) {
            this.isLoggedin = true;
            //alert("logged in");
        }

        var url = window.location.href;
        var split = url.split('/');
        
        axios.get('/post/' + split[split.length - 1])
        .then(res => {
            console.log(res.data[0])
            this.post.id = res.data[0].ID
            this.post.name = res.data[0].Name
            this.post.price = res.data[0].Price
            this.post.image = res.data[0].image_name
            this.post.categroy = res.data[0].Category
            this.post.email = res.data[0].email
            this.post.comment = res.data[0].Comment
            
        })
    }
});