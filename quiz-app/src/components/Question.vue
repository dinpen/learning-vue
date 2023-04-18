<script setup>
// defineProps 传递给当前组件的属性
const { question } = defineProps(['question'])
// defineEmits 传递给父组件的事件
const emit = defineEmits([
    "selectOptions",
])

const emitSelectOptions = (isCorrect) => {
    emit("selectOptions", isCorrect)
}
</script>

<template>
    <div class="question-container">
        <h1 class="question">{{ question.text }}</h1>
    </div>
    <div class="options-container">
        <div class="option" v-for="option in question.options" :key="option.id"
            @click="emitSelectOptions(option.isCorrect)">
            <p class="option-label">{{ option.label }}</p>
            <div class="option-value">
                <p>{{ option.text }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.question-container {
    margin-top: 20px;
    /* margin-bottom: 20px; */
}

.question {
    font-size: 40px;
    margin-bottom: 20px;
}

.option {
    display: flex;
    margin-bottom: 20px;
    cursor: pointer;
}

.option-label {
    background-color: bisque;
    width: 50px;
    height: 50px;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.option-value {
    background-color: rgb(244, 239, 239);
    width: 100%;
    font-size: 30px;
    padding: 0 20px;
}
</style>