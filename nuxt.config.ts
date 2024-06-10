// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // builder: 'webpack',
  css: [
    "bootstrap/dist/css/bootstrap.css",
    "bootstrap-vue-3/dist/bootstrap-vue-3.css",
  ],
  app: {
    head: {
      title: 'Nuxt 3 basic',
      meta: [{ name: 'description', content: 'Nuxt 3 for beginners' }],
      // link: [{ rel: 'icon', href: '/favicon.ico' }],
    },
  },
  nitro: {
    // Nitro options
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false, // Auto-imports （/folder/file.vue を<FolderFile />のように読み込める）を使用しない
    },
  ],

  // hooks: {
    // 'nitro:config': (config: NitroConfig) => {
      // nitro の option 側に設定する場合、 scanDirs が nuxt 固有の設定を含んでしまうため、 mock モードではそれをここで上書きする
      // isDebugMode は TEST=true で true を返却するメソッドがどこかで定義されてる
      // if (isDebugMode()) {
        // const stubServer = resolve(__dirname, './stub/server')

        // config.srcDir = stubServer
        // config.scanDirs = [stubServer]
      // }
    // }
  // },
})

// function isDebugMode() {
  // return true
// }


