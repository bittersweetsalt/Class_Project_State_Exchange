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
        },
        selectedCategory: function (newCategory, oldCategory){
            sessionStorage.setItem('category', newCategory);
        }
    },
    mounted() {
        const sessionQuery = sessionStorage.getItem('query');
        const sessionCategory = sessionStorage.getItem('category');
        if (sessionQuery != null) {
            this.query = sessionQuery;
        }
        if (sessionCategory != null) {
            this.selectedCategory = sessionCategory;
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