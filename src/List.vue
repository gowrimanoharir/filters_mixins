<template>
  <div>
    <h1>Filters & mixins</h1>
    <hr>
    <input type="text" v-model="filtertext">
    <ul class="tbold" v-bind:class="[lText]">
      <li v-for="fruit in filteredFruits">{{fruit}}</li>
    </ul>
  </div>
</template>

<script>
import {fruitMixin} from './fruitMixin'

export default {
    mixins: [fruitMixin],
    created(){
        console.log('created in list')
    }
}
</script>

<style>

</style>
