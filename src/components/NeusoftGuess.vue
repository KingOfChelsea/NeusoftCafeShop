<template>
  <!-- 猜你喜欢 -->
  <view class="caption">
    <text class="text">猜你喜欢</text>
  </view>
  <view class="guess">
    <navigator
      class="guess-item"
      v-for="item in guessList"
      :key="item.id"
      :url="`/pages/goods/goods?id=${item.id}`"
    >
      <image class="image" mode="aspectFill" :src="item.picture"></image>
      <view class="name"> {{ item.name }} </view>
      <view class="price">
        <text class="small">¥</text>
        <text>{{ item.price }}</text>
      </view>
    </navigator>
  </view>
  <view class="loading-text"> {{ finish ? '没有更多数据了哦~' : '正在加载...' }} </view>
</template>

<script setup lang="ts">
import { getGuessLikeAPI } from '@/services/NeusoftHomeGuessLike'
import type { NeusoftGuessLikeItem } from '@/types/NeusoftGuessItem'
import type { NeusoftPageParams } from '@/types/NeusoftPageParams'
import { onMounted, ref } from 'vue'
// 1.变量
const guessList = ref<NeusoftGuessLikeItem[]>([])
const pageParams: Required<NeusoftPageParams> = {
  page: 1,
  pageSize: 10,
}
const finish = ref(false)

const getHomeGoodGuessLikeData = async () => {
  if (finish.value === true) {
    return uni.showToast({ icon: 'fail', title: '没有更多数据了哦~' })
  }
  const res = await getGuessLikeAPI(pageParams)
  guessList.value.push(...res.result.items)
  console.log(guessList.value)

  // 分页条件
  if (pageParams.page < res.result.pages) {
    // 页码累加
    pageParams.page++
  } else {
    finish.value = true
  }
}
// 暴露方法
defineExpose({
  Neusoft_getHomeGoodGuessLikeData: getHomeGoodGuessLikeData,
})
onMounted(() => {
  getHomeGoodGuessLikeData()
})
</script>

<style scoped lang="scss">
:host {
  display: block;
}
/* 分类标题 */
.caption {
  display: flex;
  justify-content: center;
  line-height: 1;
  padding: 36rpx 0 40rpx;
  font-size: 32rpx;
  color: #262626;
  .text {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 28rpx 0 30rpx;

    &::before,
    &::after {
      content: '';
      width: 20rpx;
      height: 20rpx;
      background-image: url(@/static/images/bubble.png);
      background-size: contain;
      margin: 0 10rpx;
    }
  }
}

/* 猜你喜欢 */
.guess {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 20rpx;
  .guess-item {
    width: 345rpx;
    padding: 24rpx 20rpx 20rpx;
    margin-bottom: 20rpx;
    border-radius: 10rpx;
    overflow: hidden;
    background-color: #fff;
  }
  .image {
    width: 304rpx;
    height: 304rpx;
  }
  .name {
    height: 75rpx;
    margin: 10rpx 0;
    font-size: 26rpx;
    color: #262626;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-clamp: 2;
  }
  .price {
    line-height: 1;
    padding-top: 4rpx;
    color: #cf4444;
    font-size: 26rpx;
  }
  .small {
    font-size: 80%;
  }
}
// 加载提示文字
.loading-text {
  text-align: center;
  font-size: 28rpx;
  color: #666;
  padding: 20rpx 0;
}
</style>
