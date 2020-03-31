new Vue ({
    el: "#app",
    data: {
        title: "The VueJS Instance"
    },
    beforeCreate: function(){
        console.log('beforeCreated()')
    },
    created: function(){
        console.log('created()')
    },
    beforeMount: function() {
        console.log('beforeMounted()')
    },
    mounted: function() {
        console.log('Mounted()')
    },
    beforeUpdat: function() {
        console.log('beforeUpdated()')
    },
    updated: function() {
        console.log('updated()')
    },
    beforeDestroy: function() {
        console.log('beforeDestroyed()')
    },
    destroyed: function(){
        console.log('destroyed()')
    },
    methods: {
        destroy: function(){
            this.$destroy()
        }
    }
})

