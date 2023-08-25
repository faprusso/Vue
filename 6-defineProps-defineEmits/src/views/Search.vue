<script setup>
import { ref } from "vue";
import Profile from "../components/Profile.vue";

const isOpen = ref(true);
</script>

<template>
    <input type="checkbox" v-model="isOpen" /> Ativar aplicação
    <Profile v-if="isOpen">
        <h1>GitHub User Data</h1>
        <template v-slot:footer>
            <footer>
                Desenvolvido por
                <a href="https://github.com/faprusso" target="_blank"
                    >Felipe Russo</a
                >
            </footer>
        </template>
    </Profile>
</template>

<style scoped></style>
