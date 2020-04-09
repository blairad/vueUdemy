<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ switchName() }}</p>
        <button @click="resetName">Reset Name</button>
    </div>
</template>

<script>
    export default {
        
        props: {
            myName: {
                type: String,
                required: true
            }
            
        },
        methods: {
            switchName() {
                return this.myName.split("").reverse().join("");
                // split("") split on each character
            },
            resetName() {
                this.myName = 'Andrew';
                this.$emit('nameWasRest', this.myName)

            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
