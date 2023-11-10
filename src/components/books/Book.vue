<script>
export default {
  data() {
    return {
        
    };
  },
  props: {
    book: Object,
  },
  methods:{
    getBadgeColorClass(index){
        if(index === 0){
            return "text-bg-success";
        }

        if(index === 1){
            return "text-bg-warning";
        }

        if(index === 2){
            return "text-bg-secondary";
        }

        return "text-bg-success";
    }
  }
};
</script>

<template>
    <div class=" d-flex align-items-center clearfix">
        <div class="card p-3 w-100">  
            <div class="row g-3 ">
                <div class="card-header">
                    <div class="col-md-6 col-12 d-inline-block">
                        <strong>Id: </strong> {{ book.id }}
                    </div>
                    <div class="col-md-6 col-12 d-inline-block">
                        <strong>Titolo: </strong> {{ book.title }}
                    </div>
                </div>
                <div class="card-body m-0">
                    <div class="row">
                        <div v-if="book.genre_id"    
                            class="col-md-6 col-12 d-inline-block my-2 ">
                            <span :class="getBadgeColorClass(book.genre_id)" class="badge">
                                <strong>Tipo:</strong>
                                {{ book.genre ? book.genre.label : 'Nessun genre' }}
                            </span>
                        </div>
                        <div v-if="book.type" class="col-md-6 col-12 d-inline-block my-2">
                            <strong>Tipo: </strong>
                            <div v-for="type in book.types">
                                {{ type.label }} 
                            </div>
                        </div>
                    </div>
                    
                    <div class="my-2">
                        <strong>Descrizione: </strong> {{ book.abstract }}
                        <hr>
                    </div>
                    <div class="my-2">
                        <strong>Pubblicazione: </strong> {{ book.publication_year }}
                    </div>
                </div>  
            </div>
        </div>
    </div>
</template>

<style lang="scss">
</style>