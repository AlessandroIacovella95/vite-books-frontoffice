<script>
 import Book from "./Book.vue";

 export default {

  props:{
    books: Object,
  },

  components: {
    Book,
  },
};
</script>

<template>
  <Book class="my-3" v-for="book in books" :key="book.id" :book="book" />
</template>

<style lang="scss" ></style>