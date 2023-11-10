<script>
import BooksList from "../components/books/BooksList.vue";
import axios from 'axios';

export default {
    data() {
    return {
      books : [],
      pagination :{
        links : [],
      }
    };
  },

  methods:{
    fetchBooks(apiUri = 'http://127.0.0.1:8000/api/books'){
      axios.get(apiUri).then((response) => {
        console.log(response);
        this.books = response.data.data;
        this.pagination.links = response.data.links; 
      })
      .catch((error) => {
        console.error('Errore nella chiamata API', error);
      });
    }
  },

  created() {
    this.fetchBooks();
  },

  components: {
    BooksList,
  },
};
</script>

<template>
  <div class="container">
    <h1 class="text-center my-3">Libreria : </h1>
    <BooksList :books="books"/>
  </div>
  
</template>

<style lang="scss" ></style>