new Vue ({
    el: "#app",
    data: {
        title: "The VueJS Instance"
    },
    beforeCreated: function(){
        console.log('beforeCreated()')
    },
    created: function(){
        console.log('created()')
    },
    beforeMounted: function() {
        console.log('beforeMounted()')
    },
    mounted: function() {
        console.log('Mounted()')
    },
    beforeUpdated: function() {
        console.log('beforeUpdated()')
    },
    updated: function() {
        console.log('updated()')
    },
    beforeDestroyed: function() {
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