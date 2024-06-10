<template>
  <h1>About Page</h1>
  <h2>{{ $hello('World') }}</h2>
</template>

<script setup>

definePageMeta({
  middleware: 'auth',
  layout: 'custom',
});

const { $hello } = useNuxtApp();

</script>