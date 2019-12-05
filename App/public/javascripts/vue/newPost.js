var app = new Vue({
    el: '#app',
    data: {
        formData: {
            title: '',
            desc: '',
            price: '',
            category: 'Category',
        },
        categories: [],
        photoFilePaths: [],
    },
    methods: {
        sendData: function () {
            //create new formData object and append all data entered by user
            const formDataRequest = new FormData();
            formDataRequest.append('title', this.formData.title)
            formDataRequest.append('desc', this.formData.desc)
            formDataRequest.append('price', this.formData.price)
            formDataRequest.append('category', this.formData.category)

            //get photo from image input and append to FormData object
            const photo = document.querySelector('.form__image--input').files[0];
            formDataRequest.append("photo", photo)

            //create unique post identifier
            const uuid = this.createUUID()

            axios.post(`/newpost/${uuid}`, formDataRequest)
                .then( res => {
                    console.log(res)
                })
                .catch(err => {
                    console.log(err);
                })

        },
        logout: function() {
            
            //alert("ji");
            localStorage.removeItem("__token");
            this.isLoggedin = false;


        },
        filesChange: function (fileList) {
            if (!fileList.length) return;

            //create a new formData object and append image
            const formData = new FormData();
            formData.append("photo", fileList[0]);

            //fake upload service to display image on frontend, code can be found in public/javascripts/upload.js
            upload(formData)
                .then(res => {
                    this.photoFilePaths = this.photoFilePaths.concat(res.url);
                })
                .catch(err => {
                    console.log("incompatible filetype uploaded");

                });
        },

        createUUID: function() {
            var dt = new Date().getTime();
            var uuid = 'xxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = (dt + Math.random() * 16) % 16 | 0;
                dt = Math.floor(dt / 16);
                return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
            });
            return uuid;

        }
    },
    mounted() {
        axios.post('/categories')
            .then(res => {
                res.data.map( category => {
                    this.categories.push(category.Categories)
                })
            })
            .catch( err => console.log(err))
    }
})

let upload = (formData) => {
    const photo = formData.get('photo')
    const promise = getImage(photo)
        .then(img => ({
            id: img,
            originalName: photo.name,
            fileName: photo.name,
            url: img
        }))
    return promise
}

let getImage = (file) => {
    return new Promise((resolve, reject) => {
        const fReader = new FileReader();
        const img = document.createElement('img');

        fReader.onload = () => {
            img.src = fReader.result;
            resolve(getBase64Image(img));
        }

        fReader.readAsDataURL(file);
    })
}

let getBase64Image = (img) => {
    const canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;

    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);

    const dataURL = canvas.toDataURL('image/png');

    return dataURL;
}