<script setup>
import { useSearchHistoryStore } from "../stores/useSearchHistoryStore";

const searchHistory = useSearchHistoryStore()
</script>

<template>
    <h1>Welcome!</h1>
    <p>This is the homepage of the app.</p>

    <section v-if="searchHistory.users.length > 0">
        <h2>Histórico de Pesquisa</h2>
        <p v-for="user of searchHistory.users">{{ user }}</p>
    </section>
</template>

<style scoped>
section {
    margin: 1rem 0;
}
p {
    margin-top: 1rem;
}
</style>
