<script setup>
import { ref } from "vue";
const searchInput = ref("");
import { useSearchHistoryStore } from "../stores/useSearchHistoryStore";

const emit = defineEmits(["formSubmit", "update:modelValue"]);

const searchHistory = useSearchHistoryStore()

function handleSubmit(ev) {
    ev.preventDefault();
    searchHistory.pushToHistory(searchInput.value)
    emit("formSubmit", searchInput.value);
}
function showSearchHistory() {
    alert(`Histórico de pesquisa: 
${searchHistory.users.join('\n')}
    `)
}

</script>

<template>
    <form @submit="handleSubmit">
        <input
            type="text"
            v-model="searchInput"
            @input="$emit('update:modelValue', $event.target.value)"
        />
        <button>Carregar Usuário</button>
        <button type="button" @click="showSearchHistory">Ver Histórico</button>
    </form>
</template>

<style scoped>
input,
button {
    width: 20rem;
    padding: 0.5rem;
}

input {
    background-color: #1c1a1d;
    border: 1px solid #f64348;
    border-radius: 0.25rem;
    color: #e5e5e5;
    margin: 1rem 1rem 1rem 1rem;
}

button {
    background-color: #f64348;
    border: unset;
    border-radius: 0.25rem;
    color: #1c1a1d;
    font-size: 1rem;
    font-weight: 700;
    margin: .5rem;
    text-transform: uppercase;
}

button:hover {
    cursor: pointer;
    filter: brightness(0.95);
}
</style>
