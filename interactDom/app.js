new Vue({
    el: "#app",
    data: {
        title: "hello World",
        link: "https://www.udemy.com/",
        finishedLink: '<a href="https://www.udemy.com/">Udemy</a>',
    },
    methods: {
        sayHello: function(){
            this.title = "hello"
            return this.title;
        }
    }
})