<template>
    <div class="p-2">
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">{{ props.title }}</h5>
            <p class="card-text">{{ props.content }}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  title: String,
  content: String
});

</script>

<style>
.card-style {
  /* flex-wrap:wrap;; */
}
</style>