new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            alert: function(){
                alert('clicked')
            },
            keyDown: function(event) {
                this.value = event.target.value
            }
        }
    });