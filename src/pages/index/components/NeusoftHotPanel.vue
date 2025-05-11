<template>
  <!-- 推荐专区 -->
  <view class="panel hot">
    <view class="item" v-for="item in NeusoftProps.list" :key="item.id">
      <view class="title">
        <text class="title-text">{{ item.title }}</text>
        <text class="title-desc">{{ item.alt }}</text>
      </view>
      <navigator hover-class="none" :url="`/pages/hot/hot?type=${item.type}`" class="cards">
        <image
          v-for="src in item.pictures"
          :key="src"
          class="image"
          mode="aspectFit"
          :src="src"
        ></image>
      </navigator>
    </view>
  </view>
</template>

<script setup lang="ts">
import type { NeusoftHotItem } from '@/types/NeusoftHotItem'

const NeusoftProps = defineProps<{
  list: NeusoftHotItem[]
}>()
</script>

<style scoped lang="scss">
.hot {
  min-height: 508rpx;
  margin: 20rpx 20rpx 0;
  border-radius: 10rpx;
  background-color: #fff;
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 关键：等分5列 */
  .item {
    height: 254rpx;
    .title {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      padding: 24rpx 24rpx 0;
      font-size: 32rpx;
      align-items: center;
      .title-desc {
        font-size: 24rpx;
        color: #7f7f7f;
        margin-left: 18rpx;
      }
    }
    .cards {
      display: flex;
      padding: 15rpx 20rpx;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      .image {
        width: 150rpx;
        height: 150rpx;
      }
    }
  }
}
</style>
