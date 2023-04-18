<script setup>
import { RouterLink } from 'vue-router';
const {
    numberOfCorrectAnswers,
    quizLength,
} = defineProps(
    [
        'numberOfCorrectAnswers',
        'quizLength',
    ]
)
</script>
<template>
    <div class="results">
        <p>Your results...</p>
        <h1>{{ numberOfCorrectAnswers }}/{{ quizLength }}</h1>
        <RouterLink to="/">Back to Home Page</RouterLink>
    </div>
</template>

<style scoped>
.results {
    text-align: center;
    padding: 100px 0;
}

p {
    font-size: 25px;
}

h1 {
    font-size: 80px;
}
</style>