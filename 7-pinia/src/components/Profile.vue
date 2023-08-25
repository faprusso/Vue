<script setup>
import {
    reactive,
    computed,
    ref,
    onMounted,
    onUpdated,
    onUnmounted,
} from "vue";
import UserInfo from "./UserInfo.vue";
import Repository from "./Repository.vue";
import Form from "./Form.vue";

const username = ref("");

const state = reactive({
    login: "",
    name: "",
    bio: "...",
    company: "",
    avatar_url: "",
    repos: [],
});

async function fetchGithubUser(searchInput) {
    const res = await fetch(`https://api.github.com/users/${searchInput}`);
    const { login, name, bio, company, avatar_url } = await res.json();

    state.login = login;
    state.name = name;
    state.bio = bio;
    state.company = company;
    state.avatar_url = avatar_url;
    state.repos = [];

    fetchUserRepos(login);
    console.log(`O state é igual a ${state}`);
}

async function fetchUserRepos(username) {
    const res = await fetch(`https://api.github.com/users/${username}/repos`);
    const repos = await res.json();
    state.repos = repos;
}

const quantityReposMessage = computed(() => {
    return state.repos.length > 0
        ? `${state.name} possui ${state.repos.length} respositórios públicos`
        : `${state.name} não possui repositórios públicos`;
});

onMounted(() => {
    console.log("O componente foi montado");
});

onUpdated(() => {
    console.log("O Componente foi atualizado");
});

onUnmounted(() => {
    console.log("O componente foi desmonstado");
});
</script>

<template>
    <slot></slot>

    <p v-if="username !== ''">
        Pesquisando por:
        <strong>https://api.github.com/users/{{ username }}</strong>
    </p>
    <Form @form-submit="fetchGithubUser" v-model="username" />

    <UserInfo
        v-if="state.login !== ''"
        :login="state.login"
        :bio="state.bio"
        :name="state.name"
        :company="state.company"
        :avatar_url="state.avatar_url"
    />

    <section style="background-color: rgb(80, 77, 77)">
        <h2
            v-if="state.login !== ''"
            style="background-color: #1c1a1d; font-size: 26px; padding-bottom: 1rem;"
        >
            {{ quantityReposMessage }}
        </h2>

        <Repository
            v-for="repo of state.repos"
            :full_name="repo.full_name"
            :description="repo.description"
            :html_url="repo.html_url"
        />
    </section>

    <slot name="footer"></slot>
</template>

<style scoped></style>
