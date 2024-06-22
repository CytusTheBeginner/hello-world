<template>
    <p>counter : {{ count }}</p>
    <button @click="increment">increase number</button>
    <button v-on:click="decrement">decrease number</button>
    <button v-on:click="times_two">x2 number</button>
</template>

<script>
    export default {
        name: "Counter",
        data() {
            return{
                count: 0
            }   
        },

        methods: {
            increment() {
                this.count++
            },
            decrement() {
                this.count--
            },
            times_two() {
                this.count *= 2
            }
        }
    }
</script>