<script setup>
import Hooks from "../../../4-SFC/src/components/Hooks.vue";
import { ref } from 'vue'

const isOpen = ref(true)
</script>

<template>
    <input type="checkbox" v-model="isOpen"> Ativar aplicação: {{ isOpen }}
    <Hooks v-if="isOpen" />
</template>

<style>
#app {
    font-family: "Ubuntu", sans-serif;
    min-height: 100vh;
    max-width: 40rem;
    margin: 0 auto;
    text-align: center;
}
</style>
