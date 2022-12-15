const app = Vue.createApp({
    data() {
        return {
            store: 'Demak Book Collection',
            url: 'https://www.tokopedia.com/demakstore',
            books: [
                { title: 'Menjadi Superman', author: 'MurzCat', image: 'img/panda.jpg' },
                { title: 'Kucing yang baik', author: 'Tanggon', image: 'img/miaw.jpg' },
                { title: 'Langkah mencuri ikan', author: 'Fahmi', image: 'img/anjing.jpg' },
            ]
        }
    },
    methods: {

    }
});

app.mount('#bookslist')