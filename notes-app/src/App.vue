<script setup>
import { ref } from 'vue';
const showModal = ref(false);
const errorMessage = ref("")

const newNote = ref("")

const notes = ref([])

const addNote = () => {
  // 去除空格，或者使用v-model.trim
  // newNote.value = newNote.value.trim()

  if (newNote.value.length < 10) {
    errorMessage.value = "Note must be at least 10 characters long"
    return
  }
  notes.value.push({
    id: Math.floor(Math.random() * 1000000),
    text: newNote.value,
    date: new Date(),
    backgroundColor: genRandomColor(),
  });
  showModal.value = false;
  newNote.value = "";
  errorMessage.value = "";
}

function genRandomColor() {
  return "hsl(" + Math.random() * 360 + ", 100%, 75%)";
}
</script>

<template>
  <main>
    <div v-if="showModal" class="overlay">
      <div class="modal">
        <textarea v-model.trim="newNote" name="note" id="note" cols="30" rows="10"></textarea>
        <p v-if="errorMessage">{{ errorMessage }}</p>
        <button @click="addNote()">Add Note</button>
        <button class="close" @click="showModal = false">Close</button>
      </div>
    </div>
    <div class="container">
      <header>
        <h1>Notes</h1>
        <button @click="showModal = true">+</button>
      </header>
      <div class="cards-container">
        <div v-for="note in notes" :key="note.id" class="card" :style="{ backgroundColor: note.backgroundColor }">
          <p class="main-text">
            {{ note.text }}
          </p>
          <p class="date">
            {{ note.date.toLocaleDateString() }}
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  height: 100vh;
  width: 100vw;
}

.container {
  max-width: 1000px;
  padding: 10px;
  margin: 0 auto;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h1 {
  font-weight: bold;
  margin-bottom: 25px;
  font-size: 75px;
}

header button {
  border: none;
  padding: 10px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  background-color: green;
  border-radius: 100%;
  color: black;
  font-size: 20px;
  font-weight: bold;
}

.card {
  width: 225px;
  height: 225px;
  background-color: rgb(237, 182, 44);
  color: black;
  padding: 10px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
  margin-bottom: 20px;
}

.date {
  font-size: 12px;
  color: black;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.77);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  width: 750px;
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  position: relative;
  display: flex;
  flex-direction: column;
}

.modal button {
  padding: 10px 20px;
  font-size: 20px;
  width: 100%;
  background-color: blue;
  border: none;
  color: white;
  cursor: pointer;
  margin-top: 10px;
  /* border-radius: 10px; */
}

.modal p {
  color: red;
}

.modal .close {
  background-color: red;
  margin-top: 7px;
}
</style>