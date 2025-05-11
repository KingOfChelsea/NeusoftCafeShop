<template>
  <view class="category">
    <navigator
      class="category-item"
      hover-class="none"
      url="/pages/index/index"
      v-for="item in NeusoftProps.list"
      :key="item.id"
    >
      <image class="icon" :src="item.icon"></image>
      <text class="text">{{ item.name }}</text>
    </navigator>
  </view>
</template>

<script setup lang="ts">
import type { NeusoftCategoryItem } from '@/types/NeusoftCategoryItem'
const NeusoftProps = defineProps<{
  list: NeusoftCategoryItem[]
}>()
</script>

<style scoped lang="scss">
/* 5列等分布局，适配rpx单位 */
.category {
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* 关键：等分5列 */
  gap: 10rpx; /* 格子间距 */
  padding: 10rpx 0; /* 安全边距 */
  margin: 20rpx 0 0;
  min-height: 328rpx;
  .category-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* 图片和文字样式 */
    .icon {
      width: 100rpx; /* 根据设计图调整 */
      height: 100rpx; /* 正方形图标 */
    }
    .text {
      font-size: 26rpx; /* 小程序最小字号 */
      color: #666;
      text-align: center;
    }
  }
}
</style>
