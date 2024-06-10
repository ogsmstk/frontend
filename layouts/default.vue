<template>
  <div>
    <Navbar />
    <slot />
  </div>
</template>

<!-- メモ frontend/app.vue が存在しない場合は自動的にdefault.vue(本ファイル)のレイアウトファイルが適用される -->
<script setup>
import Navbar from '@/components/Navbar';
</script>