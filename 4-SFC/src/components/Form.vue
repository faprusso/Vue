<script setup>
import { reactive, ref, computed } from "vue";

const searchInput = ref("");

const state = reactive({
    login: "",
    name: "",
    bio: "...",
    company: "",
    avatar_url: "",
    repos: [],
});

async function fetchGithubUser(ev) {
    ev.preventDefault();
    const res = await fetch(
        `https://api.github.com/users/${searchInput.value}`
    );
    const { login, name, bio, company, avatar_url } = await res.json();

    state.login = login;
    state.name = name;
    state.bio = bio;
    state.company = company;
    state.avatar_url = avatar_url;
    state.repos = [];

    fetchUserRepos();
    console.log(`O state é igual a ${state}`);
}

async function fetchUserRepos() {
    const res = await fetch(
        `https://api.github.com/users/${state.login}/repos`
    );
    const repos = await res.json();
    state.repos = repos;
    console.log(repos);
}

const quantityReposMessage = computed(() => {
    return state.repos.length > 0
        ? `${state.name} possui ${state.repos.length} respositórios públicos`
        : `${state.name} não possui repositórios públicos`;
});
</script>

<template>
    <h1>GitHub User Data</h1>
    <p v-if="searchInput !== ''">
        Pesquisando por:
        <strong>https://api.github.com/users/{{ searchInput }}</strong>
    </p>
    <form @submit="fetchGithubUser">
        <input type="text" v-model.lazy="searchInput" />
        <button v-on:click="fetchGithubUser">Carregar Usuário</button>
    </form>
    <div v-if="state.login !== ''">
        <img v-bind:src="state.avatar_url" />
        <strong>@{{ state.login }}</strong>
        <h2>{{ state.name }}</h2>
        <h3>{{ state.company }}</h3>
        <span>{{ state.bio }}</span>
    </div>

    <section
        v-if="state.repos.length > 0"
        style="background-color: rgb(80, 77, 77)"
    >
        <h2
            v-if="state.login !== ''"
            style="background-color: #1c1a1d; font-size: 22px"
        >
            {{ quantityReposMessage }}
        </h2>
        <article v-for="repo of state.repos">
            <h3>{{ repo.full_name }}</h3>
            <p>{{ repo.description }}</p>
            <a :href="repo.html_url" target="_blank">Ver no GituHub</a>
        </article>
    </section>
</template>

<style scoped>
img {
    border: 1px solid #e5e5e5;
    border-radius: 999px;
    display: block;
    margin: 1rem auto;
    width: 8rem;
    height: 8rem;
}

h1,
h2 {
    color: #f64348;
    margin: 1rem auto 0.25rem;
}

h3 {
    margin: 1rem auto 0.25rem;
}

span {
    display: block;
    margin: 1rem auto;
}

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
    text-transform: uppercase;
}

button:hover {
    cursor: pointer;
    filter: brightness(0.95);
}

a {
    color: #f64348;
}
#app {
    display: grid;
    place-content: center;
    min-height: 100vh;
}
button {
    font-size: 1rem;
}
</style>
