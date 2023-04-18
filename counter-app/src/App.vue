<script setup>
import {ref} from "vue"
const count = ref(0)

const addToCount=()=>{
  count.value=count.value+1
}

const subtractFromCount=()=>{
  count.value=count.value-1
}
</script>

<!-- <script>
  export default{
    data(){
      return {
        count:0
      }
    },
    methods: {
      addToCount(){
        this.count=this.count+1
      },
      substractFromCount(){
        this.count=this.count-1
      }
    },
  }
</script> -->

<template>
  <main>
    <div>
      <h4>The current count is ...</h4>
      <h1>{{count}}</h1>
      <button @click="addToCount()">+</button>
      <button @click="subtractFromCount()">-</button>
    </div>
  </main>
</template>

<style scoped>
main{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #f5f5f5;
}
div{
  text-align: center;
}
</style>