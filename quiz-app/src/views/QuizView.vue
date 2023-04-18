<script setup>
import quizes from '../data/questions.json'
import { ref, watch, computed } from 'vue'
import { useRoute } from 'vue-router'
import Question from '../components/Question.vue'
import QuizHeader from '../components/QuizHeader.vue'
import Result from '../components/Result.vue'

const route = useRoute()
const quizId = parseInt(route.params.id)
const quiz = quizes.find(q => q.id === quizId)
const currentQuestionIndex = ref(0)
const numberOfCorrectAnswers = ref(0)

// const answers = ref([])

// 当 currentQuestionIndex 值发生变化时，更新 questionStatus 的值
// const questionStatus = ref(`${currentQuestionIndex.value} / ${quiz.questions.length}`)
// watch(() => currentQuestionIndex.value, () => {
//     questionStatus.value = `${currentQuestionIndex.value} / ${quiz.questions.length}`
// })

const questionStatus = computed(() => `${currentQuestionIndex.value + 1}/${quiz.questions.length}`)
const barPercentage = computed(() => `${(currentQuestionIndex.value + 1) / quiz.questions.length * 100}%`)

const showResults = ref(false)

// const quizDone = computed(() => currentQuestionIndex.value + 1 === quiz.questions.length)

// const onOptionSelected = (answer) => {
//     answers.value.push(answer)
//     currentQuestionIndex.value++
// }

const onOptionSelected = (isCorrect) => {
    if (isCorrect) {
        numberOfCorrectAnswers.value++
    }
    if (quiz.questions.length == currentQuestionIndex.value + 1) {
        showResults.value = true
        return
    }
    // if (quizDone.value) {
    //     return
    // }
    currentQuestionIndex.value++
}

</script>

<template>
    <div>
        <QuizHeader :questionStatus="questionStatus" :barPercentage="barPercentage" />
        <div>
            <Question v-if="!showResults" :question="quiz.questions[currentQuestionIndex]"
                @selectOptions="onOptionSelected" />
            <Result v-else :numberOfCorrectAnswers="numberOfCorrectAnswers" :quizLength="quiz.questions.length" />
        </div>
        <!-- <div v-if="quizDone">
                                                                                    <p>All questions done.</p>
                                                                                    <button>Submit</button>
                                                                                </div> -->

        <!-- <button v-else="quizDone" @click="currentQuestionIndex++">Next</button> -->
        <!-- <button @click="currentQuestionIndex++">Next</button> -->

    </div>
</template>

<style scoped>
button {
    margin-top: 20px;
    font-size: 30px;
}

/* p {
    font-size: 30px;
    color: green;
} */
</style>