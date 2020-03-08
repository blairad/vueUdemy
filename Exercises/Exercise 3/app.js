new Vue({
    el: '#exercise',
    data: {
        value: 0
    },
    computed: {
        result: function () {
            return this.value >= 37 ? 'done' : 'not there yet'
        }
        // output: function () {
        //     return this.value >= 37 ? 'done' : 'not there yet'
        // }
    },
    watch: {
        // i had this as value: which means it would not reference the computed above and then reset the timer before it got to 37. changed it to result: and it only starts the timer when it gets to 37
        result: function () {
            let ls = this
            setTimeout(function() {
                ls.value = 0
            }, 3000);
        }


    },
    methods: {
        
    }
});