<script setup>
defineProps(["full_name", "description", "html_url"]);
</script>

<template>
    <article>
        <h3>{{ full_name }}</h3>
        <p>{{ description }}</p>
        <a :href="html_url" target="_blank">Ver no GituHub</a>
    </article>
</template>

<style scoped>
h3 {
    margin: 1rem auto 0.25rem;
}
a {
    color: #f64348;
}
</style>
