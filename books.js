const app = Vue.createApp({
    data() {
        return {
            store: 'Demak Book Collection',
            url: 'https://www.tokopedia.com/demakstore',
            books: [
                { title: 'Menjadi Superman', author: 'MurzCat', image: 'img/panda.jpg', is_best_seller: false },
                { title: 'Kucing yang baik', author: 'Tanggon', image: 'img/miaw.jpg', is_best_seller: true },
                { title: 'Langkah mencuri ikan', author: 'Fahmi', image: 'img/anjing.jpg', is_best_seller: false },
            ]
        }
    },
    methods: {
        toogle_best_seller(book) {
            book.is_best_seller = !book.is_best_seller
        }
    }
});

app.mount('#bookslist')