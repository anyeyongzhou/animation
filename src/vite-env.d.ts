/// <reference types="vite/client" />

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const vueComponent: DefineComponent<{}, {}, any>;
  export default vueComponent;
}

declare module 'element-plus/dist/locale/zh-cn.mjs';

declare module 'lodash/debounce'

declare module 'lodash/throttle'
declare module '~/composables/dark'
declare module '@vueuse/core'