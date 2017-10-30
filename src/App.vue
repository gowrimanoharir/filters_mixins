<template>
  <div>
    <h1>Filters & mixins</h1>
    <p>{{ text | to-uppercase | to-lowercase }}</p>
    <hr>
    <button @click="fruits.push('Berries')">Add New Item</button>
    <input type="text" v-model="filtertext">
    <ul class="tbold" v-bind:class="[aText]">
      <li v-for="fruit in filteredFruits">{{fruit}}</li>
    </ul>
    <appList></appList>
  </div>
</template>

<script>
import List from './List.vue'
import {fruitMixin} from './fruitMixin'

export default {
  data () {
    return {
      text: 'Hello There',
    }
  },
  filters: {
    'to-uppercase'(value){
      return value.toUpperCase()
    }
  },
  mixins: [fruitMixin],
  components: {
    appList: List
  }
}
</script>

<style>
  @import './assets/main.css'
</style>
