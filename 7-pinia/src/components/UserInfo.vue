<script setup>
defineProps(["login", "name", "bio", "company", "avatar_url"]);
</script>

<template>
    <img v-bind:src="avatar_url" />
    <strong>@{{ login }}</strong>
    <h2>{{ name }}</h2>
    <h3>{{ company }}</h3>
    <span>{{ bio }}</span>
</template>

<style>
img {
    border: 1px solid #e5e5e5;
    border-radius: 999px;
    display: block;
    margin: 1rem auto;
    width: 8rem;
    height: 8rem;
}
h1, h2 {
    font-size: 22px;
    color: #f64348;
    margin: 1rem auto 0.25rem;
}
span {
    display: block;
    margin: 1rem auto;
}
</style>
