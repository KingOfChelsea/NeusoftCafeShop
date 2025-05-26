import type NeusoftSwiper from './NeusoftSwiper.vue'
import type NeusoftRecordment from './NeusoftRecordment.vue'
import type NeusoftGuess from './NeusoftGuess.vue'
//实现快速导入功能
declare module 'vue' {
  export interface GlobalComponents {
    NeusoftSwiper: typeof NeusoftSwiper
    NeusoftRecordment: typeof NeusoftRecordment
    NeusoftGuess: typeof NeusoftGuess
  }
}
// 组件实例类型
export type NeusoftGuessInstance = InstanceType<typeof NeusoftGuess>
