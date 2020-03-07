new Vue({
    el: "#events",

    data: {
        counter: 0,
        doubles: 0,
        x: 0,
        y: 0
    },

    methods: {
        increase: function(){
            return this.counter++;
        },
        increaseArg: function(arg, event){
            return this.doubles += arg;
        },
        // increaseArg is the same as increase just demo with arguments
        updateCoordinates: function(event){
            this.x = event.clientX
            this.y = event.clientY
        },
        alertMe: function() {
            alert('alert')
        }
    }
})


