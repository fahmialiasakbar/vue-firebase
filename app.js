const app = Vue.createApp({
    // template: '<h2> My name is miaw </h2>'
    data() {
        return {
            title: 'Mencuri Kucing',
            author: 'Leonardo de Miawo',
            year: 2020,
            show_miaw: true,
            x: 0,
            y: 0,
        }
    },
    methods: {
        change_title(title) {
            this.title = title
        },
        show_hide() {
            this.show_miaw = !this.show_miaw
        },
        handle_event(e, data) {
            console.log(e, e.type)
            console.log("data: " + data)
        },
        handle_mouse_move(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }
})

app.mount('#app')
