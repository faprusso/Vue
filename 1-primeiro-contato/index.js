const app = Vue.createApp({
    data() {
        return {
            name: 'OneBitCode',
            count: 0
        }
    },
    methods: {
        increaseCount() {
            this.count++
        }
    }
})

app.mount('#app')