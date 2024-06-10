import { defineNuxtRouteMiddleware } from "nuxt/app";

export default defineNuxtRouteMiddleware((to, from) => {
  if (from.fullPath === '/') {
    return console.log('ホーム画面からに遷移しました');
  }

  if (to.fullPath === '/') {
    return console.log('ホーム画面に遷移しました');
  }
});

// 全てのルートに適用する場合はauth.global.vue　というファイル名にすることで全てのルートに適用可能
// layoutsディレクトリのレイアウトファイルではdefinePageMeta関数によるmiddlewareの設定はできない。