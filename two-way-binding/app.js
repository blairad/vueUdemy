new Vue({
    el: "#two-way-binding",
    data: {
        counter: 0,
        secondCounter: 0
    },
    computed: {
        output: function(){
            console.log('comp');
            return this.counter > 5 ? "Greater than five!" : "Less than five!"
        }
    },
    watch: {
        //has to relate to something in the data
        counter: function(value){
            // if there is a callback function like this. a variable = this needs made as although this is usually available it doesn't work in the callback so needs defined
            let vm = this
            setTimeout(function() {
                vm.counter = 0; 
            }, 3000);
        }
    },
    methods: {
        result: function() {
            console.log('meth')
            return this.counter > 5 ? "Greater than five!" : "Less than five!"
        }
    }
    
})