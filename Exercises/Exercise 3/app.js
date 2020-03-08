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
        value: function (value) {
            let ls = this
            setTimeout(function() {
                ls.value = 0
            }, 3000);
        }

    },
    methods: {
        
    }
});