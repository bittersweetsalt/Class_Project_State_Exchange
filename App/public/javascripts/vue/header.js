var app = new Vue({
    el: '#header',
    data: {
        select: false,
        menu: false,
        categories: [],
        selectedCategory: "All",
        query: "",
    },
    methods: {
        changeMenuState: function(){
            this.menu = !this.menu;
        },
        changeSelectState: function() {
            this.select = ! this.select;
        },
        selected: function(event){
            this.selectedCategory = event.target.innerText;
        }
    },
    watch: {
        query: function (newQuery, oldQuery) {
            sessionStorage.setItem('query', newQuery);
        }
    },
    mounted() {
        const sessionQuery = sessionStorage.getItem('query');
        if (sessionQuery != null) {
            this.query = sessionQuery;
        }

        axios.post('/categories')
            .then(res => {
                res.data.map( category => {
                    this.categories.push(category.Categories)
                })
            })
            .catch( err => console.log(err))
    }
});