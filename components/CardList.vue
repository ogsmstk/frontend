
<template>
  <div class="content-style" style="background-color: #EEFFFF;">
    <ServiceCard
      v-for="item in data"
      :key="item.id" :title="item.title"
      :content="item.content"/>
  </div>
</template>

<script setup lang="ts">
  // WEBサービスの一覧を取得
  const { data } = useFetch('/api/serviceList');  //レンダリング時点で表示したいので状態監視は行わない
</script>

<style>
.content-style {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-wrap: wrap;
}
</style>