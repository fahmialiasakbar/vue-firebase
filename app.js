const app = Vue.createApp({
    // template: '<h2> My name is miaw </h2>'
    data() {
        return {
            title: 'Mencuri Kucing',
            author: 'Leonardo de Miawo',
            year: 2020,
            show_miaw: true,
        }
    },
    methods: {

        change_title(title) {
            this.title = title
        },
        show_hide() {
            this.show_miaw = !this.show_miaw
        }
    }
})

app.mount('#app')
