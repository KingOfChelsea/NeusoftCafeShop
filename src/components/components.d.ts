import type NeusoftSwiper from './NeusoftSwiper.vue'

declare module 'vue' {
  export interface GlobalComponents {
    NeusoftSwiper: typeof NeusoftSwiper
  }
}
