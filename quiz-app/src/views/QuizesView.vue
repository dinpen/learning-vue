<script setup>
import { ref, watch } from 'vue'
import q from '../data/questions.json'
import Card from '../components/Card.vue'

const quizes = ref(q)
const search = ref("")

// 监听 search 的变化, 并且过滤 quizes
watch(search, () => {
    quizes.value = q.filter(quiz => quiz.name.toLowerCase().includes(search.value.toLocaleLowerCase()))
})

</script>


<template>
    <header>
        <h1>Quizes</h1>
        <input v-model.trim="search" type="text" placeholder="Search...">
    </header>
    <div class="options-container">
        <Card v-for="quiz in quizes" :key="quiz.id" :quiz="quiz" />
    </div>
</template>

<style scoped>
header {
    margin-bottom: 10px;
    margin-top: 10px;
    display: flex;
    align-items: center;
}

header h1 {
    font-weight: bold;
    margin-right: 30px;

}

header input {
    border: none;
    background-color: rgb(128, 128, 128, 0.1);
    padding: 10px;
    border-radius: 5px;
}

.options-container {
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
}
</style>