<template>
  <form @submit.prevent="send" method="post">
    <input type="text" v-model="obj.id">
    <input type="text" v-model="obj.type">
    {{ obj }}
    <button type="submit">send</button>
  </form>

  <button @click="get">get</button>
  <table>
    <tr>
      <th>id</th>
      <th>game</th>
    </tr>
    <tr v-for="o in data">
      <td>{{ o.id + 1 }}</td>
      <td>{{ o.type }}</td>
    </tr>
  </table>
</template>

<script setup lang="ts">
import axios from "axios";
import { onMounted, reactive, ref } from "vue";

onMounted(async () => get());

const data = ref<[{ id: '', type: '' }]>([]);
const obj = reactive({
  id: '',
  type: ''
});

const send = async () => {
  obj.id = obj.id.toString();
  const link = 'http://localhost:5000/';

  const res = await axios.post(link, obj);
  console.log(res.data);
  data.value = res.data;
};

const get = async () => {
  const link = 'http://localhost:5000/';

  const res = await axios.get(link);
  console.log(res.data);
  data.value = res.data;
};

</script>

<style scoped>
* {
  padding: .5rem;
}

table,
th,
td {
  border: 1px solid black;
  border-collapse: collapse;
}

th,
td {
  padding: 1rem;
}
</style>