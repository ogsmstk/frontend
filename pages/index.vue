<template>
  <div class="container-style">
    <h1>ログインページ</h1>
  </div>
</template>

<script setup lang="ts">
// サーバーディレクトリ直下の処理はimportするとログにエラーが出る（正しく動作はする）
import insertRedisSample from "../api/redis/insert"
import getWebSiteIndex from "../api/website/index"

var count = 0;
definePageMeta({
  middleware: 'auth',
});

//実験
async function bbbbb() {
  count = count + 1
  await insertRedisSample(count);
}

// スタブ
async function ccccc() {
  const ccccc = await getWebSiteIndex(count);
  console.log(ccccc)
}

</script>
<style>
  .container-style {
    width: 80%;
    margin-right: auto;
    margin-left: auto;
  }
</style>