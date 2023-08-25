<script>
import OptionApi from "./components/OptionApi.vue";
import CompositionApi from "./components/CompositionApi.vue";
import Form from "./components/Form.vue";
import Review from "./components/Review.vue";
export default {
    data() {
        return {
            count: 0,
        };
    },
    components: {
        OptionApi,
        CompositionApi,
        Form,
        Review
    },
};
</script>

<template>
    <!-- <button @click="count++">Contador: {{ count }}</button> -->
    <!-- <OptionApi/> -->
    <!-- <CompositionApi /> -->
    <Form />
    <Review />
</template>

<style>
#app {
    font-family: Arial, Helvetica, sans-serif;
    min-height: 100vh;
    max-width: 40rem;
    margin: 0 auto;
    text-align: center;
}
</style>
