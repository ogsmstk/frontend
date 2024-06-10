import { method } from '../composables/aaaaa';
<template>
  <div>
    <h1>Main Page</h1>
    <!-- <h2>{{ data }}</h2> -->
    <div>
      <button @click="aaaa()">increase</button>
      <button @click="bbbbb()">reqest1</button>
      <button @click="ccc()">reqest2</button>
    </div>
  </div>
</template>

<script setup>
// サーバーディレクトリ直下の処理はimportするとログにエラーが出る（正しく動作はする）
import getSpreadSheetIndex from "../api/spreadsheet/index"

definePageMeta({
  middleware: 'auth',
});

function aaaa() {
  const aaaaa = method(); //method()はcomposables/aaaa.tsで、ファイルでなく、exportした関数名となる。
  console.log(aaaaa)
}

// リクエスト方法１
// APIのリクエストをvueファイルで行うパターン
async function bbbbb() {
  const data = await $fetch("http://localhost:8080/spreadsheet/index")
  console.log(data);
}

// リクエスト方法２
// APIのリクエストserverフォルダ直下で行い、結果を受け取るパターン
// vueは見た目に関する処理を集約すべきと考えるためこちらがよいか
async function ccc() {
  const data = await getSpreadSheetIndex();
  console.log(data);
}
</script>