<template>
  <div class="home">
    <place-holder/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PlaceHolder from '@/components/PlaceHolder.vue';

@Component({
  components: {
    PlaceHolder,
  },
})
export default class Home extends Vue {}
</script>
