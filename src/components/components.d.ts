import type NeusoftSwiper from './NeusoftSwiper.vue'
import type NeusoftRecordment from './NeusoftRecordment.vue'
import type NeusoftGuess from './NeusoftGuess.vue'
declare module 'vue' {
  export interface GlobalComponents {
    NeusoftSwiper: typeof NeusoftSwiper
    NeusoftRecordment: typeof NeusoftRecordment
    NeusoftGuess: typeof NeusoftGuess
  }
}
