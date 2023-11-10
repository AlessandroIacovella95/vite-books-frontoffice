<script >
import { RouterView } from 'vue-router';
import NavbarUi from './ui/NavbarUi.vue';

export default{
    components : {RouterView , NavbarUi}
}
</script>

<template>
<NavbarUi/>
  <RouterView/>
</template>

<style lang="scss">

</style>
