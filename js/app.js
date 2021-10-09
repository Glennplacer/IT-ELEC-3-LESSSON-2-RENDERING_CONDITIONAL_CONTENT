const app = Vue.createApp({
    data() {
        return {
            enteredTaskValue: '',
            tasks: [],
            MyButton: true
        };
    },
    methods: {
       addTask() {
           this.tasks.push(this.enteredTaskValue);
       },
       toggle() {
           this.MyButton = !this.MyButton
       }
    }
});

app.mount('#assignment');